export const FETCH_ITEMS = 'fetch_items';

export function fetchItems(items) {
  return {
    type: FETCH_ITEMS,
    payload: items,
  };
}
