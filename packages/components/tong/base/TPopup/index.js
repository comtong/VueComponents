import TPopup from "./src/main.vue";
TPopup.install = function(Vue) {
  Vue.component(TPopup.name, TPopup);
};
export default TPopup;
