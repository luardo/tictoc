# tictoc

Game mechanics

2 Players can play on the same computer (in the same application). Both players take turns. The app will decide at random which player will go first. In the next game/round, the loser of the last round will go first. If it is a draw, the app decides again. The app should indicate which players turn it is.

Once a player has 3 in a row he wins. If no player achieved 3 in a row and no more moves are possible, it is a draw. The app keeps track of the win count for each player during its life cycle (Once the app reloads it is ok if all the progression is lost).

Programming

Create a new vue.js project from scratch
Implement the game mechanics using a reasonable organization of components
Write a complete unit test for at least one component
Style the app at your own discretion

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
