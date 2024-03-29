import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
  getFavImageReducer,
  imageListReducer,
  setFavImageReducer,
} from './reducers/imageReducer';
import { pageReducer } from './reducers/pageReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = { userSignIn: { userInfo } };
const reducer = combineReducers({
  pageNumber: pageReducer,
  imageList: imageListReducer,
  userSignIn: userLoginReducer,
  userRegister: userRegisterReducer,
  setFavImage: setFavImageReducer,
  getFavImage: getFavImageReducer,
});
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
