<template>
  <div class="demo">
    <transition name="deploy">
      <div class="Deploy" v-show="show">
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
    }, 1500);

    setInterval(() => {
      this.show = !this.show;
      setTimeout(() => {
        this.box_show = !this.box_show;
      }, 1500);
    }, 3000);
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
  .Deploy {
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

.deploy-enter-active {
  animation: deploy-in 1.5s;
}

.deploy-leave-active {
  animation: deploy-out 1.5s;
}

@keyframes deploy-in {
  0% {
    clip-path: polygon(
      50% 50%,
      100% 100%,
      50% 50%,
      100% 0,
      50% 50%,
      0 0,
      50% 50%,
      0 100%
    );
  }
  33% {
    clip-path: polygon(
      50% 0,
      100% 100%,
      0 50%,
      100% 0,
      50% 100%,
      0 0,
      100% 50%,
      0 100%
    );
  }
  66% {
    clip-path: polygon(
      50% 0,
      100% 100%,
      0 50%,
      0 100%,
      50% 100%,
      0 0,
      100% 50%,
      100% 0
    );
  }
  100% {
    clip-path: polygon(
      50% 0,
      0 0,
      0 50%,
      0 100%,
      50% 100%,
      100% 100%,
      100% 50%,
      100% 0
    );
  }
}

@keyframes deploy-out {
  0% {
    clip-path: polygon(
      50% 0,
      0 0,
      0 50%,
      0 100%,
      50% 100%,
      100% 100%,
      100% 50%,
      100% 0
    );
  }
  33% {
    clip-path: polygon(
      50% 0,
      100% 100%,
      0 50%,
      0 100%,
      50% 100%,
      0 0,
      100% 50%,
      100% 0
    );
  }
  66% {
    clip-path: polygon(
      50% 0,
      100% 100%,
      0 50%,
      100% 0,
      50% 100%,
      0 0,
      100% 50%,
      0 100%
    );
  }
  100% {
    clip-path: polygon(
      50% 50%,
      100% 100%,
      50% 50%,
      100% 0,
      50% 50%,
      0 0,
      50% 50%,
      0 100%
    );
  }
}
</style>
