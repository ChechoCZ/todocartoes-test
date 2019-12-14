export const Types = {
  FILTER_PRODUCTS: 'products/FILTER_PRODUCTS',

  FILTER_PRODUCTS_REQUEST: 'products/FILTER_PRODUCTS_REQUEST',
  FILTER_PRODUCTS_SUCCESS: 'products/FILTER_PRODUCTS_SUCCESS',
  FILTER_PRODUCTS_FAILURE: 'products/FILTER_PRODUCTS_FAILURE',

  FILTER_PRODUCTS_BY_PRICE_REQUEST: 'products/FILTER_PRODUCTS_BY_PRICE_REQUEST',
  FILTER_PRODUCTS_BY_PRICE_SUCCESS: 'products/FILTER_PRODUCTS_BY_PRICE_SUCCESS',
  FILTER_PRODUCTS_BY_PRICE_FAILURE: 'products/FILTER_PRODUCTS_BY_PRICE_FAILURE',

  LOAD_PRODUCTS_REQUEST: 'products/LOAD_PRODUCTS_REQUEST',
  LOAD_PRODUCTS_SUCCESS: 'products/LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS_FAILURE: 'products/LOAD_PRODUCTS_FAILURE',

  DELETE_PRODUCT_REQUEST: 'products/DELETE_PRODUCT_REQUEST'
}

const INITIAL_STATE = { 
  list: {},
  products: [],
  error: false,
  laoding: false,
  showFilters: false
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FILTER_PRODUCTS:
      return { ...state, loading: false, error: false, showFilters: true };

    case Types.LOAD_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: false, showFilters: false };
    case Types.LOAD_PRODUCTS_SUCCESS:
      return { ...state, loading: false, error: false, showFilters: false, list: action.payload.data.list, products: action.payload.data.products };
    case Types.LOAD_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: false, showFilters: false };

    case Types.FILTER_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: false, filter: action.payload.filter };
    case Types.FILTER_PRODUCTS_SUCCESS:
      return { ...state, loading: false, error: false, products: action.payload.data };
    case Types.FILTER_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: true };

    case Types.FILTER_PRODUCTSBY_PRICE_REQUEST:
      return { ...state, loading: true, error: false, filter: action.payload.filter };
    case Types.FILTER_PRODUCTSBY_PRICE_SUCCESS:
      return { ...state, loading: false, error: false, products: action.payload.data };
    case Types.FILTER_PRODUCTSBY_PRICE_FAILURE:
      return { ...state, loading: false, error: true };

    case Types.DELETE_PRODUCT_REQUEST:
      return { ...state, loading: false, error: false, id: action.payload.id };
    default:
      return state;
  }
}

export const Creators = {
  filterProducts: () => ({ type: Types.FILTER_PRODUCTS }),

  loadProductsRequest: () => ({ type: Types.LOAD_PRODUCTS_REQUEST }),
  loadProductsSuccess: data => ({ type: Types.LOAD_PRODUCTS_SUCCESS, payload: { data } }),
  loadProductsFailure: () => ({ type: Types.LOAD_PRODUCTS_FAILURE }),

  filterProductsRequest: filter => ({ type: Types.FILTER_PRODUCTS_REQUEST, payload: { filter } }),
  filterProductsSuccess: data => ({ type: Types.FILTER_PRODUCTS_SUCCESS, payload: { data } }),
  filterProductsFailure: () => ({ type: Types.FILTER_PRODUCTS_FAILURE }),

  filterProductsByPriceRequest: filter => ({ type: Types.FILTER_PRODUCTS_BY_PRICE_REQUEST, payload: { filter } }),
  filterProductsByPriceSuccess: data => ({ type: Types.FILTER_PRODUCTS_BY_PRICE_SUCCESS, payload: { data } }),
  filterProductsByPriceFailure: () => ({ type: Types.FILTER_PRODUCTS_BY_PRICE_FAILURE }),

  deleteProductRequest: id => ({ type: Types.DELETE_PRODUCT_REQUEST, payload: { id } })
}