<template>
  <div id="key-view-container">
    <div
      class="key-item"
      @click="keyClick(keyItemData.text, keyItemData.isFuncKey)"
      v-bind:style="keyItemStyle"
    >
      {{ keyItemData.text }}
      <img
        src="./assets/icon_keyboard_backspace.png"
        v-if="keyItemData.text === ''"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "key-view",
  props: {
    keyItem: {
      type: Object,
      default: () => {}
    },
    // 用户自定义键位的样式
    keyItemCustomStyle: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      keyItemData: {
        text: "", //键位文字
        isFuncKey: false, // 该键位是否有其他功能
        color: "", // 键位文字颜色
        backgroundColor: "" // 键位背景颜色
      },
      // 键位样式
      keyItemStyle: {
        color: "black" //键盘文字颜色
        // fontSize: '1rem', // 键盘文字大小
        // width: '1.8rem' // 单个键位所占宽度
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 键盘点击
    keyClick(text, isFuncKey) {
      this.$emit("onKeyClick", text, isFuncKey);
    },
    // 键位初始化
    init() {
      this.keyItemData = Object.assign({}, this.keyItemData, this.keyItem);
      this.keyItemStyle = Object.assign(
        {},
        this.keyItemStyle,
        this.keyItemCustomStyle
      );
      const stylesArr = ["color", "backgroundColor", "width"];
      this.fillDefaultStyle(stylesArr);
    },
    fillDefaultStyle(stylesArr) {
      stylesArr.map(item => {
        if (this.keyItemData[item]) {
          this.keyItemStyle[item] = this.keyItemData[item];
        }
      });
    }
  }
};
</script>

<style lang="less">
.key-item {
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 55%;
    height: auto;
  }
  box-shadow: -1px 1px lightgrey;
}
// 键盘点击时背景变色
.key-item:active {
  background: #f4f4f4;
  box-shadow: inset 0px 0px 0 1px lightgrey;
}
.key-item {
  margin: calc(1vw / 0.618) 1vw;
  min-width: 20px;
  width: 7.6vw;
  min-height: 20px;
  height: calc(7.6vw / 0.7);
  font-size: 20px;
  font-size: calc(7.6 * 0.618vw);
}
</style>
