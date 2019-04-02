import { call, put, take, takeLeading } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  LOGIN_USER,
  LOGOUT_USER,
  userLoginSuccess
} from "../actions/user.actions";
import axios from "axios";
import { storeToken, clearToken } from "../authentication";

export function* watchLoginSaga() {
  yield takeLeading(LOGIN_USER, function*({ payload }) {
    console.log("logging in");

    const response = yield call(axios.post, "/api/login", payload);
    yield put(userLoginSuccess(response.data.token, response.data.user));
    yield call(storeToken, response.data.token, response.data.user);
    yield put(push("/"));

    yield take(LOGOUT_USER);
    yield call(clearToken);
  });
}
