import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomeSection from './Components/Sections/Home';
import ProductSection from './Components/Sections/Products';
import NotFound from './Components/Sections/NotFound';
import AppLayout from './Components/Layout/AppLayout';

const App = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={HomeSection} exact />
        <Route path="/products" component={ProductSection} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

export default App;
