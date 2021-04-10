<template>
  <div class="vue-plate-number-keyboard">
    <div class="keyboard-container" v-if="sshow" @click.stop>
      <template v-if="showVplView">
        <div class="vpl-mask" @click="hide"></div>
        <div class="vpl-kb-header">
          <div class="title">{{ title }}</div>
          <!-- <div class="title-button-left" @click="_onCancel">
            <img src="./assets/icon_back@2x.png" />
          </div> -->
          <div class="title-button-right" @click="_onCancel">
            <img src="./assets/icon_close@2x.png" />
          </div>
        </div>
        <div class="vpl-div">
          <div class="vpl-view-div">
            <vpl-view
              class="vpl-view"
              :value="svalue"
              :index="sindex"
              :newpower="snewpower"
              @on-change="_onChangeVplView"
            ></vpl-view>
          </div>
          <div class="vpl-button">
            <t-button
              :title="buttonTitle"
              @onClick="_onComplete"
              :disabled="!completed"
            ></t-button>
          </div>
        </div>
      </template>
      <template v-if="!showVplView">
        <div class="kb-header">
          <div class="kb-header-title" @click="hide">{{ kbTitle }}</div>
        </div>
      </template>
      <vpl-keyboard :regions="sregions" @on-change="_onKeyDown" />
    </div>
    <div class="background" @click="hide" v-if="sshow && blurClose"></div>
  </div>
</template>

<script>
import TButton from "../../base/TButton";
import vplKeyboard from "./vpl-keyboard";
import vplView from "./vpl-view-dot-fixed";
import egn from "./engine";
export default {
  name: "TVplKeyboard",
  components: {
    "vpl-keyboard": vplKeyboard,
    "vpl-view": vplView,
    "t-button": TButton
  },
  props: {
    title: {
      type: String,
      default: "请输入您的车牌"
    },
    buttonTitle: {
      type: String,
      default: "完成"
    },
    kbTitle: {
      type: String,
      default: "隐藏"
    },
    value: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: 0
    },
    newpower: {
      type: Boolean,
      default: false
    },
    showVplView: {
      type: Boolean,
      default: true
    },
    blurClose: {
      type: Boolean,
      default: false
    },
    version: {
      type: String,
      default: "1"
    },
    // 是否开启键盘外部点击自动关闭键盘，默认关闭，开启时主要外部点击方法需要使用.stop阻止冒泡
    selfClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sindex: 0,
      snewpower: false,
      sregions: false,
      svalue: "",
      sshow: false
    };
  },
  computed: {
    completed() {
      return this.svalue.length > 6;
    },
    smax() {
      if (this.snewpower) {
        return 8;
      } else {
        return 7;
      }
    }
  },
  watch: {
    value(val) {
      console.log("watch value", val);
      this.svalue = val;
    },
    index(val) {
      console.log("watch index", val);
      this.sindex = val;
    },
    newpower(val) {
      console.log("watch newpower", val);
      this.snewpower = val;
    },
    sindex(val) {
      console.log("watch sindex", val);
      this._autoRegions();
    }
  },
  created() {
    this.svalue = this.value;
    this.sindex = this.index;
    this.snewpower = this.newpower;
    this._autoRegions();
  },
  methods: {
    stopScroll(e) {
      e.preventDefault();
    },
    show() {
      this.sshow = true;
      document.body.addEventListener("touchmove", this.stopScroll, {
        passive: false
      });

      // 开启外部点击时关闭自身键盘的展示
      if (this.selfClose) {
        console.log(
          "%c键盘组件:selfClose为true时的键盘展示%c触发键盘的点击操作需要使用@click.stop",
          "background: #333; padding: 2px; color: #fff",
          "background: #FFFBE5; padding: 2px; color: #5C3C00;"
        );
        // 点击事件冒泡到body层时，调用关闭键盘的方法（外部点击项需要把键盘关闭）
        document.body.addEventListener("click", this.hide);
      } else {
        // 如果弹键盘时不开启外部点击自动关闭就先移除事件（防止同一个页面多种键盘的使用方式交叉点击）
        document.body.removeEventListener("click", this.hide);
      }
    },
    hide() {
      this.sshow = false;
      document.body.removeEventListener("touchmove", this.stopScroll);

      // 开启外部点击时关闭自身键盘的展示
      if (this.selfClose) {
        console.log(
          "%c键盘组件:selfClose为true时的键盘隐藏%c如果需要展示键盘的点击同时输出键盘展示及键盘隐藏两个日志，那么%c点击操作忘记了添加.stop",
          "background: #333; padding: 2px; color: #fff",
          "background: #FFFBE5; padding: 2px; color: #5C3C00;",
          "background: #FFFBE5; padding: 2px; color: red;"
        );
        // 键盘关闭之后，就移除eventListener
        document.body.removeEventListener("click", this.hide);
      }
    },
    _autoRegions() {
      if (this.sindex <= 0) {
        this.sregions = true;
      } else if (this.sindex > 0) {
        this.sregions = false;
      }
    },
    _onComplete() {
      this.$emit("on-complete", this.svalue);
    },
    _onCancel() {
      this.$emit("on-cancel");
    },
    _emitChange() {
      if (this.svalue.length < 8 && this.sindex < 7) {
        this.snewpower = false;
      }
      this.$emit("on-change-vpl", this.svalue, this.sindex, this.snewpower);
      console.log("on-change-vpl:", this.svalue, this.sindex, this.snewpower);
    },
    _onChangeVplView(index, newpower) {
      this.sindex = index;
      this.snewpower = newpower;
      if (this.sindex < 1) {
        this.sregions = true;
      }
      this._emitChange();
    },
    _linkToData(res) {
      this.snewpower = res.snewpower;
      this.sindex = res.sindex;
      this.svalue = res.svalue;
    },
    _onKeyDown(text, regions) {
      const v = this.version;
      const params = {
        svalue: this.svalue,
        sindex: this.sindex,
        smax: this.smax,
        snewpower: this.snewpower,
        text: text
      };
      console.log("on-key-down", text, regions);
      if (text === "DEL") {
        if (this.svalue.length >= 1) {
          if (this.sindex !== this.svalue.length - 1) {
            // 不在末尾
            const res = egn.factory(v).deleteLastBefore(params);
            this._linkToData(res);
          } else {
            // 尾部删除
            const res = egn.factory(v).deleteLast(params);
            this._linkToData(res);
          }
        }
      } else {
        if (this.sindex < this.svalue.length) {
          // 不在尾部
          const res = egn.factory(v).modifyLastBefore(params);
          this._linkToData(res);
        } else if (this.sindex === this.svalue.length) {
          if (this.sindex === this.smax) {
            // 尾部修改
            const res = egn.factory(v).modifyLast(params);
            this._linkToData(res);
          } else {
            // 尾部新增
            const res = egn.factory(v).addLast(params);
            this._linkToData(res);
          }
        } else {
          console.log(
            "越界处理",
            this.svalue,
            text,
            this.sindex,
            this.smax,
            this.snewpower
          );
        }
      }
      this._emitChange();
    }
  }
};
</script>

