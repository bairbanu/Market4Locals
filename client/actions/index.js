export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOADING = 'LOADING';
export const DONE_LOADING = 'DONE_LOADING';

export function fetchItemsSuccess(items) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
}

export function fetchItemsFailure(error) {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error.message,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
    payload: true,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
    payload: false,
  };
}

export function signupSuccess() {
  return {
    type: SIGNUP_SUCCESS,
    payload: true,
  };
}

export function signupFailure() {
  return {
    type: SIGNUP_FAILURE,
    payload: false,
  };
}

export function loading() {
  return {
    type: LOADING,
    loading: true,
  };
}

export function doneLoading() {
  return {
    type: DONE_LOADING,
    loading: false,
  };
}
