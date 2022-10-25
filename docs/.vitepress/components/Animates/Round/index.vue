<template>
  <div class="demo">
    <transition name="round">
      <div class="Round" v-show="show">
        <transition name="fade">
          <div class="box" v-show="box_show">
            <h1>Hello World!</h1>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      box_show: false,
    };
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.box_show = true;
    }, 500);

    setInterval(() => {
      this.show = !this.show;
      setTimeout(() => {
        this.box_show = !this.box_show;
      }, 500);
    }, 2000);
  },
};
</script>
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  .Round {
    .flex();
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;
    .box {
      .flex();
      h1 {
        font-size: 5vw;
        color: #fff;
      }
    }
  }
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}

.round-enter-active {
  animation: round-in 1s;
}
.round-leave-active {
  animation: round-out 1s;
}
@keyframes round-in {
  0% {
    clip-path: circle(0% at 50% 50%);
  }

  100% {
    clip-path: circle(100% at 50% 50%);
  }
}
@keyframes round-out {
  0% {
    clip-path: circle(100% at 50% 50%);
  }
  100% {
    clip-path: circle(0% at 50% 50%);
  }
}
</style>