<style lang="less">
.vue-plate-number-keyboard {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  .vpl-mask {
    background: rgba(0, 0, 0, 0.3);
    width: 100vw;
    height: 100vh;
  }
  .keyboard-container {
    width: 100%;
    position: fixed;
    z-index: 500;
    bottom: 0;
    left: 0;
    right: 0;
    .vpl-kb-header {
      background: #fff;
      height: 44px;
      font-size: 5vw;
      color: #383838;
      border-bottom: 1px solid #f6f6f6;
      border-top: 1px solid #f6f6f6;
      position: relative;
      .title {
        font-size: 4vw;
        padding: 10px;
      }
      .title-button-left {
        position: absolute;
        top: 0;
        left: 0;
        img {
          width: 24px;
          padding: 10px;
        }
      }
      .title-button-right {
        position: absolute;
        top: 0;
        right: 0;
        img {
          width: 24px;
          padding: 10px;
        }
      }
    }
    .kb-header {
      background: #eff2f5;
      height: 28px;
      position: relative;
      .kb-header-title {
        position: absolute;
        right: 5px;
        bottom: 0;
        color: #929292;
        font-size: 14px;
        padding-right: 10px;
      }
    }
    .vpl-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #fff;
      .vpl-view-div {
        padding-top: 20px;
        display: flex;
        justify-content: center;
        width: 90%;
        .vpl-view {
          width: 100%;
        }
      }
      .vpl-button {
        width: 90%;
        padding: 30px 0;
      }
    }
  }
}
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
