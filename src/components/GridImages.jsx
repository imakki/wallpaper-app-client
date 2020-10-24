import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import ImageComponent from './ImageComponent';

const GridImages = ({
  wallpaperList,
  loading,
  error,
  loadmore,
  ImageGridSize,
}) => {
  let bottomBoundaryRef = useRef(null);

  console.log(wallpaperList);
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            loadmore();
          }
        });
      }).observe(node);
    },
    [loadmore]
  );

  const gridImages = useMemo(() => {
    const grid = [];
    wallpaperList.forEach((image, index) => {
      const gridIndex = index % ImageGridSize;
      if (!grid[gridIndex]) {
        grid[gridIndex] = [];
      }
      grid[gridIndex].push(image);
    });
    return grid;
  }, [wallpaperList, ImageGridSize]);

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);
  return (
    <div>
      {error && <div>{error.message}</div>}
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
    </div>
  );
};

export default GridImages;
