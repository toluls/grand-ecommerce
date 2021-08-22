import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '../Store/index';

const TestWrapper = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
      {props.children}
      </Provider>
    </BrowserRouter>
  );
};

export default TestWrapper;