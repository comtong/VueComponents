<template>
  <div class="tui-picker_list" ref="list">
    <div class="tui-picker_item" v-for="(item, index) in listData" :key="index">
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listData: Array,
    keyIndex: Number,
    chooseValue: String
  },
  data() {
    return {
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0
      },
      currIndex: 1, // 当前展示的位置
      transformY: 0, // 此组件移动的距离
      scrollDistance: 0, // 每一次滚动的距离
      lineSpacing: 45 //每一行高度
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 监听
      this.$el.addEventListener("touchstart", this.touchStart);
      this.$el.addEventListener("touchmove", this.touchMove);
      this.$el.addEventListener("touchend", this.touchEnd);
    });
  },
  beforeDestroy() {
    // 移除监听
    this.$el.removeEventListener("touchstart", this.touchStart);
    this.$el.removeEventListener("touchmove", this.touchMove);
    this.$el.removeEventListener("touchend", this.touchEnd);
    clearTimeout(this.timer);
  },
  watch: {
    // 监听选择的值，然后滚动到这里（主要是前一列变了，这个值也需要跟着改变）
    chooseValue: {
      handler: function() {
        console.log("modifyStatus:", this.chooseValue);
        this.transformY = 0;
        this.modifyStatus(this.chooseValue);
      },
      deep: true
    }
  },
  methods: {
    // 外部主动调用
    modifyStatus(chooseValue) {
      this.transformY = 0;
      if (this.listData && chooseValue) {
        let index = this.listData.indexOf(chooseValue);
        this.currIndex = index === -1 ? 1 : index + 1;
        let move = index === -1 ? 0 : index * this.lineSpacing;
        this.setMove(-move);
        // this.setChooseValue(-move);
      } else {
        this.setMove(0);
      }
    },
    setTransform(translateY = 0, type, time = 1000) {
      if (type === "end") {
        console.log("setTransform", translateY);
        this.$refs.list.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
        //this.$refs.roller.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
      } else {
        this.$refs.list.style.webkitTransition = "";
        //this.$refs.roller.style.webkitTransition = "";
      }
      this.$refs.list.style.webkitTransform = `translate(0, ${translateY}px)`;
      this.scrollDistance = translateY; // 记录这一次移动距离
    },
    setMove(move, type, time) {
      let updateMove = move + this.transformY; //本次需要移动的位置是原来移到的位置加上新需要移动的距离
      if (!this.listData || this.listData.length === 0) {
        // 一旦这一列没有数据，则不允许移动
        this.setTransform(0, null, null);
        this.currIndex = 0;
        return;
      }
      if (type === "end") {
        // 限定滚动距离;
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(this.listData.length - 1) * this.lineSpacing) {
          updateMove = -(this.listData.length - 1) * this.lineSpacing;
        }
        // 设置滚动距离为lineSpacing的倍数值
        let endMove =
          Math.round(updateMove / this.lineSpacing) * this.lineSpacing;
        this.setTransform(endMove, type, time);
        this.timer = setTimeout(() => {
          this.setChooseValue(endMove);
        }, time / 2);
        this.currIndex = Math.abs(Math.round(endMove / this.lineSpacing)) + 1;
      } else {
        this.setTransform(updateMove, null, null);
        this.currIndex =
          Math.abs(Math.round(updateMove / this.lineSpacing)) + 1;
      }
    },
    setChooseValue(move) {
      this.$emit(
        "chooseItem",
        this.listData[Math.round(-move / this.lineSpacing)],
        this.keyIndex
      );
    },
    touchStart(event) {
      event.preventDefault();
      let changedTouches = event.changedTouches[0];
      this.touchParams.startY = changedTouches.pageY;
      this.touchParams.startTime = event.timestamp || Date.now();
      this.transformY = this.scrollDistance; // 设置上次移动的距离为最后一次移动后的距离
    },

    touchMove(event) {
      event.preventDefault();

      let changedTouches = event.changedTouches[0];
      this.touchParams.lastY = changedTouches.pageY;
      this.touchParams.lastTime = event.timestamp || Date.now();
      let move = this.touchParams.lastY - this.touchParams.startY;

      this.setMove(move);
    },

    touchEnd(event) {
      event.preventDefault();
      let changedTouches = event.changedTouches[0];
      this.touchParams.lastY = changedTouches.pageY;
      this.touchParams.lastTime = event.timestamp || Date.now();
      let move = this.touchParams.lastY - this.touchParams.startY;

      let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
      if (moveTime <= 300) {
        move = move * 2;
        moveTime = moveTime + 1000;
        this.setMove(move, "end", moveTime);
      } else {
        this.setMove(move, "end");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tui-picker_list {
  flex: 1;
  padding: 90px 0;
  .tui-picker_item {
    height: 45px;
    line-height: 45px;
    width: 100%;
    text-align: center;
    z-index: 3;
  }
}
</style>
