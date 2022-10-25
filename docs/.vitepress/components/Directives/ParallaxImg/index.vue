<template>
  <div class="ParallaxImg">
    <img v-parallaxBg src="./img/bg.png" />
  </div>
</template>
<script>
export default {
  directives: {
    parallaxBg: {
      mounted(el) {
        el.style.cssText = `
          position: absolute;
          pointer-events: none;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          object-fit: cover;
          transition: all 0.25s ease-out;
        `;
        /* 灵敏度三级 */
        const size = [
          [15, 1.1],
          [10, 1.225],
          [5, 1.35],
        ];
        // 当前灵敏度为中等
        const multiple = size[1][0];
        function transformElement(x, y) {
          let box = el.getBoundingClientRect();
          let calcY = (box.height / 2 - (y - box.y)) / multiple;
          let calcX = (box.width / 2 - (x - box.x)) / multiple;
          el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(${size[1][1]})`;
        }
        el.parentElement.addEventListener("mousemove", (e) => {
          requestAnimationFrame(function () {
            transformElement(e.clientX, e.clientY);
          });
        });
      },
    },
  },
};
</script>
<style scoped>
.ParallaxImg {
  position: relative;
  width: 100%;

  height: 50vh;
  overflow: hidden;
}
</style>
