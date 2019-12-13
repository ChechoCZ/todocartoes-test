export const Types = {
  FILTER_PRODUCTS: 'products/FILTER_PRODUCTS',
  LOAD_PRODUCTS_REQUEST: 'products/LOAD_PRODUCTS_REQUEST',
  LOAD_PRODUCTS_SUCCESS: 'products/LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS_FAILURE: 'products/LOAD_PRODUCTS_FAILURE',
  DELETE_PRODUCT_REQUEST: 'products/DELETE_PRODUCT_REQUEST'
}

const INITIAL_STATE = { 
  data: [],
  error: false,
  laoding: false,
  showFilters: false
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: false, showFilters: false };
    case Types.LOAD_PRODUCTS_SUCCESS:
      return { ...state, loading: false, error: false, showFilters: false, data: action.payload.data};
    case Types.LOAD_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: false, showFilters: false, data: [] };
    case Types.FILTER_PRODUCTS:
      return { ...state, loading: false, error: false, showFilters: true };
    case Types.DELETE_PRODUCT_REQUEST:
      return { ...state, loading: false, error: false, id: action.payload.id };
    default:
      return state;
  }
}

export const Creators = {
  loadProductsRequest: () => ({ type: Types.LOAD_PRODUCTS_REQUEST }),

  loadProductsSuccess: data => ({
    type: Types.LOAD_PRODUCTS_SUCCESS,
    payload: { data }
  }),

  loadProductsFailure: () => ({ type: Types.LOAD_PRODUCTS_FAILURE }),

  filterProducts: () => ({ type: Types.FILTER_PRODUCTS }),

  deleteProductRequest: id => ({
    type: Types.DELETE_PRODUCT_REQUEST,
    payload: { id }
  })
}