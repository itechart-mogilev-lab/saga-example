import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  productsLoaded,
  productLoaded,
  LOAD_PRODUCTS,
  LOAD_PRODUCT
} from "../actions/products.actions";

function* loadProductsSaga() {
  const response = yield call(axios.get, "/api/products");
  yield put(productsLoaded(response.data));
}

export function* watchLoadProductsSaga() {
  yield takeLatest(LOAD_PRODUCTS, loadProductsSaga);
}

function* loadProductSaga({ payload: id }) {
  const response = yield call(axios.get, "/api/products/" + id);
  yield put(productLoaded(response.data));
}

export function* watchLoadProductSaga() {
  yield takeLatest(LOAD_PRODUCT, loadProductSaga);
}
