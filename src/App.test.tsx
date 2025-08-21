import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro slide', () => {
  render(<App />);
  const titleElement = screen.getByText(/PolicyEngine Internship/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders navigation', () => {
  render(<App />);
  const navElement = screen.getByText(/arrow keys to navigate/i);
  expect(navElement).toBeInTheDocument();
});