import { call, put, select, spawn, takeLatest } from "redux-saga/effects";
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
  const products = yield select(state => state.products);
  console.log(id);

  const theProduct = products.list.find(p => p.id == id);
  console.log(products.list);

  if (theProduct) {
    yield put(productLoaded(theProduct));
    return;
  }

  yield spawn(loadProductsSaga);
  const response = yield call(axios.get, "/api/products/" + id);
  yield put(productLoaded(response.data));
}

export function* watchLoadProductSaga() {
  yield takeLatest(LOAD_PRODUCT, loadProductSaga);
}
