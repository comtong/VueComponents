import TToast from "./src/main.vue";
TToast.install = function(Vue) {
  Vue.component(TToast.name, TToast);
};
export default TToast;
