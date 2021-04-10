import Flex from "./src/flex.vue";
import FlexItem from "./src/flexItem.vue";
Flex.install = function(Vue) {
  Vue.component(Flex.name, Flex);
};
FlexItem.install = function(Vue) {
  Vue.component(FlexItem.name, FlexItem);
};
export const TFlex = Flex;
export const TFlexItem = FlexItem;
