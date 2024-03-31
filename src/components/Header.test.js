import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header with correct title', () => {
  // Renderiza o componente Header
  const { getByText } = render(<Header />);

  // Procura pelo elemento que contém o texto "Music Beats"
  const titleElement = getByText(/Music Beats/i);

  // Verifica se o elemento com o título foi encontrado
  expect(titleElement).toBeInTheDocument();
});
