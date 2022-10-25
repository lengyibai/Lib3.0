<template>
  <div class="DownDrag" v-downDrag>
    这里可以拖动
    <div class="content" @mousedown.stop>这个区域拖动不了</div>
  </div>
</template>
<script>
export default {
  directives: {
    downDrag: {
      mounted(el) {
        el.style.cursor = "move";
        let x = 0,
          y = 0,
          startX = 0,
          startY = 0,
          moveX = 0,
          moveY = 0;
        el.addEventListener("mousedown", (e) => {
          e.stopPropagation();
          x = e.pageX;
          y = e.pageY;
          startX = el.offsetLeft;
          startY = el.offsetTop;
          window.addEventListener("mousemove", fn);
          function fn(e) {
            requestAnimationFrame(function () {
              moveX = e.pageX - x;
              moveY = e.pageY - y;
              el.style.left = `${moveX + startX}px`;
              el.style.top = `${moveY + startY}px`;
            });
          }
          window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", fn);
          });
        });
      },
    },
  },
};
</script>
<style scoped>
.DownDrag {
  position: absolute;
  width: 25vw;
  height: 25vw;
  background-color: #000;
  font-size: 2vw;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;
  user-select: none;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  background-color: #1a1a1a;
  cursor: initial;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
