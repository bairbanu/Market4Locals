import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_FAILURE, FETCH_ITEMS_SUCCESS }  from '../actions';

function getFromDatabase(url) {
  return [
    {
      "title": "Selling my cat",
      "imageSrc": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "Out of money. Must sell cat",
      "price": "$1500",
      "isBought": false,
      "isDelivered": false,
      "inDelivery": false,
      "key": 1
    },
    {
      "title": "Selling another cat",
      "imageSrc": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "Still out of money. No good. Close to eating my cat. Save it before that happens.",
      "price": "$2500",
      "isBought": true,
      "isDelivered": false,
      "inDelivery": false,
      "key": 2
    },
    {
      "title": "Selling YET another cat",
      "imageSrc": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "I ate the last one. New cat. Fresh.",
      "price": "$500",
      "isBought": true,
      "isDelivered": false,
      "inDelivery": true,
      "key": 3
    },
    {
      "title": "Selling YET YET another cat",
      "imageSrc": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "SO TASTY!",
      "price": "$500",
      "isBought": true,
      "isDelivered": true,
      "inDelivery": true,
      "key": 4
    },
    {
      "title": "Selling ANOTHER cat",
      "imageSrc": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "I actually love this one very much.",
      "price": "$500",
      "isBought": false,
      "isDelivered": false,
      "inDelivery": false,
      "key": 5
    },
    {
      "title": "Vanilla cat",
      "imageSrc": "https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg",
      "description": "Don't hate on simplicity.",
      "price": "$500",
      "isBought": false,
      "isDelivered": false,
      "inDelivery": false,
      "key": 6
    },
  ]
}

function* fetchItems(action) {
  try {
    const items = yield call(getFromDatabase, action.payload);
    yield put({ type: FETCH_ITEMS_SUCCESS, payload: items });
  } catch (e) {
    yield put({ type: FETCH_ITEMS_FAILURE, error: e.message })
  }
}

function* mySaga() {
  yield takeLatest(FETCH_ITEMS_REQUEST, fetchItems);
}

export default mySaga;
