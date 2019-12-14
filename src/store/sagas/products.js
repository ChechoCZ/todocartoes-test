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

    yield call(api.delete, 'lists/1', { "products": { "id": id }})

    yield put(ProductsActions.loadProductsRequest());
  } catch (error) {
    yield put(ProductsActions.loadProductsFailure());
  }
}

export function* filterProductsRequest(data) {
  try {
    const { filter } = data.payload;

    console.log(filter);

    // const { data } = yield call(api.get, `lists?q=${filter}`);

    // yield put(ProductsActions.filterProductsSuccess(data))
  } catch {
    yield put(ProductsActions.filterProductsFailure());
  }
}