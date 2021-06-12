import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Shop from '../views/Shop';

test('renders Shop component', () => {
  render(
    <Router>
      <Shop />
    </Router>
  );
  const linkElement = screen.getByText(/lorem/i);
  expect(linkElement).toBeInTheDocument();
});
