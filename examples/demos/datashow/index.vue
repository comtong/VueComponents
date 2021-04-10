<template>
  <div>
    <t-header @onBackClick="onHeaderClick" title="数据展示"></t-header>
    <div class="base_container">
      <t-grid>
        <t-grid-item
          v-for="(item, index) in componentList"
          :key="index"
          :label="item"
          @click.native="onClickItem(item)"
        ></t-grid-item>
      </t-grid>
      <div class="showComponent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      componentList: ["scroller", "banner"]
    };
  },
  methods: {
    onHeaderClick() {
      this.$router.push("/");
    },
    onClickItem(path) {
      this.$router.push("/datashow/" + path);
    }
  }
};
</script>
<style lang="less" scoped>
.base_container {
  padding-top: 50px;
  .showComponent {
    margin-top: 20px;
  }
}
</style>
