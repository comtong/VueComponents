import TabItem from "../tab/tab-item.vue";

TabItem.install = function(Vue) {
  Vue.component(TabItem.name, TabItem);
};

export default TabItem;
