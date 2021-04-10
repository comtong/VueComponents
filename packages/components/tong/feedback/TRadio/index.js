import TRadio from "./src/radio.vue";
import TRadioGroup from "./src/radioGroup.vue";

TRadio.install = function(Vue) {
  Vue.component(TRadio.name, TRadio);
};

TRadioGroup.install = function(Vue) {
  Vue.component(TRadioGroup.name, TRadioGroup);
};
export { TRadio, TRadioGroup };
