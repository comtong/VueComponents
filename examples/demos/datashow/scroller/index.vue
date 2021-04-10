<template>
  <div class="scroller-container">
    <div @click="onClick">测试</div>
    <t-scroller
      @onScroll="onScroll"
      @loadMore="loadMore"
      @pulldown="pulldown"
      :isUnMore="isUnMore"
      :scrollTo="scrollTo"
      :isLoading="isLoading"
    >
      <div slot="list" class="list-container">
        <div
          v-for="(item, index) of list"
          :key="index"
          class="listItem"
          :ref="index"
        >
          {{ index }}
        </div>
      </div>
    </t-scroller>
  </div>
</template>
<script>
import { TScroller } from "packages/inter";
export default {
  components: {
    TScroller
  },
  data() {
    return {
      list: [1, 2, 3],
      isLoading: false,
      isUnMore: true,
      scrollTo: -100
    };
  },
  computed: {},
  watch: {
    myRef(val) {
      console.log("ref1111:", val);
    }
  },
  methods: {
    loadMore() {
      this.isLoading = true;
      setTimeout(() => {
        console.log("loadMore");
        this.isLoading = false;
        this.list.push(1);
        this.$emit("loadMore");
      }, 3000);
    },
    pulldown() {
      this.isLoading = true;
      clearTimeout(this.timers);
      setTimeout(() => {
        this.isLoading = false;
        this.list = new Array(10);
        this.isUnMore = false; // 有更多
      }, 3000);
    },
    onScroll(move) {
      console.log("onScroll:", move);
    },
    onClick() {
      this.scrollTo = 0;
    }
  }
};
</script>
<style lang="less" scoped>
.scroller-container {
  height: 400px;
  padding: 0 10px;
  background-color: #e1e1e1;
  .list-container {
    .listItem {
      display: flex;
      height: 60px;
      padding: 10px;
      margin-bottom: 10px;
      //background-color: mix($primary-color, #FFF, 90%);
      background-color: #fff;
      color: #000;
    }
  }
}
</style>
