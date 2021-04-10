<template>
  <div class="home">
    <div class="title">组件库</div>
    <t-grid>
      <t-grid-item
        v-for="(item, index) in itemList"
        :key="index"
        :label="item.name"
        @click.native="onClickItem(item.route)"
      ></t-grid-item>
    </t-grid>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      itemList: [
        { name: "基础组件", route: "/base" },
        { name: "布局组件", route: "/layout" },
        { name: "反馈组件", route: "/feedback" },
        { name: "数据展示", route: "/datashow" },
        { name: "导航组件", route: "/navigation" },
        { name: "表单组件", route: "/form" },
        { name: "业务组件", route: "/business" }
      ]
    };
  },
  methods: {
    onClickItem(route) {
      console.log(route);
      this.$router.push(route);
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  font-size: 20px;
  text-align: center;
  padding: 20px 0;
}
</style>
