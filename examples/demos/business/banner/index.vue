<template>
  <div>
    <t-banner
      :dataList="dataList"
      bannerType="noedge"
      @onBannerClick="onBannerClick"
    ></t-banner>
  </div>
</template>
<script>
// 这个地方想办法直接从package的index中引入
import { TBanner } from "packages/inter";

export default {
  components: {
    TBanner
  },
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    onBannerClick(banner) {
      alert(banner.link);
    }
  }
};
</script>
<style lang="less" scoped></style>
