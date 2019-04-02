import { spawn } from "redux-saga/effects";
import { watchLoadProductsSaga, watchLoadProductSaga } from "./products.saga";
import { watchLoginSaga } from "./auth.saga";
import { watchLoadUserSaga } from "./user.saga";

export default function*() {
  yield spawn(watchLoadProductsSaga);
  yield spawn(watchLoadProductSaga);
  yield spawn(watchLoginSaga);
  yield spawn(watchLoadUserSaga);
}
