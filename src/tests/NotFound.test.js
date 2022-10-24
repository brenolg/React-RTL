import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    screen.logTestingPlaygroundURL();

    const notFoundTitle = screen.getByRole('heading', { name: /page requested not found/i });
    expect(notFoundTitle).toBeInTheDocument();
  });
  test.todo('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
