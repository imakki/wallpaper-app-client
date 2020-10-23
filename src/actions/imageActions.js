import axios from 'axios';
import Cookie from 'js-cookie';
import {
  IMAGE_LIST_FAIL,
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
} from '../constants/constant';

const listWallpapers = () => async (dispatch) => {
  try {
    dispatch({ type: IMAGE_LIST_REQUEST });
    const { data } = await axios('/api/images?page=1&limit=10');
    dispatch({ type: IMAGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: IMAGE_LIST_FAIL, payload: error.message });
  }
};

export { listWallpapers };
