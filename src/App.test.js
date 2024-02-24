import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Innova8 Logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText('Innova8 Logo');
  expect(logoElement).toBeInTheDocument();
});
