<template>
  <div
    class="MaskGradient"
    v-maskGradient="{
      color: 'rgba(40, 100, 195, 0.75)',
      num1: '0%',
      num2: '75%',
    }"
  >
    <span>假设这是一个弹窗</span>
  </div>
</template>
<script>
export default {
  directives: {
    maskGradient: {
      mounted(el, binding) {
        const {
          color = "rgba(0, 0, 0, 0.75)",
          rotate = "0deg",
          num1 = "0%",
          num2 = "50%",
        } = binding.value || {};
        const mask = document.createElement("div");
        mask.style.cssText = `
          position: absolute;
          inset:0;
          background-image: linear-gradient(${rotate}, ${color} ${num1}, transparent ${num2});
          pointer-events: none;
        `;
        el.appendChild(mask);
      },
    },
  },
};
</script>
<style scoped>
.MaskGradient {
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 5vw;
}
span{
  z-index: 1;
}
</style>
