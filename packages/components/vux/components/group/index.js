import Group from "./main.vue";
Group.install = function(Vue) {
  Vue.component(Group.name, Group);
};
export default Group;
