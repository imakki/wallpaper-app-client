import { act } from 'react-dom/test-utils';

const {
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAIL,
} = require('../constants/constant');

function imageListReducer(
  state = {
    loading: false,
    hasMoreData: true,
    wallpaperList: [],
  },
  { type, payload }
) {
  switch (type) {
    case IMAGE_LIST_REQUEST:
      return { ...state, loading: true };
    case IMAGE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        wallpaperList: [...state.wallpaperList, ...payload.images],
        hasMoreData: !!payload.images.length,
      };
    case IMAGE_LIST_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}

export { imageListReducer };
