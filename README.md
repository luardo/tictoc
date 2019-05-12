# tictoc

Game mechanics

2 Players can play on the same computer (in the same application). Both players take turns. The app will decide at random which player will go first. In the next game/round, the loser of the last round will go first. If it is a draw, the app decides again. The app should indicate which players turn it is.

Once a player has 3 in a row he wins. If no player achieved 3 in a row and no more moves are possible, it is a draw. The app keeps track of the win count for each player during its life cycle (Once the app reloads it is ok if all the progression is lost).

Programming

Create a new vue.js project from scratch
Implement the game mechanics using a reasonable organization of components
Write a complete unit test for at least one component
Style the app at your own discretion

## Developer Notes and improvements 

This is a simple tic tac toe game on vue js. I have implemented a eventBus to pass events from the child  component to the smart component.

Things I would have like to add but I couldn't due lack of time:

* We have player 1 and player 2, in this case I would have like to add a Model player, and create two instances for a object with properties player: name, score, cellsSelected, symbol
* Styling: There is a lot of posible improvements in terms of style (active state, hover, etc), however because of lack of time I focused in the logic.
* Test: I create just a user flow test. A lot of assertions could have been made, however some basics are implemented
* Components: I would have like to add more modularization of the elements. The score I would have put it in a separate component, elements such as notifications (You win, Its a draw, etc), Buttons in a separate

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
