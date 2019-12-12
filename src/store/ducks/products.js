export const Types = {
  LOAD_PRODUCTS_REQUEST: 'products/LOAD_PRODUCTS_REQUEST',
  LOAD_PRODUCTS_SUCCESS: 'products/LOAD_PRODUCTS_SUCCESS',
  LOAD_PRODUCTS_FAILURE: 'products/LOAD_PRODUCTS_FAILURE',
}

const INITIAL_STATE = { 
  data: [],
  laoding: false,
  error: false
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: false };
    case Types.LOAD_PRODUCTS_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload.data};
    case Types.LOAD_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: false, data: [] };
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

  loadProductsFailure: () => ({ type: Types.LOAD_PRODUCTS_FAILURE })
}