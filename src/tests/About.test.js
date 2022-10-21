import React from 'react';
import { screen } from '@testing-library/react';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Testes About', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    screen.logTestingPlaygroundURL();

    const titleH2 = screen.getByRole('heading', { name: /about pokédex/i });
    expect(titleH2).toBeInTheDocument();
  });
});

test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  renderWithRouter(<About />);
  const pokedex = screen.getByRole('img', { name: /pokédex/i });
  expect(pokedex.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});

test.todo('Teste se a página contém dois parágrafos com texto sobre a Pokédex;');
