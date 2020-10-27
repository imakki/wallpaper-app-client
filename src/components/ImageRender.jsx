import React, { useEffect, useState } from 'react';
import '../styles/custom.css';
import { useDispatch } from 'react-redux';
import { setFavouriteWallpaper } from '../actions/imageActions';

const ImageRender = ({ images }) => {
  const dispatch = useDispatch();
  const [imageId, setImageId] = useState();
  useEffect(() => {
    if (imageId) {
      dispatch(setFavouriteWallpaper(imageId));
    }
  }, [imageId, dispatch]);

  return images?.map((item) => {
    return (
      <div
        key={item.id}
        className="container-hover transition duration-500 ease-in-out transform scale-90 hover:-translate-y-1 hover:scale-100"
      >
        <img
          src={item.download_url}
          alt={item.author}
          width={item.width}
          height={item.height}
          loading="lazy"
        />
        <div className="overlay"></div>
        <div className="button">
          <button onClick={() => setImageId(item._id)}>
            <i className="fas fa-heart"></i>
          </button>
          <button onClick={() => console.log('clicked')}>
            <i className="fas fa-download"></i>
          </button>
          <p className="text-white">{item.author}</p>
        </div>
      </div>
    );
  });
};

export default ImageRender;
