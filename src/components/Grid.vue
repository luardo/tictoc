<template>
  <div class="grid">
    <div class="grid__cell" v-for="cell in cellsCount" :key="cell">
      <GridCell
        :player="turn"
        :cellKey="cell"
        :symbol="getSelectSymbol(cell)"
        :highlight="isHighlight(cell)"
      />
    </div>
  </div>
</template>
<script>
import GridCell from "./GridCell.vue";

export default {
  name: "Grid",
  components: { GridCell },
  props: {
    cellsCount: Number,
    turn: Boolean,
    selectedCells: {},
    highlightCells: Array
  },
  methods: {
    isHighlight(cell) {
      if (this.highlightCells.length <= 0) {
        return false;
      }

      return this.highlightCells.includes(cell);
    },
    getSelectSymbol(cell) {
      const { o, x } = this.selectedCells;
      return (o.includes(cell) && "o") || (x.includes(cell) && "x") || "";
    }
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  width: 400px;
  margin: 0 auto;

  &__cell {
    height: 50px;
    margin: 5px;
    background-color: gray;
    width: 30%;
    height: auto;
    padding-bottom: 30%;
    z-index: 1;
    position: relative;
  }
}
</style>
