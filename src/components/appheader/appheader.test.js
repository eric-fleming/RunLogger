import React from 'react';
import { render } from '@testing-library/react';
import AppHeader from './appheader';

test('renders learn react link', () => {
    const { getByText } = render(<AppHeader />);
    const title = getByText(/runlogger/i);
    expect(title).toBeInTheDocument();
});