import React, { useEffect, useCallback } from 'react';
import { useDispatch, connect } from 'react-redux';
import { getFavouriteWallpaper } from '../actions/imageActions';
import { incrementPage } from '../actions/pageAction';
import GridImages from './GridImages';

const IMAGE_GRID = 3;

const FavouriteImagePage = ({ pageNumber, getFavImage }) => {
  const dispatch = useDispatch();
  const { loading, error, favouriteImagesList } = getFavImage;

  const incPage = useCallback(() => {
    dispatch(incrementPage);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFavouriteWallpaper());
  }, [dispatch]);

  return (
    <div>
      {favouriteImagesList ? (
        <GridImages
          wallpaperList={favouriteImagesList}
          loading={loading}
          error={error}
          loadmore={incPage}
          ImageGridSize={IMAGE_GRID}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pageNumber: state.pageNumber,
  getFavImage: state.getFavImage,
});

export default connect(mapStateToProps)(FavouriteImagePage);
