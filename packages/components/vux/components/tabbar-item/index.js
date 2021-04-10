import TabbarItem from "../tabbar/tabbar-item.vue";

TabbarItem.install = function(Vue) {
  Vue.component(TabbarItem.name, TabbarItem);
};

export default TabbarItem;