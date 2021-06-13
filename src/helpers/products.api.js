import apiCall from "./apiCall";

export const latestProducts = async () => {
  return await apiCall.get('/api/products/latest')
    .then(response => response.data)
    .catch(error => error)
};
