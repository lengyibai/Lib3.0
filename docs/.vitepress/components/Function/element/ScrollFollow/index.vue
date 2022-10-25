<template>
  <div class="demo" ref="demo">
    <div class="container">
      <div class="a" ref="a">HTML+CSS</div>
      <div class="b" ref="b">JavaScript</div>
      <div class="c" ref="c">Vue</div>
    </div>
  </div>
</template>
<script>
import ScrollFollow from "./ScrollFollow.js";
export default {
  mounted() {
    const scrollFollow = new ScrollFollow(this.$refs.demo, {
      unit: "%",
    });
    scrollFollow.setOptions({
      el: this.$refs.a,
      intoY: 0,
      endY: 300,
      intoStyle: {
        right: -100,
      },
      endStyle: {
        right: 50,
      },
    });
    scrollFollow.setOptions({
      el: this.$refs.b,
      intoY: 0,
      endY: 300,
      intoStyle: {
        left: -100,
      },
      endStyle: {
        left: 50,
      },
    });
    scrollFollow.setOptions({
      el: this.$refs.c,
      intoY: 0,
      endY: 300,
      intoStyle: {
        scale: 0,
      },
      endStyle: {
        scale: 1,
      },
    });
  },
};
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: auto;
  overscroll-behavior: contain;
  color: #fff;
  .container {
    width: 100%;
    height: 250vh;
    background-color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      position: absolute;
      top: 32.5vh;
    }
    .a,
    .b,
    .c {
      position: absolute;
      font-size: 5vw;
    }
    .a {
      right: 0;
      top: 100vh;
    }
    .b {
      left: 0;
      top: 150vh;
    }
    .c {
      top: 205vh;
    }
  }
}
</style>
