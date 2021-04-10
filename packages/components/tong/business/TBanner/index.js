import TBanner from "./src/main.vue";
TBanner.install = function(Vue) {
  Vue.component(TBanner.name, TBanner);
};
export default TBanner;
