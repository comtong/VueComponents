<template>
  <div class="banners-container">
    <swiper :options="bannersSwiperOption">
      <swiper-slide v-for="(banner, index) in dataList" :key="index">
        <div :class="paddingClass" @click="onBannerClick(banner)">
          <img :class="borderClass" class="banner-img" :src="banner.logo_url" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

//有边距样式
const bannersSwiperOptionED = {
  autoplay: {
    delay: 5000 // 自动切换的时间间隔,单位ms
  },
  spaceBetween: -20 // 两个swiperItem之间的间距（负数则能实现把下一屏的一部分显示到上一屏）
};
//无边距样式
const bannersSwiperOptionNED = {
  autoplay: {
    delay: 5000 // 自动切换的时间间隔,单位ms
  },
  spaceBetween: 0 // 两个swiperItem之间的间距（负数则能实现把下一屏的一部分显示到上一屏）
};

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    bannerType: {
      type: String,
      default: "primary" //edge distance 边距
    }
  },
  computed: {
    // 是否有边框圆角
    borderClass() {
      if (this.bannerType === "primary") {
        return "border-class-ed";
      } else if (this.bannerType === "noedge") {
        return "border-class-ned";
      }
    },
    //边界是否有空
    paddingClass() {
      if (this.bannerType === "primary") {
        return "padding-class-ed";
      } else if (this.bannerType === "noedge") {
        return "padding-class-ned";
      }
    },
    //swiper样式
    bannersSwiperOption() {
      if (this.bannerType === "primary") {
        return bannersSwiperOptionED;
      } else if (this.bannerType === "noedge") {
        return bannersSwiperOptionNED;
      }
    }
  },
  methods: {
    //进行点击事件处理
    onBannerClick(banner) {
      this.$emit("onBannerClick", banner);
    }
  }
};
</script>

<style scoped>
.banners-container .banner-img {
  height: 100%;
  width: 100%;
}
.border-class-ed {
  border-radius: 4px;
}
.border-class-ned {
  border-radius: 0px;
}
.padding-class-ed {
  display: flex;
  padding: 0 15px;
}
.padding-class-ned {
  display: flex;
  padding: 0;
}
</style>
