import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { listWallpapers } from '../actions/imageActions';
import { incrementPage } from '../actions/pageAction';
import ImageComponent from './ImageComponent';
import Navbar from './Navbar';

const IMAGE_GRID = 3;

const HomePage = ({ pageNumber, imageList }) => {
  const dispatch = useDispatch();
  let bottomBoundaryRef = useRef(null);
  const { loading, error, wallpaperList, hasMoreData } = imageList;

  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch(incrementPage);
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  useEffect(() => {
    hasMoreData && dispatch(listWallpapers(pageNumber));
  }, [pageNumber, dispatch, hasMoreData]);

  //   const createGridArray = useCallback(
  //     (arr) => {
  //       if (!arr) {
  //         return [];
  //       }
  //       console.log('computing grid..');
  //       arr &&
  //         arr.forEach((image, index) => {
  //           const gridIndex = index % IMAGE_GRID;
  //           if (!gridImages[gridIndex]) {
  //             setGridImages((gridImages[gridIndex] = []));
  //           }
  //           setGridImages(gridImages[gridIndex].push(image));
  //         });
  //       return gridImages;
  //     },
  //     [gridImages]
  //   );

  const gridImages = useMemo(() => {
    const grid = [];
    wallpaperList.forEach((image, index) => {
      const gridIndex = index % IMAGE_GRID;
      if (!grid[gridIndex]) {
        grid[gridIndex] = [];
      }
      grid[gridIndex].push(image);
    });
    return grid;
  }, [wallpaperList]);
  console.log(gridImages);

  return (
    <div>
      <Navbar />
      {gridImages ? (
        <div className="flex justify-between w-9/12 mt-2 m-0 m-auto">
          {gridImages?.map((imageList, i) => {
            return <ImageComponent key={i} imageList={imageList} />;
          })}
        </div>
      ) : (
        <div>No wallpapers</div>
      )}
      <div
        id="page-bottom-boundary"
        className="border border-gray-900 "
        ref={bottomBoundaryRef}
      >
        {loading && <div className="text-center">Loading...</div>}
      </div>
      {/* {error && <div>{error.message}</div>} */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pageNumber: state.pageNumber,
  imageList: state.imageList,
});

export default connect(mapStateToProps)(HomePage);
