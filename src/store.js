import { createStore, combineReducers, applyMiddleware } from 'redux';
import { imageListReducer } from './reducers/imageReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = { userSignIn: { userInfo } };
const reducer = combineReducers({
  imageList: imageListReducer,
  userSignIn: userLoginReducer,
  userRegister: userRegisterReducer,
});
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
