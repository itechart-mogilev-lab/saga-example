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
