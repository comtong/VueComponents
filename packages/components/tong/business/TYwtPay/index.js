import TYwtPay from "./src/main.vue";
TYwtPay.install = function(Vue) {
  Vue.component(TYwtPay.name, TYwtPay);
};
export default TYwtPay;
