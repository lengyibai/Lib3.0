<template>
  <div class="demo">
    <transition name="spin">
      <div class="Spin" v-show="show">
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
    }, 1000);

    setInterval(() => {
      this.show = !this.show;
      setTimeout(() => {
        this.box_show = !this.box_show;
      }, 1000);
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
  .Spin {
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

.spin-enter-active {
  animation: spin-in 1s linear;
}
.spin-leave-active {
  animation: spin-out 1s linear;
}
@keyframes spin-in {
  0% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0, 50% 50%);
  }
  25% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 100% 0, 100% 0, 50% 50%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 50% 50%);
  }
  75% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 50% 50%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 50%);
  }
}
@keyframes spin-out {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 50%);
  }
  25% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 50% 50%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%, 50% 50%);
  }
  75% {
    clip-path: polygon(0 0, 100% 0, 100% 0, 100% 0, 100% 0, 50% 50%);
  }
  100% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0, 0 0, 50% 50%);
  }
}
</style>
