<template>
  <div>
    <t-header @onBackClick="onHeaderClick" title="业务组件"></t-header>
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
      componentList: [
        "actionsheet",
        "confirm",
        "datePicker",
        "input",
        "loading",
        "picker",
        "radio",
        "select",
        "switch",
        "toast"
      ],
      chooseIndex: 2
    };
  },
  methods: {
    onClickItem(path) {
      this.$router.push("/feedback/" + path);
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
