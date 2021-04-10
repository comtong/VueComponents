import PopupHeader from "./main.vue";
PopupHeader.install = function(Vue) {
  Vue.component(PopupHeader.name, PopupHeader);
};
export default PopupHeader;
