import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente Pokedex', () => {
  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const buttonsPokemonType = screen.getAllByTestId('pokemon-type-button');
    expect(buttonsPokemonType).toHaveLength(7);
  });

  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const fireTypeFilter = screen.getByRole('button', { name: /fire/i });
    userEvent.click(fireTypeFilter);
    const charmander = screen.getByRole('img', { name: /charmander sprite/i });
    expect(charmander).toBeInTheDocument();

    const allTypeFilter = screen.getByRole('button', { name: /all/i });
    userEvent.click(allTypeFilter);
    const pikachu = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pikachu).toBeInTheDocument();
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const filterReset = screen.getByRole('button', { name: /all/i });
    expect(filterReset).toBeInTheDocument();
  });

  test.todo('Teste se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado');
  test.todo('Teste se é mostrado apenas um pokémon por vez');
});
