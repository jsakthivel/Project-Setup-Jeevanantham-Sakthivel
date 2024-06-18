import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const n1 = 2;
  const n2 = 3;
  render(<App n1={n1} n2={n2} />);
  const result = screen.getByText(`${n1} + ${n2} = ${n1 + n2}`);
  expect(result).toBeInTheDocument();
});
