<template>
  <div class="TypewriterMultiple" v-typewriterMultiple>
    当前打字机支持换行，而CSS打字机通过设置step步长，只能单行显示。当前打字机原理即利用setInterval，将字符一个个追加进字符串，遇到，、。？！则会停顿750ms、250ms、1500ms、1000ms、1000ms。怎么样？是不是很智能？更多符号可自行修改源码。
  </div>
</template>
<style scoped>
.TypewriterMultiple {
  font-size: 25px;
  margin: 1em;
}
</style>
