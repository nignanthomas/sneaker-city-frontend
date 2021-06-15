import { emitStorageEvent } from "./shared";

export const addToCart = ({ product, size }) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push({
      product,
      size,
      quantity: 1,
    });

    cart = Array.from(new Set(cart.map(cartItem => cartItem.product.id))).map(id => {
      return cart.find(cartItem => cartItem.product.id === id);
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    emitStorageEvent();
  }
};

export const cartLength = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart')).length;
    }
  }
  return null;
};

export const getCart = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart'));
    }
  }
  return [];
};

export const removeFromCart = (productId) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }

    cart.map((item, index) => {
      if(item.product.id === productId) {
        cart.splice(index, 1);
      }
    })

    localStorage.setItem('cart', JSON.stringify(cart))
    emitStorageEvent();
  }
  return cart
};

export const updateCart = (productId, quantity) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }

    cart.map((item, index) => {
      if(item.product.id === productId) {
        cart[index].quantity = quantity || 1;
      }
    })

    localStorage.setItem('cart', JSON.stringify(cart))
    emitStorageEvent();
  }
};

export const getCartTotal = () => {
  let cart = [];
  let total = 0;
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }

    
    total = cart.length > 0
      ? cart.reduce((acc, current) => acc + current.product.price * current.quantity, 0)
      : 0;
  }
  return total;
};

export const clearCart = () => {
  if(typeof window !== 'undefined') {
    localStorage.removeItem('cart')
    emitStorageEvent();
  };
};
