<template>
  <div class="TextHoverColor">
    <span v-textHoverColor="'black'">冷弋白</span>
  </div>
</template>
<script>
export default {
  directives: {
    textHoverColor: {
      mounted(el, { value = "black" }) {
        // 需要给父盒子加相对定位或绝对定位
        const mask = document.createElement("div");
        const line = document.createElement("div");
        console.log();
        mask.innerHTML = el.innerHTML;
        mask.style.cssText = `
          z-index: 9;
          position: absolute;
          top: 0;
          left: 0;
          color: transparent;
          background-color: ${value};
          transition: all 0.35s;
          -webkit-background-clip: text;
          clip-path: circle(75% at 50% 50%);
        `;
        const line_height = el.offsetHeight / 20;
        line.style.cssText = `
          z-index: 9;
          position: absolute;
          width: 0%;
          height: ${line_height}px;
          bottom: 0;
          color: transparent;
          background-color: #2980b9;
          transition: all 0.35s;
          left: 50%;
          transform: translateX(-50%);
          border-radius: ${line_height}px;
        `;
        window.addEventListener("resize", () => {
          const line_height = el.offsetHeight / 20;
          line.style.height = line_height + "px";
          line.style.borderRadius = line_height + "px";
        });

        el.appendChild(mask);
        el.appendChild(line);
        el.addEventListener("mouseenter", () => {
          mask.style.clipPath = "circle(0% at 50% 50%)";
          line.style.width = "100%";
        });
        el.addEventListener("mouseleave", () => {
          mask.style.clipPath = "circle(75% at 50% 50%)";
          line.style.width = "0%";
        });
      },
    },
  },
};
</script>
<style scoped>
.TextHoverColor {
  position: relative;
  font-size: 10vw;
  color: #2980b9;
  cursor: pointer;
  user-select: none;
  -webkit-box-reflect: below -10px linear-gradient(transparent, transparent 1%, rgba(0, 0, 0, 0.25));
}
</style>
