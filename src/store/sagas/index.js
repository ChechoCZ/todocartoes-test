import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProductsTypes } from '../ducks/products';

import { loadProductsRequest } from './products';

export default function* rootSaga() {
  yield all([
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProductsRequest),
  ]);
}