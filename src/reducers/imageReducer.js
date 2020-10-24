const {
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAIL,
  SET_FAV_WALLPAPER_REQUEST,
  SET_FAV_WALLPAPER_SUCCESS,
  SET_FAV_WALLPAPER_FAIL,
  GET_FAV_WALLPAPER_REQUEST,
  GET_FAV_WALLPAPER_SUCCESS,
  GET_FAV_WALLPAPER_FAIL,
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

function setFavImageReducer(state = {}, action) {
  switch (action.type) {
    case SET_FAV_WALLPAPER_REQUEST:
      return { loading: true };
    case SET_FAV_WALLPAPER_SUCCESS:
      return { loading: false, favImage: action.payload };
    case SET_FAV_WALLPAPER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

function getFavImageReducer(state = { favouriteImagesList: [] }, action) {
  switch (action.type) {
    case GET_FAV_WALLPAPER_REQUEST:
      return { loading: true };
    case GET_FAV_WALLPAPER_SUCCESS:
      return { loading: false, favouriteImagesList: action.payload };
    case GET_FAV_WALLPAPER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export { imageListReducer, setFavImageReducer, getFavImageReducer };
