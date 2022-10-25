<template>
  <div class="WaveDiffuse" v-waveDiffuse="'black'"></div>
</template>
<script>
export default {
  directives: {
    waveDiffuse: {
      mounted(el, { value = "rgba(0, 0, 0, 0.5)" }) {
        el.style.cssText = `
    overflow: hidden;
    `;
        const style = `
      position: absolute;
      background-color: ${value};
      transform: translate(-50%, -50%);
      pointer-events: none;
      border-radius: 50%;
      width: 0;
      height: 0;
      transition: all 1s linear;
      `;
        el.addEventListener("mousedown", function (e) {
          console.log("点击了");
          const c = document.createElement("span");
          c.style.cssText = style;
          const x = e.clientX - e.target.getBoundingClientRect().left;
          const y = e.clientY - e.target.getBoundingClientRect().top;
          c.style.left = x + "px";
          c.style.top = y + "px";
          this.appendChild(c);
          const width = e.target.offsetWidth;
          const height = e.target.offsetHeight;
          const size = width > height ? width : height;
          c.style.width = `${size * 4}px`;
          c.style.height = `${size * 4}px`;
          function fn() {
            c.style.opacity = 0;
            setTimeout(() => {
              c.remove();
            }, 1000);
          }
          el.addEventListener("mouseup", fn);
          el.addEventListener("mouseleave", fn);
        });
      },
    },
  },
};
</script>
<style scoped lang="less">
.WaveDiffuse {
  position: relative; //必须加定位
  width: 100%;
  height: 35vw;
  border: 3px solid #000;
}
</style>
