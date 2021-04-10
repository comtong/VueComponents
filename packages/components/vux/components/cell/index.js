import Cell from "./main.vue";
Cell.install = function(Vue) {
  Vue.component(Cell.name, Cell);
};
export default Cell;