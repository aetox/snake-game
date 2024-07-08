# Jeu du Serpent

## Description

Ce projet implémente un jeu du Serpent en JavaScript, utilisant les principes de développement en équipe, de gestion de versions avec Git, et intégrant CI/CD pour un développement fluide et continu.

## Fonctionnalités

### Fonctionnalités de base

- **Lancé de dé aléatoire (1-6)**
- **Jeu au tour par tour** : chaque joueur lance un dé lors de son tour
- **Déplacement des joueurs** en fonction du nombre obtenu par le dé
- **Gestion des dépassements** : Si le joueur dépasse 50, il revient automatiquement à la case 25
- **Cases pièges** : Certaines cases font reculer le joueur (par exemple, la case 37 ramène à la case 12)
- **Cases bonus** : Certaines cases avancent le joueur (par exemple, la case 20 monte à la case 35)
- **Fin de partie** : La partie se termine lorsqu'un joueur arrive à la case 50

### Fonctionnalités supplémentaires

- **Dé supplémentaire** lors des 5, 10, 15, 20, 25... ème tours
- **Génération aléatoire des cases pièges et bonus**
- **Jeu paramétrable** : Possibilité de jouer avec différents nombres de dés et de choisir la taille du plateau
- **Support de plusieurs joueurs** : Jusqu'à 5 joueurs

## Installation

1. Cloner le dépôt
   ```bash
   git clone https://github.com/aetox/snake-game.git
   cd snake-game
   ```
