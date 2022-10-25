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
