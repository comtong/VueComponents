<template>
  <div>
    <t-radio-group
      v-model="radioValue"
      :disabled="allDisable"
      :direction="direction"
      :isLabelFirst="isLabelFirst"
      :justifyContent="justifyContent"
      @onChange="onChange"
    >
      <t-radio
        :value="'1'"
        :label="'第一个选项'"
        @onClick="onClick1"
        :disabled="firstDisable"
      />
      <t-radio :value="'2'" :label="'第二个选项'" @onClick="onClick2" />
      <t-radio :value="'3'" :label="'第三个选项'" @onClick="onClick3" />
    </t-radio-group>
    <div>
      <button @click="changeFirstDisable">
        {{ firstDisable ? "第一个不可点击" : "第一个可点击" }}
      </button>
      <button @click="clickButton">
        {{ allDisable ? "全部不可点击" : "全部可点击" }}
      </button>
    </div>
    <button @click="changeDirection">
      {{ direction === "vertical" ? "水平" : "垂直" }}
    </button>
    <button @click="changeType">
      {{ isLabelFirst ? "文字在前" : "文字在后" }}
    </button>
    <button @click="changeLayout">布局{{ justifyContent }}</button>

    <p>当前的radiogroup值为：{{ radioValue }}</p>
  </div>
</template>
<script>
import { TRadioGroup, TRadio } from "packages/inter";
export default {
  components: {
    TRadioGroup,
    TRadio
  },
  data() {
    return {
      radioValue: "",
      firstDisable: false,
      allDisable: false,
      direction: "vertical",
      isLabelFirst: true,
      justifyContent: "flex-start",
      justifyContentList: [
        "flex-start",
        "flex-end",
        "space-between",
        "center",
        "space-around"
      ],
      currentJustifyContentIndex: 0
    };
  },
  methods: {
    onClick1(val) {
      alert("点击事件获取的值" + val);
    },
    onClick2(val) {
      alert("点击事件获取的值" + val);
    },
    onClick3(val) {
      alert("点击事件获取的值" + val);
    },
    changeFirstDisable() {
      this.firstDisable = !this.firstDisable;
    },
    clickButton() {
      this.allDisable = !this.allDisable;
    },
    onChange(value) {
      alert("onChange事件获取的值：" + value);
    },
    changeDirection() {
      if (this.direction === "vertical") {
        this.direction = "horizontal";
      } else {
        this.direction = "vertical";
      }
    },
    changeType() {
      this.isLabelFirst = !this.isLabelFirst;
    },
    changeLayout() {
      if (
        this.currentJustifyContentIndex <
        this.justifyContentList.length - 1
      ) {
        this.currentJustifyContentIndex++;
      } else {
        this.currentJustifyContentIndex = 0;
      }
      this.justifyContent = this.justifyContentList[
        this.currentJustifyContentIndex
      ];
    }
  }
};
</script>
<style lang="less" scoped></style>
