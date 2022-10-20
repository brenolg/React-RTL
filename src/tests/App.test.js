import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);

  const home = screen.getByRole('link ', { name: 'Home' });
  const about = screen.getByRole('link ', { name: 'About' });
  const fPok = screen.getByRole('link ', { name: 'Favorite Pokémons' });

  expect(home).toBeInTheDocument();
  expect(about).toBeInTheDocument();
  expect(fPok).toBeInTheDocument();
});
