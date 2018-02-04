import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        items: action.payload,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        error: action.error
      }
    default:
      return state;
  }
}
