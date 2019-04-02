export const PRODUCTS_LOADED = "products loaded";
export const productsLoaded = list => ({
  type: PRODUCTS_LOADED,
  payload: list
});

export const PRODUCT_LOADED = "product loaded";
export const productLoaded = data => ({
  type: PRODUCT_LOADED,
  payload: data
});

export const LOAD_PRODUCTS = "load products";
export const loadProducts = () => ({
  type: LOAD_PRODUCTS
});

export const LOAD_PRODUCT = "load product";
export const loadProduct = id => ({
  type: LOAD_PRODUCT,
  payload: id
});
