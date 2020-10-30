import axios from 'axios';
import {
  IMAGE_LIST_FAIL,
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  SET_FAV_WALLPAPER_REQUEST,
  SET_FAV_WALLPAPER_SUCCESS,
  SET_FAV_WALLPAPER_FAIL,
  GET_FAV_WALLPAPER_REQUEST,
  GET_FAV_WALLPAPER_SUCCESS,
  GET_FAV_WALLPAPER_FAIL,
  endPoint,
} from '../constants/constant';

const listWallpapers = (pageNumber) => async (dispatch, getState) => {
  try {
    if (!pageNumber) return;
    dispatch({ type: IMAGE_LIST_REQUEST });
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios(
      `/api/images?page=${pageNumber}&limit=10`,
      {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      }
    );
    dispatch({ type: IMAGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: IMAGE_LIST_FAIL, payload: error.message });
  }
};

const setFavouriteWallpaper = (imageId) => async (dispatch, getState) => {
  try {
    dispatch({ type: SET_FAV_WALLPAPER_REQUEST });
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.post(
      `/api/users/favimage/${userInfo._id}`,
      {
        imageId: imageId,
      },
      {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      }
    );
    dispatch({ type: SET_FAV_WALLPAPER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SET_FAV_WALLPAPER_FAIL, payload: error.message });
  }
};

const getFavouriteWallpaper = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_FAV_WALLPAPER_REQUEST });
    const {
      userSignIn: { userInfo },
    } = getState();
    const { data } = await axios.get(
      `/api/users/getfavimag/${userInfo._id}`,
      {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      }
    );
    dispatch({ type: GET_FAV_WALLPAPER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_FAV_WALLPAPER_FAIL, payload: error.message });
  }
};

export { listWallpapers, setFavouriteWallpaper, getFavouriteWallpaper };
