import { Game } from '../src/game.js';

beforeEach(() => {
    document.body.innerHTML = '<div id="game-board"></div><div id="message"></div>';
});

test('should initialize game correctly', () => {
    const game = new Game();
    game.init();
    expect(game.players.length).toBe(2);
    expect(game.boardSize).toBe(50);
    expect(document.getElementById('game-board').children.length).toBe(50);
});
