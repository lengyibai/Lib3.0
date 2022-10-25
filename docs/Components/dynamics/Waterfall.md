<script setup>
  import Waterfall from './Components/Waterfall/demo/index.vue'
</script>

# Waterfall

<ContainerBox title="介绍">
<template #desc>
参考网上瀑布流基础代码进行拓展
</template>
</ContainerBox>

<ContainerBox title="下载并引入">

<template #desc>

[下载组件包及当前组件的所有案例](https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/dynamic/LibWaterfall.zip)

引入参考 [引入组件](/Components/base/start.html)
</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>

此组件必须配合后端，后端需要将图片的尺寸写入图片链接，前端再将图片链接中的宽高提取出来，详细操作见`demo`源码
</template>

<div class="demoBox">
<Waterfall />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="demo">
    <LibWaterfall ref="waterfall" :count="count" @load-more="loadMore">
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
    </LibWaterfall>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const waterfall = ref();
const data = ref<{ img: string }[]>([]);
const originData = ref<{ img: string }[]>([
  { img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080' },
  { img: 'https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080' },
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
```

</template>
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">

<template #desc>

| 参数       | 说明                                                                                                                                                                                                                                                                  | 类型    | 默认值 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ |
| count      | 列数                                                                                                                                                                                                                                                                  | Number  | 2      |
| gap        | 间隔                                                                                                                                                                                                                                                                  | Number  | 10     |
| loadHeight | 距离底部多少像素触发加载更多，可实现<br />注：当触发加载更多后会锁定，锁定后无法触发加载更多，需要距离底部`>loadHeight`才会解锁，所以填的上限取决于加载元素后增加的高度，如果增加的高度低于`loadHeight`，那将无法触发加载更多，遇到这种情况时，请减少`loadHeight`的值 | Number  | 0      |
| loading    | 需要加后缀`.sync`，即`:loading.sync="loading"`，当滚动到最底部（距离底部为 0）时为`true`，此时可以显示自己的`loading`组件<br />注：组件只负责给你显示，当加载完毕后，你需要手动设置为`false`进行隐藏                                                                  | Boolean | false  |

</template>
</ContainerBox>

<ContainerBox title="Methods">

<template #desc>

| 参数         | 说明                                                                         |
| ------------ | ---------------------------------------------------------------------------- |
| updateChilds | 当加载更多且已经将新数据`push`到数组后，手动调用此方法，用于显示新数据，必写 |

</template>
</ContainerBox>
