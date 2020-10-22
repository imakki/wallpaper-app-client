import axios from 'axios';
import Cookie from 'js-cookie';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REG_FAIL,
  USER_REG_REQUEST,
  USER_REG_SUCCESS,
} from '../constants/constant';

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
  //console.log(email, password);
  try {
    const { data } = await axios.post('/api/users/signin', {
      email,
      password,
    });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
  }
};

const register = (username, email, password) => async (dispatch) => {
  dispatch({
    type: USER_REG_REQUEST,
    payload: { username, email, password },
  });
  try {
    const { data } = await axios.post('/api/users/register', {
      username,
      email,
      password,
    });
    dispatch({ type: USER_REG_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REG_FAIL, payload: error.message });
  }
};

export { signin, register };
