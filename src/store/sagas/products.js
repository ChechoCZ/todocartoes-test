import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';

export function* loadProductsRequest() {
  try {
    const { data } = yield call(api.get, '/lists');

    console.log(data);

    yield put(ProductsActions.loadProductsSuccess(data));
  } catch (error) {
    yield put(ProductsActions.loadProductsFailure());
  }
}