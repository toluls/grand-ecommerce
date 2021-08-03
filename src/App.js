import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadProducts } from './Store/products-actions';
import HomeSection from './Components/Sections/Home';
import ProductSection from './Components/Sections/Products';
import CustomerServiceSection from './Components/Sections/CustomerService';
import NotFound from './Components/Sections/NotFound';
import AppLayout from './Components/Layout/AppLayout';
import CartSection from './Components/Sections/Cart';
import ProductCategory from './Components/Sections/ProductCategory';
import ProductDetails from './Components/Sections/ProductDetails';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={HomeSection} exact />
        <Route path="/products" component={ProductSection} exact />
        <Route path="/products/:productCategory" component={ProductCategory} exact />
        <Route path="/products/id/:productId" component={ProductDetails} exact />
        <Route path="/customer-service" component={CustomerServiceSection} exact />
        <Route path="/cart" component={CartSection} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

export default App;
