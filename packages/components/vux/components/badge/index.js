import Badge from "./main.vue";
Badge.install = function(Vue) {
  Vue.component(Badge.name, Badge);
};
export default Badge;
