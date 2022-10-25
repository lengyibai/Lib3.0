<template>
  <div class="SweepLight" v-sweepLight="{ auto: false }"></div>
</template>
<style scoped>
.SweepLight {
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  background: url('http://lengyibai.gitee.io/img-bed/img/lib.png') no-repeat center center;
  background-size: cover;
  clip-path: circle(50% at 50% 50%);
}
</style>
