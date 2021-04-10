<template>
  <div class="tui-scroller">
    <div class="tui-vert-scroll" ref="wrapper">
      <div
        class="tui-vert-list"
        ref="list"
        :style="{ 'min-height': listMinHeightStyle }"
      >
        <div class="tui-vert-pulldown" v-if="isShowPull">
          <div class="tui-vert-pulldown-txt" v-if="!isLoading">
            {{ pulldownTxt }}
          </div>
          <div class="tui-vert-pulldown-status" v-else>
            <span class="tui-vert-loading"></span>
            <span class="tui-vert-loading-txt">{{ pulldownLoadingText }}</span>
          </div>
        </div>
        <slot name="list"></slot>
        <div class="tui-vert-loadmore">
          <!-- 如果没有更多,那么显示没有更多
          如果还有更多，且上滑加载了，那么展示上滑加载 -->
          <template v-if="isUnMore">
            <div class="tui-vert-unloadmore-txt">
              {{ unloadMoreTxt }}
            </div>
          </template>
          <template v-else-if="isShowLoadMore">
            <!-- <div class="nut-vert-load-txt" >{{loadMoreTxt}}</div> -->
            <div class="tui-vert-load-status" v-if="isLoading">
              <span class="tui-vert-loading"></span>
              <span class="tui-vert-loading-txt">{{ pullupLoadingText }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "t-scroller",
  props: {
    stretch: {
      type: Number, // 拉伸范围，及最大的拉伸高度
      default: 100
    },
    isUnMore: {
      type: Boolean, // 是否没有更多
      default: true
    },
    threshold: {
      type: Number, // 距离底部多少距离开始加载
      default: 100
    },
    pulldownTxt: {
      type: String,
      default: "下拉刷新"
    },
    pulldownLoadingText: {
      type: String,
      default: "加载中..."
    },
    pullupLoadingText: {
      type: String,
      default: "加载中..."
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    unloadMoreTxt: {
      type: String,
      default: "没有更多了"
    },
    scrollTo: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      isShowPull: true,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0
      },
      realMove: 0,
      translateY: 0, // 此组件之前移动到的位置
      scrollDistance: 0, // 滚动的距离
      isShowLoadMore: false,
      listMinHeightStyle: "auto",
      propsTime: {
        type: Number,
        default: 0
      }
    };
  },
  watch: {
    isLoading: function(status) {
      // loading结束需要把位置重置
      if (!status && this.realMove === 0) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.setTransform(this.realMove, "end", null);
        }, this.propsTime);
      }
    },
    isUnMore: function() {
      this.$nextTick(() => {
        this.isShow();
      });
    },
    scrollTo: function(val) {
      if (typeof val === "number" && !isNaN(val) && val <= 0) {
        // 只能上滑到指定位置
        this.setTransform(val, null, 500);
        this.$emit("scrollToCbk");
      }
    }
  },
  methods: {
    isShow() {
      let wrapH = this.$refs.wrapper.offsetHeight; // 外层
      let listH = this.$refs.list.offsetHeight; // 内部
      if (wrapH < listH) {
        // 容器小于列表高度，那么就是可以带有展示更多
        this.isShowLoadMore = true;
        this.listMinHeightStyle = "auto";
      } else {
        // 容器大于列表高度，那么肯定没有上拉加载更多
        this.isShowLoadMore = false;
        this.listMinHeightStyle = `${wrapH}px`;
      }
    },
    setTransform(translateY = 0, type, time = 500) {
      if (type === "end") {
        this.$refs.list.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
        this.$emit("onScroll", translateY);
      } else {
        this.$refs.list.style.webkitTransition = "";
      }
      this.$refs.list.style.webkitTransform = `translate(0, ${translateY}px)`;
      this.scrollDistance = translateY; // 记录上次滚动的距离
    },

    setMove(move, type, time) {
      let updateMove = move + this.translateY;
      let h = this.$refs.wrapper.offsetHeight;
      let maxMove = -this.$refs.list.offsetHeight + h; // 最大滑动的距离及内容比容器多的距离

      if (type === "end") {
        if (updateMove > 0) {
          // 如果是下拉刷新
          this.realMove = 0;
          // 如果此时不是正在加载中，并且移动距离超过20，太小就不当滑动了
          if (!this.isLoading && updateMove > 20) {
            updateMove = 50;
            clearTimeout(this.timerEmit);
            this.timerEmit = setTimeout(() => {
              this.$emit("pulldown");
            }, time / 2);
          } else {
            updateMove = 0;
          }
        } else if (updateMove < 0 && updateMove < maxMove + this.threshold) {
          // 如果是上滑，且滑动的距离大于可以滑动的最大距离 + 距离底部设定的加载距离
          if (updateMove < maxMove) {
            updateMove = maxMove;
          }
          this.realMove = maxMove;
          if (!this.isLoading && !this.isUnMore) {
            this.$emit("loadMore");
          }
        }
        this.setTransform(updateMove, type, time);
      } else {
        if (updateMove > 0 && updateMove > this.stretch) {
          updateMove = this.stretch;
        } else if (updateMove < maxMove - this.stretch) {
          updateMove = maxMove - this.stretch;
        }
        this.setTransform(updateMove, null, null);
      }
    },

    touchStart(event) {
      // event.preventDefault();
      let changedTouches = event.changedTouches[0];
      this.touchParams.startY = changedTouches.pageY;
      this.touchParams.startTime = event.timestamp || Date.now();
      this.translateY = this.scrollDistance;
      console.log("touchStart", this.translateY);
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
      // event.preventDefault();
      let changedTouches = event.changedTouches[0];
      this.touchParams.lastY = changedTouches.pageY;
      this.touchParams.lastTime = event.timestamp || Date.now();
      let move = this.touchParams.lastY - this.touchParams.startY;

      let moveTime = this.touchParams.lastTime - this.touchParams.startTime;
      let h = this.$refs.wrapper.offsetHeight;
      let maxMove = -this.$refs.list.offsetHeight + h;
      if (moveTime <= 300) {
        move = move * 2;
        if (move < 0 && move < maxMove) {
          move = maxMove;
        }
        moveTime = moveTime + 500;
        console.log("touchEnd1:", move);
        this.setMove(move, "end", moveTime);
      } else {
        console.log("touchEnd2:", move);
        this.setMove(move, "end");
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.isShow();
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
    clearTimeout(this.timerEmit);
  }
};
</script>
<style lang="less" scoped>
.tui-scroller {
  display: flex;
  height: 100%;
  overflow: hidden;
  .tui-vert-scroll {
    flex: 1;
    overflow: hidden;
    .tui-vert-list {
      width: 100%;
      touch-action: none; // 阻止触控事件
      position: relative;
    }
    .tui-vert-pulldown {
      position: absolute;
      top: -50px;
      width: 100%;
    }
    .tui-vert-loadmore,
    .tui-vert-pulldown,
    .tui-vert-unloadmore {
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 12px;
      color: #999;
      .tui-vert-pulldown-status,
      .tui-vert-loadmore-status {
        height: 50px;
      }
      .tui-vert-loading {
        height: 20px;
        width: 20px;
        background: url(~img/loading.png) no-repeat 0 0;
        background-size: 100%;
        animation: rotation 2s linear infinite;
      }
      .tui-vert-loading-txt {
        height: 50px;
        padding-left: 5px;
      }
      .tui-vert-loading,
      .tui-vert-loading-txt {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>
