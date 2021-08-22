import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './Store/index';
import { screen, render } from "@testing-library/react";
import App from "./App";

describe("App component", () => { 
  test('Renders "Grand Fashion" text', () => {
    render(
        <BrowserRouter>
          <Provider store={store}>
          <App />
          </Provider>
        </BrowserRouter>
    );

    const grandText = screen.getByText(/Grand Fashion/i);
    expect(grandText).toBeInTheDocument();
  });
});