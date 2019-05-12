<template>
  <div class="tic-toc">
    <h1>
      {{gameTitle}}
      <span v-if="round">Round: {{round}}</span>
    </h1>
    <div class="tic-toc__score" v-if="started">
      <div>
        <br>Player 1:
        <strong>{{scorePlayer1}}</strong>
      </div>
      <div>
        <br>Player 2:
        <strong>{{scorePlayer2}}</strong>
      </div>
    </div>
    <div class="tic-toc__player" v-if="!isMatchOver && started">
      <h4>{{playerName}}</h4>
    </div>

    <button
      class="button button--green"
      v-if="isMatchOver || !started"
      @click="play()"
    >{{ round === 0 ? "Start a new game" : "Play again"}}</button>

    <div v-if="win">
      <h3>{{playerName}} WINS!!!</h3>
    </div>

    <div v-if="isDraw">
      <h3>No match, it's a draw :/</h3>
    </div>

    <div class="tic-toc__wrapper">
      <Grid
        :cellsCount="totalCells"
        :turn="turn"
        v-if="started"
        :selectedCells="playersSelection"
        :highlightCells="winResult"
      />
    </div>
  </div>
</template>
<script>
import Grid from "./Grid.vue";
import { EventBus } from "../event-bus.js";
import { setTimeout } from "timers";

export default {
  name: "TicToc",
  components: { Grid },
  data() {
    return {
      totalCells: 9,
      totalEmptyCells: 0,
      gameTitle: "Tic Toc Game",
      round: 0,
      started: false,
      winResult: [],
      turn: null,
      playersSelection: {
        x: [],
        o: []
      },
      scorePlayer1: 0,
      scorePlayer2: 0,
      winCombinations: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
      ]
    };
  },
  computed: {
    playerName() {
      return (this.turn && "player 1") || "player 2";
    },
    currentPlayerId() {
      return this.turn ? "x" : "o";
    },
    isMatchOver() {
      return this.win || this.isDraw;
    },
    win() {
      const winMatch = this.winResult && this.winResult.length !== 0;

      if (winMatch) {
        return true;
      }
    },
    isDraw() {
      return (this.started && (!this.totalEmptyCells && !this.win)) || false;
    }
  },
  watch: {
    playersSelection: {
      handler(selectedCells) {
        this.winResult =
          this.findWinnerCombination(selectedCells[this.currentPlayerId]) || [];
        if (!this.winResult.length > 0) {
          this.switchTurn();
        }
      },
      deep: true
    },
    win(value) {
      if (value) {
        this.setWinner();
      }
    },
    isDraw(value) {
      if (value) {
        this.setInitialPlayer();
      }
    }
  },
  methods: {
    switchTurn() {
      this.turn = !this.turn;
    },
    reset() {
      this.winResult = [];
      this.playersSelection = { x: [], o: [] };
    },
    play() {
      this.reset();
      this.started = true;
      this.round++;
      this.totalEmptyCells = this.totalCells;
    },
    stop() {
      this.gameStart = false;
    },
    findWinnerCombination(selectedCells) {
      return this.winCombinations.find(combination => {
        let matches = selectedCells.reduce((matchCount, current) => {
          return combination.includes(current) ? matchCount + 1 : matchCount;
        }, 0);

        return matches === 3 ? combination : false;
      });
    },
    setInitialPlayer() {
      this.turn = this.getRandomBoolean();
    },
    getRandomBoolean() {
      return Math.round(Math.random() * 1 + 0) === 0;
    },
    setWinner() {
      if (this.turn) {
        this.scorePlayer1 = this.scorePlayer1 + 1;
      } else {
        this.scorePlayer2 = this.scorePlayer2 + 1;
      }
    }
  },
  created() {
    this.setInitialPlayer();
  },
  mounted() {
    EventBus.$on("cellClicked", value => {
      this.playersSelection[this.currentPlayerId].push(value);
      this.playersSelection[this.currentPlayerId].sort();
      this.totalEmptyCells--;
    });
  }
};
</script>
<style lang="scss" scoped>
.tic-toc {
  width: 600px;
  margin: 0 auto;
  padding: 30px;

  &__wrapper {
    display: flex;
  }

  &__score {
    text-align: left;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }

  &__player {
    text-transform: uppercase;
  }
}

.button {
  padding: 10px 35px;
  text-align: center;
  color: white;
  background: black;
  text-transform: uppercase;
  font-size: 24px;

  &--green {
    background: green;
  }
}
</style>
