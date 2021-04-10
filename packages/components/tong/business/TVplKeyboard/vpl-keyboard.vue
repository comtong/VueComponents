<template>
  <div class="keyboard-div">
    <div :class="{ regions: showRegions, 'other-items': !showRegions }">
      <div :class="'row row-' + i" v-for="(row, i) in rows" :key="i">
        <div class="keyboard-item" v-for="item in row" :key="item.text">
          <key-view
            v-bind:keyItem="item"
            @onKeyClick="onKeyClick"
            v-bind:keyItemCustomStyle="style"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { REGIONS, OTHERKEYS } from "./keyboard-keys";
import keyView from "./key-view";
export default {
  name: "vplkeyboard",
  props: {
    // 键盘的显示或关闭
    show: {
      type: Boolean,
      default: false
    },
    regions: {
      type: Boolean,
      default: true
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    rows() {
      if (this.showRegions) {
        return REGIONS;
      } else {
        return OTHERKEYS;
      }
    }
  },
  data() {
    return {
      showRegions: true, // 地区和字母间的切换开关
      style: {}
    };
  },
  created() {
    this.showRegions = this.regions;
  },
  watch: {
    regions(val) {
      console.log("keyboard watch regions:", val);
      this.showRegions = val;
    }
  },
  components: {
    "key-view": keyView
  },
  methods: {
    // 在地区和字母+数字这两者间切换
    switchKeyboardType() {
      this.showRegions = !this.showRegions;
    },
    // 键位点击事件
    onKeyClick(text, isFuncKey) {
      // 当前点击的键为函数键
      if (isFuncKey) {
        const keyboardSwitchArr = ["ABC", "省份"];
        // 判断当前点击键位是否为键盘切换键
        if (keyboardSwitchArr.includes(text)) {
          this.switchKeyboardType();
        }
        // 删除按钮
        if (text === "") {
          this.$emit("on-change", "DEL", this.showRegions);
        }
      } else {
        this.$emit("on-change", text, this.showRegions);
      }
    }
  }
};
</script>

<style lang="less">
.btn-complete-div {
  background: #fff;
  height: 10vw;
  font-size: 5vw;
  color: #383838;
  border-bottom: 1px solid #f6f6f6;
  border-top: 1px solid #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 4vw;
  }
  span {
    position: absolute;
    left: 0;
    img {
      width: 2vw;
      padding: 0 20px 0 10px;
    }
  }
}

.keyboard-div {
  height: 100%;
  padding: 7px;
  background: #eff2f5;
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
