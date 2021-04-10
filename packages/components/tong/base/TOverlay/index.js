import TOverlay from "./src/main.vue";
TOverlay.install = function(Vue) {
  Vue.component(TOverlay.name, TOverlay);
};
export default TOverlay;
