<template>
  <div class="SweepLight" v-sweepLight></div>
</template>
<script>
export default {
  directives: {
    sweepLight: {
      mounted(el, { value }) {
        setTimeout(() => {
          const light = document.createElement("div");
          el.style.position = "relative";
          light.style.cssText = `
          position: absolute;
          top: 0px;
          left: 0px;
          width: ${el.offsetWidth / 5}px;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.25);
          transform: skewX(45deg) translateX(${el.offsetWidth * 1.25}px);
          transition: all 1s;
          filter: blur(5px)
        `;
          el.appendChild(light);
          if (value) {
            light.style.transitionDelay = ` ${value}s`;
            light.style.transform = `skewX(45deg) translateX(${-el.offsetWidth * 1.25}px)`;
          } else {
            el.addEventListener("mouseenter", () => {
              light.style.transform = `skewX(45deg) translateX(${-el.offsetWidth / 1.5}px)`;
            });

            el.addEventListener("mouseleave", () => {
              light.style.transform = `skewX(45deg) translateX(${el.offsetWidth * 1.25}px)`;
            });
          }
        });
      },
    },
  },
};
</script>
<style scoped>
.SweepLight {
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  background: url("/lib-components/lib.png") no-repeat center center;
  background-size: cover;
}
</style>
