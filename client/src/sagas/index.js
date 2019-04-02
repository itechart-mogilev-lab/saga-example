import { spawn } from "redux-saga/effects";
import { watchLoadProductsSaga, watchLoadProductSaga } from "./products.saga";
import { watchLoginSaga, watchLogoutSaga } from "./auth.saga";
import { watchLoadUserSaga } from "./user.saga";

export default function*() {
  yield spawn(watchLoadProductsSaga);
  yield spawn(watchLoadProductSaga);
  yield spawn(watchLoginSaga);
  yield spawn(watchLogoutSaga);
  yield spawn(watchLoadUserSaga);
}
