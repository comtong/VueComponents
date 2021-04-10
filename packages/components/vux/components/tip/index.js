import Tip from "./main.vue";
Tip.install = function(Vue) {
  Vue.component(Tip.name, Tip);
};
export default Tip;
