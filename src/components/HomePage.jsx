import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listWallpapers } from '../actions/imageActions';
import ImageComponent from './ImageComponent';
import Navbar from './Navbar';

const IMAGE_GRID = 3;

function createGridArray(imageArr, setGrid, gridArr) {}

const HomePage = () => {
  const dispatch = useDispatch();
  const [gridImages, setGridImages] = useState([]);
  const wallpaperList = useSelector((state) => state.imageList);
  const { loading, error, images } = wallpaperList;

  //   const gridImages = [];

  useEffect(() => {
    dispatch(listWallpapers());
  }, []);

  const createGridArray = useCallback(
    (arr) => {
      if (!arr) {
        return [];
      }
      console.log('computing grid..');
      arr &&
        arr.forEach((image, index) => {
          const gridIndex = index % IMAGE_GRID;
          if (!gridImages[gridIndex]) {
            setGridImages((gridImages[gridIndex] = []));
          }
          setGridImages(gridImages[gridIndex].push(image));
        });
      return gridImages;
    },
    [images]
  );

  const wallpaperGrid = useMemo(() => createGridArray(images?.images), [
    images,
    createGridArray,
  ]);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : wallpaperGrid ? (
        <div className="flex justify-between w-9/12 mt-2 m-0 m-auto">
          {wallpaperGrid?.map((wallpaperlist) => {
            return <ImageComponent imageList={wallpaperlist} />;
          })}
        </div>
      ) : (
        <div>No wallpapers</div>
      )}
      {/* {error && <div>{error.message}</div>} */}
    </div>
  );
};

export default HomePage;
