<template>
  <div class="LibScrollParallax" ref="LibScrollParallax" @scroll="ScrollParallaxcallback($event.target.scrollTop)">
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
<script>
import ScrollParallax from "./ScrollParallax.js";
export default {
  mounted() {
    this.ScrollParallaxcallback(0); //初始化
  },
  methods: {
    ScrollParallaxcallback(v) {
      this.offset = v;
      //#####··········名··········#####//
      ScrollParallax(v, this.$refs.d, [
        [
          0,
          500,
          (v) => {
            return {
              opacity: v,
            };
          },
        ],
        [
          500,
          2000,
          (v) => {
            return {
              opacity: 1 - v,
            };
          },
        ],
      ]);
      //#####··········房间··········#####//
      ScrollParallax(v, this.$refs.a, [
        /* 1000-1500：渐显 */
        [
          1000,
          1500,
          (v) => {
            return {
              opacity: v,
              transform: "scale(4)",
              filter: "",
            };
          },
        ],
        /* 1500-2000：逐渐缩小到两倍大小 */
        [
          1500,
          2000,
          (v) => {
            return {
              transform: `scale(${4 - 2 * v})`,
              filter: "",
              opacity: 1,
            };
          },
        ],
        /* 2000-3000：逐渐缩小到两倍大小，并变得模糊 */
        [
          2000,
          3000,
          (v) => {
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
          (v) => {
            return {
              transform: `scale(1)`,
              filter: `blur(7.5px)`,
              opacity: 1 - v,
            };
          },
        ],
      ]);
      //#####··········书··········#####//
      ScrollParallax(v, this.$refs.b, [
        [
          2000,
          3000,
          (v) => {
            return {
              transform: `translateY(${50 - 50 * v}%) scale(${2 - 1 * v})`,
              opacity: v,
            };
          },
        ],
        [
          3500,
          4000,
          (v) => {
            return {
              transform: "",
              opacity: `${1 - v}`,
            };
          },
        ],
      ]);

      //#####··········名··········#####//
      ScrollParallax(v, this.$refs.c, [
        [
          4000,
          4250,
          (v) => {
            return {
              transform: `translateY(${100 - 100 * v}px)`,
              opacity: v,
            };
          },
        ],
      ]);
    },
  },
};
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
        background: url("./img/room.png") no-repeat center center;
        background-size: cover;
      }
      .b {
        position: absolute;
        width: 100%;
        height: 75%;
        bottom: 0;
        background: url("./img/book.png") no-repeat center center;
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
