<template>
  <div class="container">
    <div class="progressBar">
      <div class="top">
        <div class="lines">
          <div
            class="line"
            v-for="(item, key) in stepLineInfo"
            :key="key"
            :style="{
              borderTopColor: step > key + 1 ? chooseColor : initColor
            }"
          ></div>
        </div>
        <div class="circles">
          <div
            class="circle"
            v-for="(item, key) in stepInfos"
            :key="key"
            :style="{ backgroundColor: step > key ? chooseColor : initColor }"
          ></div>
        </div>
      </div>
      <div class="bottom">
        <div
          class="step-name"
          v-for="(item, key) in stepInfos"
          :key="key"
          :style="{ color: step > key ? chooseTextColor : initColor }"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    step: {
      type: Number,
      default: 1
    },
    stepInfos: {
      type: Array,
      default: function() {
        return ["stepOne", "StepTwo", "StepThree", "StepFour"];
      }
    },
    initColor: {
      type: String,
      default: "#d8d8d8"
    },
    chooseColor: {
      type: String,
      default: "#5895EF"
    },
    chooseTextColor: {
      type: String,
      default: "#383838"
    }
  },
  mounted() {},
  computed: {
    stepLineInfo() {
      return this.stepInfos.slice(1);
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 6px;
  .progressBar {
    width: 100%;
    font-size: 12px;
    .top {
      padding-left: 19px;
      padding-right: 19px;
      .lines {
        display: flex;
        justify-content: space-between;
        .line {
          border-top: 2px solid #d8d8d8;
          flex-grow: 1;
        }
        .choose-color {
          border-top-color: #5995ef;
        }
      }
      .circles {
        display: flex;
        justify-content: space-between;
        margin-top: -6px;
        .circle {
          width: 10px;
          height: 10px;
          background-color: #d8d8d8;
          border-radius: 5px;
        }
        .choose-color {
          background-color: #5995ef;
        }
      }
    }
    .bottom {
      margin-top: 0.8rem;
      display: flex;
      justify-content: space-between;
      .step-name {
        color: #929292;
      }
      .choose-color {
        color: #383838;
      }
    }
  }
}
</style>
