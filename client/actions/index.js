import { FETCH_ITEMS_REQUEST } from './types'

export function fetchItemsRequest(url) {
  return {
    type: FETCH_ITEMS_REQUEST,
    payload: url
  };
}
