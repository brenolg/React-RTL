import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes App', () => {
  test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);

    const home = screen.getByText(/home/i);
    const about = screen.getByText(/about/i);
    const fPok = screen.getByText(/favorite/i);

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(fPok).toBeInTheDocument();
  });

  test.todo('Teste se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação;');
  test.todo('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação;');
  test.todo('Teste se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação;');
  test.todo('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.');
});
