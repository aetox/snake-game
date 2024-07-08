import { getRandomNumber } from './utils.js';

export class Game {
    constructor() {
        this.boardSize = 50;
        this.players = [{ name: 'Joueur 1', position: 0, className: 'player1' }, { name: 'Joueur 2', position: 0, className: 'player2' }];
        this.currentPlayerIndex = 0;
        this.traps = { 37: 12, 14: 7, 46: 33 };
        this.bonuses = { 20: 35, 2: 17, 31: 43 };
    }

    init() {
        this.createBoard();
        this.updateBoard();
    }

    createBoard() {
        const board = document.getElementById('game-board');
        for (let i = 0; i < this.boardSize; i++) {
            const cell = document.createElement('div');
            cell.id = `cell-${i}`;
            board.appendChild(cell);
        }
    }

    updateBoard() {
        this.players.forEach(player => {
            const playerCell = document.querySelector(`#cell-${player.position}.${player.className}`);
            if (playerCell) playerCell.classList.remove(player.className);
        });
        
        this.players.forEach(player => {
            const cell = document.getElementById(`cell-${player.position}`);
            if (cell) cell.classList.add(player.className);
        });
    }

    playTurn() {
        const currentPlayer = this.players[this.currentPlayerIndex];
        const roll = getRandomNumber(1, 6);
        currentPlayer.position += roll;

        if (currentPlayer.position >= this.boardSize) {
            currentPlayer.position = 25;
        }

        if (this.traps[currentPlayer.position]) {
            currentPlayer.position = this.traps[currentPlayer.position];
        }

        if (this.bonuses[currentPlayer.position]) {
            currentPlayer.position = this.bonuses[currentPlayer.position];
        }

        if (currentPlayer.position === this.boardSize - 1) {
            document.getElementById('message').textContent = `${currentPlayer.name} a gagné !`;
        }

        this.updateBoard();
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }
}
