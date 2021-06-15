import { emitStorageEvent } from "./shared";

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('user')) {
    return JSON.parse(localStorage.getItem('user'));
  } else {
    return false;
  }
};

export const storeUser = (user) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(user));
  }
  emitStorageEvent();
};

export const logoutUser = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
  }
  // window.location.href = '/';
  emitStorageEvent();
};
