import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';

export function* loadProductsRequest() {
  try {
    let list_of_products = {};
    let { data } = yield call(api.get, 'lists');

    const list = data[0];
    list_of_products.list = list;

    data = yield call(api.get, `lists/${list.id}/products`);

    list_of_products.products = data.data

    yield put(ProductsActions.loadProductsSuccess(list_of_products));
  } catch (error) {
    yield put(ProductsActions.loadProductsFailure());
  }
}

export function* deleteProductRequest(data) {
  try {
    const { id } = data.payload;

    yield call(api.delete, `products/${id}`);

    yield put(ProductsActions.loadProductsRequest());
  } catch (error) {
    yield put(ProductsActions.loadProductsFailure());
  }
}

export function* filterProductsRequest(criteria) {
  try {
    const { filter } = criteria.payload;

    const { data } = yield call(api.get, `lists/1/products?q=${filter}`);

    yield put(ProductsActions.filterProductsSuccess(data))
  } catch {
    yield put(ProductsActions.filterProductsFailure());
  }
}

export function* filterProductsByPriceRequest(criteria) {
  try {
    const { filter } = criteria.payload;

    const { data } = yield call(api.get, `lists/1/products?price_lte=${filter}`);

    yield put(ProductsActions.filterProductsByPriceSuccess(data))
  } catch (error) {
    
  }
}