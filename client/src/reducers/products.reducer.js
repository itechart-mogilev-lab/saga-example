import { PRODUCTS_LOADED, PRODUCT_LOADED } from "../actions/products.actions";

export default (state = { list: [], product: {} }, action) => {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return { ...state, list: action.payload };
    case PRODUCT_LOADED:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
