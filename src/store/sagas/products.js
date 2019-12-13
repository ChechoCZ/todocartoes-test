import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';

export function* loadProductsRequest() {
  try {
    const { data } = yield call(api.get, 'lists');

    yield put(ProductsActions.loadProductsSuccess(data));
  } catch (error) {
    yield put(ProductsActions.loadProductsFailure());
  }
}

export function* deleteProductRequest(data) {
  try {
    const { id } = data.payload;

    yield call(api.delete, `lists/${id}`)

    yield put(ProductsActions.loadProductsRequest());
  } catch (error) {
    yield put(ProductsActions.loadProductsFailure());
  }


}