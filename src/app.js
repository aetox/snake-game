import { Game } from './game.js';

const game = new Game();
game.init();

document.getElementById('roll-dice').addEventListener('click', () => {
    game.playTurn();
});
