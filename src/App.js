import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomeSection from './Components/Sections/Home';
import ProductSection from './Components/Sections/Products';
import CustomerServiceSection from './Components/Sections/CustomerService';
import NotFound from './Components/Sections/NotFound';
import AppLayout from './Components/Layout/AppLayout';
import WishlistSection from './Components/Sections/Wishlist';
import CartSection from './Components/Sections/Cart';

const App = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={HomeSection} exact />
        <Route path="/products" component={ProductSection} exact />
        <Route path="/wish-list" component={WishlistSection} exact />
        <Route path="/customer-service" component={CustomerServiceSection} exact />
        <Route path="/cart" component={CartSection} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

export default App;
