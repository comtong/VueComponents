import TButton from "./src/main.vue";
TButton.install = function(Vue) {
  Vue.component(TButton.name, TButton);
};
export default TButton;
