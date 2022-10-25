<template>
  <div class="demo">
    <transition name="burqas">
      <div class="Burqas" v-show="show">
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
  .Burqas {
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

.burqas-enter-active {
  animation: burqas-in 1s;
}

.burqas-leave-active {
  animation: burqas-out 1s;
}

@keyframes burqas-in {
  0% {
    clip-path: polygon(0 0, 0 100%, 0 50%, 0 100%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 0 50%, 0% 100%);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}

@keyframes burqas-out {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 50%);
  }
  100% {
    clip-path: polygon(100% 100%, 100% 0, 100% 100%, 100% 50%);
  }
}
</style>
