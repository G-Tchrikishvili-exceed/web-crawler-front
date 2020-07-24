import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders logo link', () => {
  const { getByText } = render(<App />);
  const nameofWebsite = getByText(/web crawler/i);
  expect(nameofWebsite).toBeInTheDocument();
});
