import TPicker from "./src/main.vue";
TPicker.install = function(Vue) {
  Vue.component(TPicker.name, TPicker);
};
export default TPicker;
