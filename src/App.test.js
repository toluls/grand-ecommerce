import React from "react";
import { screen, render } from "@testing-library/react";
import TestWrapper from './test-utils/TestWrapper';
import App from "./App";
import axios from "axios";

describe("App component", () => { 
  test('Renders "Grand Fashion" once app loads', () => {
    render(
        <TestWrapper>
          <App />
        </TestWrapper>
    );

    const grandText = screen.getByText(/Grand Fashion/i);
    expect(grandText).toBeInTheDocument();
  });
});

describe('Product loading and display', () => {
  test('Products are retrieved from API and prices displayed with the naira sign', async () => {
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce({
      data: {
        id: {
          "category": "beauty",
          "description": "our sample product",
          "image": "url",
          "price": 1296,
          "title": "product one"
        }
      }
    });

    render(
        <TestWrapper>
          <App />
        </TestWrapper>
    );

    const product = await screen.findByText('product one', { exact: false });
    expect(product).toBeInTheDocument();

    const price = await screen.findByText('₦ 1296', { exact: false });
    expect(price).toBeInTheDocument();
  });
});