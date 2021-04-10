<template>
  <div>
    <div @click="showVplKB">展示带输入框的键盘</div>
    <div @click="showVplKBv2">展示带输入框的键盘v2</div>
    <div @click="showKB">展示普通键盘</div>
    <vpl-view
      class="vpl-view"
      :value="svalue"
      :index="sindex"
      :newpower="snewpower"
      @on-change="onChangeVplView"
    ></vpl-view>

    <div @click="alertTest" style="padding: 4px; margin: 4px; background: yellow;">点击弹窗，可测试外部点击处理之后键盘是否隐藏</div>

    <div @click.stop="showKBV2WithSelfClose" style="padding: 4px; margin: 4px; background: #333333; color: white;">展示V2普通分离式键盘，并且开启外部点击时隐藏键盘的功能</div>
  </div>
</template>

<script>
import vplView from "./components/vpl-view";

export default {
  components: {
    "vpl-view": vplView
  },
  data: function() {
    return {
      svalue: "",
      sindex: 0,
      snewpower: false
    };
  },
  created() {
    this.svalue = "";
    this.sindex = 0;
    this.snewpower = false;
  },
  methods: {
    alertTest() {
      alert("如果之前有键盘显示时，可以检查弹窗结束后键盘的显示状态。")
    },
    /**
     * 一体式键盘
     */
    showVplKB() {
      const onChangeVplKb = (value, index, newpower) => {
        this.svalue = value;
        this.sindex = index;
        this.snewpower = newpower;
      };
      this.$vplkb.show({
        showVplView: true,
        value: this.svalue,
        index: this.sindex,
        newpower: this.snewpower,
        onChangeVpl: onChangeVplKb
      });
    },
    showVplKBv2() {
      const onChangeVplKb = (value, index, newpower) => {
        this.svalue = value;
        this.sindex = index;
        this.snewpower = newpower;
      };
      this.$vplkb.show({
        showVplView: true,
        value: this.svalue,
        index: this.sindex,
        newpower: this.snewpower,
        onChangeVpl: onChangeVplKb,
        version: "2",
      });
    },
    /**
     * 分离式键盘
     */
    onChangeVplView(index, newpower) {
      this.sindex = index;
      this.snewpower = newpower;
      this.$vplkb.props({
        index: this.sindex,
        newpower: this.snewpower
      });
    },
    showKB() {
      console.log("要开始展示了");

      const onChangeVplKb = (value, index, newpower) => {
        this.svalue = value;
        this.sindex = index;
        this.snewpower = newpower;
      };
      this.$vplkb.show({
        showVplView: false,
        value: this.svalue,
        index: this.sindex,
        newpower: this.snewpower,
        onChangeVpl: onChangeVplKb
      });
    },
    // 开启键盘外部的点击隐藏键盘功能
    showKBV2WithSelfClose() {
      const onChangeVplKb = (value, index, newpower) => {
        this.svalue = value;
        this.sindex = index;
        this.snewpower = newpower;
      };
      this.$vplkb.show({
        showVplView: false,
        value: this.svalue,
        index: this.sindex,
        newpower: this.snewpower,
        onChangeVpl: onChangeVplKb,
        version: "2",
        selfClose: true // 开启外部点击自动关闭键盘自身的功能
      });
    }
  }
};
</script>

<style scoped lang="less">
.vpl-view {
  width: 90%;
}
</style>
