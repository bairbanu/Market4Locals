import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        items: action.payload,
        isLoggedIn: state.isLoggedIn,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        error: action.payload,
        isLoggedIn: state.isLoggedIn,
      };
    case LOGIN_SUCCESS:
      return {
        items: state.items,
        isLoggedIn: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        items: state.items,
        isLoggedIn: action.payload,
      };
    case SIGNUP_SUCCESS:
      return {
        items: state.items,
        isLoggedIn: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        items: state.items,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
}
