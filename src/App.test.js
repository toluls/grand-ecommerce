import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Grand Fashion text', () => {
  render(<App />);
  const brandText = screen.getByText(/Grand Fashion/i);
  expect(brandText).toBeInTheDocument();
});
