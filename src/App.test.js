// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZkMempool title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ZkMempool/i);
    expect(titleElement).toBeInTheDocument();
});
