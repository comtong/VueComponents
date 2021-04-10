import TCaptcha from "./src/main.vue";
TCaptcha.install = function(Vue) {
  Vue.component(TCaptcha.name, TCaptcha);
};
export default TCaptcha;
