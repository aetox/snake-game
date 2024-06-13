import { Game } from '../src/game.js';

test('should initialize game correctly', () => {
    const game = new Game();
    game.init();
    expect(game.players.length).toBe(2);
    expect(game.boardSize).toBe(50);
});
