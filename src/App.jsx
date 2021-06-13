import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './views/Home';
import Shop from './views/Shop';
import Product from './views/Product';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/products/:productId/:productSlug" exact component={Product} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
