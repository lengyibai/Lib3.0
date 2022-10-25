<template>
  <div class="demo">
    <Waterfall ref="waterfall" :count="count" @load-more="loadMore">
      <div
        class="waterfall-box"
        v-for="(item, index) in data"
        :style="{
          width: '100px',
          height: (100 / getQueryString(item.img, 'w')) * getQueryString(item.img, 'h') + 75 + 'px',
        }"
        :key="index"
      >
        <img
          :src="item.img"
          alt="加载失败"
          :style="{
            height: (100 / getQueryString(item.img, 'w')) * getQueryString(item.img, 'h') + 'px',
          }"
        />
        <div class="box">
          <span class="name">第{{ index + 1 }}个商品</span>
          <div class="nums">
            <div class="price">¥ 9.99</div>
            <div class="sellnum">999+人购买</div>
          </div>
        </div>
      </div>
    </Waterfall>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Waterfall from '../index.vue';

const waterfall = ref();
const data = ref<{ img: string }[]>([]);
const originData = ref<{ img: string }[]>([
  {
    img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080',
  },
  {
    img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080',
  },
]);
const count = ref(0);

/* 加载更多 */
const loadMore = () => {
  setTimeout(() => {
    data.value.push(...originData.value);
    waterfall.value.updateChilds();
  }, 100);
};

/* 获取图片链接中的图片宽高 */
const getQueryString = (url: string, name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = url.split('?')[1].match(reg);
  if (r != null) return Number(decodeURI(r[2]));
  return 0;
};

/* 根据屏幕宽度显示列数 */
const setCount = () => {
  const w = document.documentElement.clientWidth;
  if (w > 1560) {
    count.value = 6;
  } else if (w > 1300) {
    count.value = 5;
  } else if (w > 580) {
    count.value = 4;
  } else if (w > 460) {
    count.value = 3;
  } else if (w > 360) {
    count.value = 2;
  } else {
    count.value = 1;
  }
};
onMounted(() => {
  data.value = [...originData.value];
  setCount();
  window.addEventListener('resize', setCount);
});
</script>
<style lang="less" scoped>
.demo {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75vh;
  overflow: auto;
  overscroll-behavior: contain;
  background-color: var(--cb-shadow);
  .waterfall-box {
    display: flex;
    flex-direction: column;
    position: absolute;
    transition: all 0.75s;
    opacity: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 100%;
      flex: 1;
      background-color: var(--cb-bg);
    }
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 75px;
      background-color: var(--cb-bg);
      padding-left: 10px;
      .name {
        font-size: 15px;
      }
      .nums {
        .price {
          font-size: 14px;
          color: #e67e22;
        }
        .sellnum {
          font-size: 12px;
          color: #ccc;
        }
      }
    }
  }
}
</style>
