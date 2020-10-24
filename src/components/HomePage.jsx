import React, { useEffect, useCallback } from 'react';
import { useDispatch, connect } from 'react-redux';
import { listWallpapers } from '../actions/imageActions';
import { incrementPage } from '../actions/pageAction';
import GridImages from './GridImages';

const IMAGE_GRID = 3;

const HomePage = ({ pageNumber, imageList }) => {
  const dispatch = useDispatch();
  const { loading, error, wallpaperList, hasMoreData } = imageList;

  const incPage = useCallback(() => {
    dispatch(incrementPage);
  }, [dispatch]);

  useEffect(() => {
    hasMoreData && dispatch(listWallpapers(pageNumber));
  }, [pageNumber, dispatch, hasMoreData]);

  return (
    <div>
      <GridImages
        wallpaperList={wallpaperList}
        loading={loading}
        error={error}
        loadmore={incPage}
        ImageGridSize={IMAGE_GRID}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  pageNumber: state.pageNumber,
  imageList: state.imageList,
});

export default connect(mapStateToProps)(HomePage);
