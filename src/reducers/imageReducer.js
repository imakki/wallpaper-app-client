const {
  IMAGE_LIST_REQUEST,
  IMAGE_LIST_SUCCESS,
  IMAGE_LIST_FAIL,
} = require('../constants/constant');

function imageListReducer(state = { images: { images: [] } }, action) {
  switch (action.type) {
    case IMAGE_LIST_REQUEST:
      return { loading: true };
    case IMAGE_LIST_SUCCESS:
      return { loading: false, images: action.payload };
    case IMAGE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { imageListReducer };
