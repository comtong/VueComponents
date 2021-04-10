import TGrid from "./src/grid.vue";
import TGridItem from "./src/gridItem.vue";

TGrid.install = function(Vue) {
  Vue.component(TGrid.name, TGrid);
};

TGridItem.install = function(Vue) {
  Vue.component(TGridItem.name, TGridItem);
};
export { TGrid, TGridItem };
