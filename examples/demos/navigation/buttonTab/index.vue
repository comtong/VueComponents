<template>
  <div>
    <t-button-tab
      class="t-button-tab"
      :btnTabArray="btnTabArray"
      :selected="selected"
      selectedColor="#565656"
      @setButtonTabItem="setButtonTabItem"
    ></t-button-tab>
  </div>
</template>

<script>
import { TButtonTab } from "packages/inter";
export default {
  components: {
    TButtonTab
  },
  data() {
    return {
      selected: 0,
      btnTabArray: ["Tab1", "Tab2", "Tab3"]
    };
  },
  methods: {
    setButtonTabItem(index) {
      this.selected = index;
    }
  }
};
</script>

<style lang="less" scoped></style>
