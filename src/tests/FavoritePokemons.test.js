import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente FavoritePokemons', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha pokémons favoritos', () => {
    renderWithRouter((<App />));

    const favoriteLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favoriteLink);

    const noFavPok = screen.getByText(/no favorite pokemon found/i);
    expect(noFavPok).toBeInTheDocument();
  });

  test.todo('Teste se são exibidos todos os cards de pokémons favoritados');
});
