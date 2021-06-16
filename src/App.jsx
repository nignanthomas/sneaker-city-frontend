import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/Layout/NotFound';
import Home from './views/Home';
import Shop from './views/Shop';
import Product from './views/Product';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import Authentication from './views/Authentication';
import Men from './views/Men';
import Women from './views/Women';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Authentication} />
        <Route path="/signup" exact component={Authentication} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/men" exact component={Men} />
        <Route path="/women" exact component={Women} />
        <Route path="/products/:productId/:productSlug" exact component={Product} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
