# Projeto React Testing Library

Testes para uma aplicação React que já está criada e configurada, utilizando Jest e a biblioteca React Testing Library. 

A aplicação contém uma implementação completa de todos os requisitos da Pokédex. 

## Funcionalidades

- Utilizar os seletores (queries) da React-Testing-Library em testes automatizados;

- Simular eventos com a React-Testing-Library em testes automatizados;

- Testar fluxos lógicos assíncronos com a React-Testing-Library;

- Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados;

- Testar inputs;

## Tecnologias utilizadas
- React
- React Router
- React Testing Library
- Jest

## Instalação do projeto localmente
Para instalar o projeto localmente, siga os seguintes passos:

Clone o repositório com o comando 

```javascript
git clone git@github.com:brenolg/React-RTL.git
```
Instale as dependências com o comando.

```javascript
npm install
```
Inicie a aplicação 

```javascript
npm start
```
Executando os testes localmente

```javascript
npx stryker run ./stryker/nomeDoArquivo.conf.json
```

Abra o navegador e acesse http://localhost:3000.

## Requisitos
1. Teste o componente <App.js />
2. Teste o componente <About.js />
3. Teste o componente <FavoritePokemons.js />
4. Teste o componente <NotFound.js />
5. Teste o componente <Pokedex.js />
6. Teste o componente <Pokemon.js />

## Agradecimentos
Agradecemos à Trybe por nos proporcionar esta oportunidade de aprendizado e crescimento profissional. Também agradecemos aos instrutores, colegas e mentores que nos apoiaram durante o desenvolvimento deste projeto.
