import { put, all, call, takeLatest } from "redux-saga/effects";
import { tryLogin } from "../../services/login";

import { ActionTypes } from "../actions";

function* attemptToLogin(action) {
  try {
    const response = yield call(tryLogin, action.payload);
    if (!response["token"]) {
      throw new Error(response.message);
    }

    const loggedUser = {
      email: action.payload.credentials.email,
      password: action.payload.credentials.password,
      token: response.token
    };

    loggedUser.token !== ""
      ? localStorage.setItem("userToken", loggedUser.token)
      : localStorage.setItem("userToken", "");

    yield put({
      type: ActionTypes.SUCCESS_ATTEMPT_LOGIN,
      payload: { loggedUser }
    });
  } catch (err) {
    //console.log("FAILURE ON ATTEMPTING LOGIN");
    yield put({
      type: ActionTypes.FAILURE_ATTEMPT_LOGIN,
      payload: { text: err.message }
    });
  }
}

function* watchAddTodo() {
  yield takeLatest(ActionTypes.REQUEST_ATTEMPT_LOGIN, attemptToLogin);
  // yield takeLatest('REQUEST_CHARACTER_DETAIL', getCharactersDetail);
}

export default function* userRoot() {
  yield all([watchAddTodo()]);
}
