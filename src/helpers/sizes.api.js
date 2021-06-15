import apiCall from "./apiCall";

export const allSizes = async () => {
  return await apiCall.get('/api/sizes')
    .then(response => response.data)
    .catch(error => { throw Error(error) });
};
