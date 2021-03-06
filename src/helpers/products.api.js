import apiCall from "./apiCall";

export const latestProducts = async () => {
  return await apiCall.get('/api/products/latest')
    .then(response => response.data)
    .catch(error => { throw Error(error) });
};

export const allProducts = async () => {
  return await apiCall.get('/api/products')
    .then(response => response.data)
    .catch(error => { throw Error(error) });
};

export const productById = async (productId) => {
  return await apiCall.get(`/api/products/${productId}`)
    .then(response => response.data)
    .catch(error => { throw Error(error) });
};

export const productsByCategory = async (categoryId) => {
  return await apiCall.get(`/api/products/category/${categoryId}`)
    .then(response => response.data)
    .catch(error => { throw Error(error) });
};
