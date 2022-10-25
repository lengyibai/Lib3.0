<script setup>
  import ScrollParallax from './Components/ScrollParallax/index.vue'
</script>

# ScrollParallax

<ContainerBox title="介绍">
<template #desc>

类似`iPhone`官网滚动动画效果

原理：获取整个滚动盒子的高度，计算出鼠标滚完整个盒子的百分比，通过百分比来控制动画，
拓展了一下，可以设置某个区间，当滚动到这个区间，则开始计算这个区间的百分比，由此可控制这个区间的元素动画
</template>
</ContainerBox>

<ContainerBox title="下载所需文件">

<template #desc>

[ScrollFollow.zip](https://gitee.com/lengyibai/lib3-component-packages/raw/master/utils/ScrollParallax.zip)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<template #desc>

在下面缓慢滚动

</template>
<div class="demoBox">
<ScrollParallax />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <div class="LibScrollParallax" ref="LibScrollParallax" @scroll="ScrollParallaxcallback">
    <div class="FollowBox" ref="FollowBox">
      <div class="sticky">
        <div class="a" ref="a"></div>
        <div class="b" ref="b"></div>
        <div class="c" ref="c">by lengyibai</div>
        <div class="d" ref="d">Hello World!</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ScrollParallax from './ScrollParallax.js';

const a = ref();
const b = ref();
const c = ref();
const d = ref();

const ScrollParallaxcallback = (e: Event | number) => {
  let v: Event | number = 0;
  if (typeof e !== 'number') {
    v = (e.target as HTMLInputElement).scrollTop;
  }
  /* 名 */
  ScrollParallax(v, d.value, [
    [
      0,
      500,
      (v: number) => {
        return {
          opacity: v,
        };
      },
    ],
    [
      500,
      2000,
      (v: number) => {
        return {
          opacity: 1 - v,
        };
      },
    ],
  ]);
  /* 房间 */
  ScrollParallax(v, a.value, [
    /* 1000-1500：渐显 */
    [
      1000,
      1500,
      (v: number) => {
        return {
          opacity: v,
          transform: 'scale(4)',
          filter: '',
        };
      },
    ],
    /* 1500-2000：逐渐缩小到两倍大小 */
    [
      1500,
      2000,
      (v: number) => {
        return {
          transform: `scale(${4 - 2 * v})`,
          filter: '',
          opacity: 1,
        };
      },
    ],
    /* 2000-3000：逐渐缩小到两倍大小，并变得模糊 */
    [
      2000,
      3000,
      (v: number) => {
        return {
          transform: `scale(${2 - 1 * v})`,
          filter: `blur(${7.5 * v}px)`,
          opacity: 1,
        };
      },
    ],
    /* 3500-4000：逐渐缩小到两倍大小 */
    [
      3500,
      4000,
      (v: number) => {
        return {
          transform: `scale(1)`,
          filter: `blur(7.5px)`,
          opacity: 1 - v,
        };
      },
    ],
  ]);
  /* 书 */
  ScrollParallax(v, b.value, [
    [
      2000,
      3000,
      (v: number) => {
        return {
          transform: `translateY(${50 - 50 * v}%) scale(${2 - 1 * v})`,
          opacity: v,
        };
      },
    ],
    [
      3500,
      4000,
      (v: number) => {
        return {
          transform: '',
          opacity: `${1 - v}`,
        };
      },
    ],
  ]);

  /* 名 */
  ScrollParallax(v, c.value, [
    [
      4000,
      4250,
      (v: number) => {
        return {
          transform: `translateY(${100 - 100 * v}px)`,
          opacity: v,
        };
      },
    ],
  ]);
};

onMounted(() => {
  ScrollParallaxcallback(0); //初始化
});
</script>
<style scoped lang="less">
* {
  transition: all 0.25s ease-out;
}
*::-webkit-scrollbar {
  //display: none;
}
.LibScrollParallax {
  position: relative;
  @height: 50vh;
  width: 100%;
  height: @height;
  overscroll-behavior: contain;
  overflow: hidden auto;
  background-color: #1a1a1a;
  .FollowBox {
    width: 100%;
    height: calc(4250px + @height);
    .sticky {
      position: sticky;
      top: 0;
      width: 100%;
      height: @height;
      .a {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url('./img/room.png') no-repeat center center;
        background-size: cover;
      }
      .b {
        position: absolute;
        width: 100%;
        height: 75%;
        bottom: 0;
        background: url('./img/book.png') no-repeat center center;
        background-size: cover;
      }
      .c,
      .d {
        position: absolute;
        font-size: 5vw;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
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

<ContainerBox title="methods">

<template #desc>

| 函数                   | 说明                                                                                                                                                                                                                                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ScrollParallaxcallback | 滚动实时触发，传递的是当前父元素实时滚动的坐标                                                                                                                                                                                                                                                                                      |
| ScrollParallax         | 第一参数：传递滚动坐标<br />第二参数：跟随滚动播放动画的元素<br />第三参数：区间，一共有三个数组元素，一二元素为滚动到某个范围触发，产生该区间的滚动进度，第三元素为触发函数，样式写在此处，回调参数为当前区间的`0-1`的滚动进度<br />注：在某个区间内使用的样式，在其他区间也必须使用，避免区间之间的样式污染，详细请看该函数的代码 |

</template>
</ContainerBox>

```

```
