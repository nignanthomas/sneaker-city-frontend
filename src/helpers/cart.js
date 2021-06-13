export const addToCart = ({ product, size }, next) => {
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
    next();
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
