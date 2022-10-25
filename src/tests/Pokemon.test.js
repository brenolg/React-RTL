import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente Pokemon.js ', () => {
  test('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const normalBtn = screen.getByRole('button', { name: /normal/i });
    userEvent.click(normalBtn);

    const snorlaxFilter = screen.getByRole('img', { name: /snorlax sprite/i });
    expect(snorlaxFilter).toBeInTheDocument();

    const btnSnorlax = screen.getByRole('link', { name: /more details/i });
    userEvent.click(btnSnorlax);

    const snorlaxDetails = screen.getByRole('img', { name: /snorlax sprite/i });
    const normalType = screen.getByText(/normal/i);
    const weight = screen.getByText(/average weight: 460\.0 kg/i);
    expect(snorlaxDetails).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(normalType).toBeInTheDocument();
    expect(snorlaxDetails).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png');
  });

  test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const fireBtn = screen.getByRole('button', { name: /fire/i });
    userEvent.click(fireBtn);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const favCheckbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    fireEvent.click(favCheckbox);

    const star = screen.getByAltText('Charmander is marked as favorite');
    expect(star).toHaveAttribute('src', '/star-icon.svg');
  });

  test('Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do pokémon cujos detalhes se deseja ver', () => {
    renderWithRouter(<App />);
    const btnDragon = screen.getByRole('button', { name: /dragon/i });
    userEvent.click(btnDragon);

    const dragonairDetails = screen.getByRole('link', { name: /more details/i });
    expect(dragonairDetails).toHaveAttribute('href', '/pokemons/148');
  });

  test.todo('Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon');
});
