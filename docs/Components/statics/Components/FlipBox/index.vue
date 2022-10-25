<template>
  <div class="LibFlipBox">
    <div class="card-side card-side-front" :style="{ transitionDuration: duration + 'ms' }">
      <slot name="front">正面</slot>
    </div>
    <div class="card-side card-side-back" :style="{ transitionDuration: duration + 'ms' }">
      <slot name="back">反面</slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  duration?: number;
}
withDefaults(defineProps<Props>(), {
  duration: 500,
});
</script>
<style scoped lang="less">
.LibFlipBox {
  position: relative;
  height: 100%;
  width: 100%;
  perspective: 1000px;
  &:hover .card-side-front {
    transform: rotateY(-180deg);
  }
  &:hover .card-side-back {
    transform: rotateY(0deg);
  }

  .card-side {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    transition: all ease;
    backface-visibility: hidden;
  }

  .card-side-back {
    transform: rotateY(180deg);
  }
}
</style>
