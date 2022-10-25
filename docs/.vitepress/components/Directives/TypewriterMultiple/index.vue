<template>
  <div class="TypewriterMultiple" v-typewriterMultiple>
    这里是冷弋白，当前打字机支持换行，而CSS打字机通过设置step步长，只能单行显示。当前打字机原理即利用setInterval，将字符一个个追加进字符串，遇到，、。？！则会停顿750ms、250ms、1500ms、1000ms、1000ms。怎么样？是不是很智能？更多符号可自行修改源码。
  </div>
</template>
<script>
export default {
  directives: {
    typewriterMultiple: {
      mounted(el) {
        let say = el.innerHTML;
        el.innerHTML = "";
        setTimeout(() => {
          let timer;
          let num = 0, //用于累加遍历字符串
            text = ""; //用于输出在屏幕上
          fn();
          function fn() {
            timer = setInterval(() => {
              text += say[num]; //遍历输出的文字
              el.innerHTML = text; //输出在屏幕上
              if ("，、。？！".includes(say[num])) {
                clearInterval(timer); //清除用于输出文字的计时器
                setTimeout(
                  () => {
                    fn();
                  },
                  "，" === say[num]
                    ? 750
                    : "、" === say[num]
                    ? 250
                    : "。" === say[num]
                    ? 1500
                    : "？！".includes(say[num])
                    ? 1000
                    : 750
                );
              }
              num++;
              if (num == say.length) {
                //如果文字输出完毕
                clearInterval(timer); //清除用于输出文字的计时器
              }
            }, 100);
          }
        }, 750);
      },
    },
  },
};
</script>
<style scoped>
.TypewriterMultiple {
  font-size: 18px;
  margin: 1em;
}
</style>
