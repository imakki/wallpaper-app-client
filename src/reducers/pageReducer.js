const { INCREMENT_PAGE } = require('../constants/constant');

export function pageReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT_PAGE:
      return state + 1;
    default:
      return state;
  }
}
