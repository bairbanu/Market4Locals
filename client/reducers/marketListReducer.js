import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOADING,
  DONE_LOADING
} from '../actions';

export default function(state = { isLoggedIn: true }, action) {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        items: action.payload,
        isLoggedIn: state.isLoggedIn,
        loading: state.loading,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        error: action.payload,
        isLoggedIn: state.isLoggedIn,
        loading: state.loading,
      };
    case LOGIN_SUCCESS:
      return {
        items: state.items,
        isLoggedIn: action.payload,
        loading: state.loading,
      };
    case LOGIN_FAILURE:
      return {
        items: state.items,
        isLoggedIn: action.payload,
        loading: state.loading,
      };
    case SIGNUP_SUCCESS:
      return {
        items: state.items,
        isLoggedIn: action.payload,
        loading: state.loading,
      };
    case SIGNUP_FAILURE:
      return {
        items: state.items,
        isLoggedIn: action.payload,
        loading: state.loading,
      };
    case LOADING:
      return {
        items: state.items,
        isLoggedIn: state.isLoggedIn,
        loading: action.loading,
      };
    case DONE_LOADING:
      return {
        items: state.items,
        isLoggedIn: state.isLoggedIn,
        loading: action.loading,
      };
    default:
      return state;
  }
}
