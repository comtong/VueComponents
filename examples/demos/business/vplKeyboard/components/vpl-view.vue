<template>
  <div class="vpl-view">
    <div
      v-for="(key, i) in valueListBefore"
      :key="i"
      :class="[
        'vpl-key',
        {
          'border-select': sindex === i,
          'border-unselect': sindex !== i
        }
      ]"
      @click="selectKey(i)"
    >
      <div :class="['vpl-text text-' + i, { 'text-select': sindex === i }]">
        {{ key }}
      </div>
    </div>
    <div class="dot-container">
      <div class="dot" />
    </div>
    <div
      v-for="(key, i) in valueListAfter"
      :key="i + 2"
      :class="[
        'vpl-key',
        {
          'border-select': sindex === i + 2,
          'border-unselect': sindex !== i + 2
        }
      ]"
      @click="selectKey(i + 2)"
    >
      <div
        :class="['vpl-text text-' + i + 2, { 'text-select': sindex === i + 2 }]"
      >
        {{ key }}
      </div>
    </div>
    <div
      class="vpl-key border-newpower"
      @click="openNewpower"
      v-if="!snewpower"
    >
      <img src="./assets/icon_green@3x.png" />
    </div>
  </div>
</template>
<script>
export default {
  name: "vplview",
  props: {
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
    }
  },
  data: function() {
    return {
      svalue: "",
      sindex: 0,
      snewpower: false
    };
  },
  watch: {
    value(val) {
      this.svalue = val;
    },
    index(val) {
      this.sindex = val;
    },
    newpower(val) {
      this.snewpower = val;
    }
  },
  computed: {
    valueList() {
      let list = this.svalue.split("");
      let length = this.smax;
      let valueList = [];
      while (length--) {
        if (list[length]) {
          valueList.push(list[length]);
        } else {
          valueList.push("");
        }
      }
      return valueList.reverse();
    },
    valueListBefore() {
      return this.valueList.slice(0, 2);
    },
    valueListAfter() {
      return this.valueList.slice(2, this.valueList.length);
    },
    smax() {
      if (this.snewpower) {
        return 8;
      } else {
        return 7;
      }
    }
  },
  created() {
    this.svalue = this.value;
    this.sindex = this.index;
    this.snewpower = this.newpower;
  },
  methods: {
    openNewpower() {
      if (this.svalue.length === 7) {
        // 已有7位车牌的情况下才能打开新能源
        this.snewpower = true;
        this.sindex = 7;
      }
      this.$emit("on-change", this.sindex, this.snewpower);
    },
    selectKey(index) {
      if (this.valueList[index] === "") {
        this.sindex = this.getMaxVaueIndex();
      } else {
        this.sindex = index;
      }
      this.$emit("on-change", this.sindex, this.snewpower);
    },
    getMaxVaueIndex() {
      for (let index = 0; index < this.valueList.length; index++) {
        if (this.valueList[index] === "") {
          return index;
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.vpl-view {
  display: flex;
  justify-content: space-between;
  background: #fff;
  .vpl-key {
    padding: 5px;
    width: 5vw;
    height: calc(5vw / 0.7);

    border-radius: 2px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .vpl-text {
      font-size: 4vw;
    }
    .text-select {
      color: #5995ef;
    }

    img {
      width: 150%;
      height: auto;
    }
  }
  .border-unselect {
    border: 1px solid #bbb;
  }
  .border-select {
    border: 1px solid #5995ef;
  }
  .border-newpower {
    border: 1px dashed #bbb;
  }
  .dot-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dot {
    background: #929292;
    height: 2px;
    width: 2px;
    border: 1px solid transparent;
    border-radius: 50%;
  }
}
</style>
