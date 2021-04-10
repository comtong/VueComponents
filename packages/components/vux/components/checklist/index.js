import Checklist from "./main.vue";
Checklist.install = function(Vue) {
  Vue.component(Checklist.name, Checklist);
};
export default Checklist;
