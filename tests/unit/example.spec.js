import { shallowMount, mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

import TicToc from "@/components/TicToc.vue";
import Grid from "@/components/Grid.vue";
import GridCell from "@/components/GridCell.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("TicToc", () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(TicToc);
  // it's also easy to check for the existence of elements
  it("has a button", () => {
    expect(wrapper.contains("button")).toBe(true);
  });

  it("has a title", () => {
    expect(wrapper.contains(".tic-toc h1")).toBe(true);
  });

  it("button click should show game grid", () => {
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.contains(".grid")).toBe(true);
  });

  it("Player 1 score should be 0", () => {
    expect(wrapper.vm.scorePlayer1).toEqual(0);
  });

  it("button click should load cells components", () => {
    expect(wrapper.contains(GridCell)).toBe(true);
  });

  it("player 1 should click first cell", () => {
    wrapper.setData({
      turn: true
    });
    const cell = wrapper.find(".grid-cell:first-of-type");
    cell.trigger("click");
    expect(cell.text()).toBe("x");
  });

  it("passes winner selection", () => {
    wrapper.setData({
      playersSelection: {
        x: [1, 2, 3],
        o: [4, 5]
      }
    });

    expect(wrapper.vm.winResult).toEqual([1, 2, 3]);
  });

  it("Player 1 should win with 3 cells selected", () => {
    wrapper.setData({
      playersSelection: {
        x: [1, 2, 3],
        o: [4, 5]
      }
    });

    expect(wrapper.vm.win).toEqual(true);
  });

  it("button click should start 2nd  game", () => {
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.vm.round).toEqual(2);
  });

  it("the loser of the last round should go first", () => {
    expect(wrapper.vm.turn).toBe(false);
  });

  it("Player 1 score should be 1", () => {
    expect(wrapper.vm.scorePlayer1).toEqual(1);
  });

  it("Player 2 score should be 0", () => {
    expect(wrapper.vm.scorePlayer2).toEqual(0);
  });
});

describe("Grid", () => {
  const wrapper = shallowMount(Grid, {
    propsData: {
      cellsCount: 9,
      turn: true,
      selectedCells: {
        x: [1, 2, 3],
        o: [4, 6]
      },
      highlightCells: []
    }
  });

  it("it loads 9 grid cells", () => {
    expect(wrapper.findAll(GridCell).length).toBe(9);
  });
});
