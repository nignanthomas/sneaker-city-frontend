import apiCall from "./apiCall";

const headers =  {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const login = async (payload) => {
  return await apiCall.post('/api/users/login', payload, { headers })
    .then(response => response.data)
    .catch(error => { throw Error(error.data) });
};

export const signup = async (payload) => {
  return await apiCall.post('/api/users/signup', payload, { headers })
    .then(response => response.data)
    .catch(error => { throw Error(error.data) });
};
