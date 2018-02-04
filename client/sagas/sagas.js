import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_FAILURE, FETCH_ITEMS_SUCCESS}  from '../actions/types';

function getFromDatabase(url) {
  axios.get(url)
  .then(response => {
    console.log('response:::', response)
    return response.data
  })
  .then((test) => {
    return test;
  })
  .catch(error => {
    console.error('An error occured:', error)
    throw error.message;
  })
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
  yield takeLatest('FETCH_ITEMS_REQUEST', fetchItems);
}

export default mySaga;
