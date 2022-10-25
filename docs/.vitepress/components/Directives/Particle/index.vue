<template>
  <component :is="BtnLogin" v-particle></component>
</template>
<script>
let particle_timer = null;
function $random(min, max, num = 0) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(num));
}
export default {
  data() {
    return {
      BtnLogin: null,
    };
  },
  directives: {
    particle: {
      mounted(el, binding) {
        const box = el;
        let {
          color = "#cfb45c",
          size = 10,
        } = binding.value || {};
        el.style.transition = "all 0.25s";
        const style = `
          position: absolute;
          background-color: ${color};
          pointer-events: none;
          width: ${size}px;
          height: ${size}px;
          bottom:0;
          box-shadow: 0 0 10px 0 ${color};
        `;
        const box_width = box.offsetWidth;
        const box_height = box.offsetHeight;

        particle_timer = setInterval(() => {
          const left = $random(0, box_width - size),
            top = $random(box_height / 2, box_height),
            scale = $random(0.25, 0.75, 1),
            time = $random(0.5, 2, 1),
            c = document.createElement("span");
          c.style.cssText = style;
          c.style.left = left + "px";
          c.style.transform = `scale(${scale})`;
          c.style.transition = `all ${time}s linear`;
          box.appendChild(c);
          setTimeout(() => {
            c.style.bottom = top / 1.5 + "px";
            setTimeout(() => {
              c.style.transition = `all ${time / 4}s linear`;
              c.style.opacity = 0;
            }, time * 1000 - (time * 1000) / 4);
            setTimeout(() => {
              c.remove();
            }, time * 1000);
          }, 50);
        }, 50);
      },
      unbind() {
        clearInterval(particle_timer);
      },
    },
  },
  mounted() {
    import("./BtnLogin").then((module) => {
      this.BtnLogin = module.default;
    });
  },
};
</script>
