<template>
  <div class="LibScrollInto" ref="LibScrollInto" @scroll="scroll">
    <slot></slot>
  </div>
</template>
<script setup>
import { nextTick, onMounted, ref, useSlots } from 'vue';
import animates from './animate';

const props = defineProps({
  animate: {
    type: Object,
    default() {
      return {
        name: '',
        into: 0,
        time: 0,
      };
    },
  },
  once: {
    type: Boolean,
    default: false,
  },
});

let LibScrollInto = ref();
let children_animate = ref([]); //动画属性组
let parent = ref([]);
let children = ref([]);
let scrollAnimate = null;
const load_finish = ref(false);

const v_node = [];
onMounted(() => {
  const $slots = useSlots().default();

  setTimeout(() => {
    parent.value = [...LibScrollInto.value.children].filter((item, index) => {
      if (item.className === 'IntoBox') {
        v_node.push($slots[index]);
      }
      return item.className === 'IntoBox';
    });

    /* 获取要设置动画的元素 */
    /* 子组件 */
    children = parent.value.map((item) => {
      return item.children[0];
    });

    // /* 子组件动画属性 */
    children_animate = parent.value.map((item,index) => {
      console.log(v_node[index].el);
      return {
        ...item.__vueParentComponent.props.animate,
        name:
          typeof item.__vueParentComponent.props.animate?.name === 'function'
            ? item.__vueParentComponent.props.animate.name
            : item.__vueParentComponent.props.animate && animates[item.__vueParentComponent.props.animate.name],
      };
    });
    load_finish.value = true;

    scrollAnimate = scrollRepeat;
    /* 只播放一次 */
    if (!props.once) return;
    scrollAnimate = scrollOnce;
    const animate = {
      name: animates[props.animate.name],
      names: children_animate,
    };
    children.forEach((item, index) => {
      item.style.opacity = '0';
      animate.name(item);
      if (animate.names[index].name) {
        animate.names[index].name(item);
      }
    });
  }, 100);
});

const scroll = (e) => {
  if (!load_finish.value) return;
  scrollAnimate({
    father: e.target,
    el: parent.value,
    son: children,
    into: props.animate.into,
    time: props.animate.time,
    animate: {
      name: animates[props.animate.name],
      names: children_animate,
    },
  });
};

</script>
<style scoped>
.LibScrollInto {
  height: 100%;
  overflow: auto;
  overscroll-behavior: contain;
}
</style>
