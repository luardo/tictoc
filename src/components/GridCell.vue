<template>
  <div
    class="grid-cell"
    :class="{'grid-cell--highlight': highlight}"
    @click="this.onClickHandler"
  >{{symbol}}</div>
</template>
<script>
import { EventBus } from "../event-bus.js";

export default {
  name: "GridCell",
  props: {
    player: Boolean,
    isSelected: Boolean,
    cellKey: Number,
    highlight: Boolean,
    symbol: String
  },
  methods: {
    onClickHandler() {
      EventBus.$emit("cellClicked", this.cellKey);
    }
  }
};
</script>
<style lang="scss" scoped>
.grid-cell {
  width: 100%;
  height: 100%;
  display: block;

  &--highlight {
    background: green;
  }
}
</style>

