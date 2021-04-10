<template>
  <div>
    <cmb-header @onBackClick="onHeaderClick" title="业务组件"></cmb-header>
    <div class="base_container">
      <cmb-grid>
        <cmb-grid-item
          v-for="(item, index) in componentList"
          :key="index"
          :label="item"
          @click.native="onClickItem(item)"
        ></cmb-grid-item>
      </cmb-grid>
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
      componentList: ["vplKeyBoard", "authConfirm", "unbundingRadio", "banner"],
      chooseIndex: 0
    };
  },
  methods: {
    onClickItem(path) {
      this.$router.push("/business/" + path);
    },
    onHeaderClick() {
      this.$router.push("/");
    }
  },
  computed: {}
};
</script>
<style lang="less" scoped>
.base_container {
  margin-top: 50px;
  .showComponent {
    margin-top: 20px;
  }
}
</style>
