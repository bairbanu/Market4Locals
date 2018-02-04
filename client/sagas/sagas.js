import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_FAILURE, FETCH_ITEMS_SUCCESS}  from '../actions/types';

function getFromDatabase(url) {
  return [
    {
      "title": "Selling my cat",
      "img_url": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "Out of money. Must sell cat",
      "price": "$1500",
      "isBought": false,
      "isDelivered": false,
      "inDelivery": false,
    },
    {
      "title": "Selling another cat",
      "img_url": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "Still out of money. No good. Close to eating my cat. Save it before that happens.",
      "price": "$2500",
      "isBought": true,
      "isDelivered": false,
      "inDelivery": false,
    },
    {
      "title": "Selling YET another cat",
      "img_url": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "I ate the last one. New cat. Fresh.",
      "price": "$500",
      "isBought": true,
      "isDelivered": false,
      "inDelivery": true,
    },
    {
      "title": "Selling YET YET another cat",
      "img_url": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "SO TASTY!",
      "price": "$500",
      "isBought": true,
      "isDelivered": true,
      "inDelivery": true,
    },
    {
      "title": "Selling ANOTHER cat",
      "img_url": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "I actually love this one very much.",
      "price": "$500",
      "isBought": false,
      "isDelivered": false,
      "inDelivery": false,
    },
    {
      "title": "Vanilla cat",
      "img_url": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "Don't hate on simplicity.",
      "price": "$500",
      "isBought": false,
      "isDelivered": false,
      "inDelivery": false,
    },
  ]
}

function* fetchItems(action) {
  try {
    const items = yield call(getFromDatabase, action.payload);
    console.log('these are items:::', items)
    yield put({ type: FETCH_ITEMS_SUCCESS, payload: items });
  } catch (e) {
    console.log('ERROR message::::::::::::', e)
    yield put({ type: FETCH_ITEMS_FAILURE, error: e.message })
  }
}

function* mySaga() {
  yield takeLatest('FETCH_ITEMS_REQUEST', fetchItems);
}

export default mySaga;
