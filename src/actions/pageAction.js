import { INCREMENT_PAGE } from '../constants/constant';

const incrementPage = (dispatch) => {
  dispatch({ type: INCREMENT_PAGE });
};

export { incrementPage };
