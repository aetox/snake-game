import { Game } from '../src/game.js';
import { getRandomNumber } from '../src/utils.js';

jest.mock('../src/utils.js', () => ({
  getRandomNumber: jest.fn(),
}));

let game;

beforeEach(() => {
  document.body.innerHTML = '<div id="game-board"></div><div id="message"></div>';
  game = new Game();
  game.init();
});

test('vérification de l\'initilisation de la partie', () => {
  expect(game.players.length).toBe(2);
  expect(game.boardSize).toBe(50);
  expect(document.getElementById('game-board').children.length).toBe(50);
});

test('Vérifie la mise à jour du plateau de jeu', () => {
  getRandomNumber.mockReturnValue(3);
  game.playTurn();
  const player1Cell = document.getElementById('cell-3');
  expect(player1Cell.classList.contains('player1')).toBe(true);

  getRandomNumber.mockReturnValue(4);
  game.playTurn();
  const player2Cell = document.getElementById('cell-4');
  expect(player2Cell.classList.contains('player2')).toBe(true);
});
