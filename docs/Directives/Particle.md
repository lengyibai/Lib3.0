<script setup>
  import Particle from './Components/Particle/index.vue'
</script>

# Particle

<ContainerBox title="介绍">
<template #desc>

灵感来自`王者荣耀`粒子背景
</template>
</ContainerBox>

<ContainerBox title="使用">

<template #desc>

引入参考 [准备工作](/Directives/base/start.html#准备工作)

</template>
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Particle />
</div>

<ShowCode>
<template #codes>

```vue
<template>
  <BtnLogin v-particle></BtnLogin>
</template>
<script setup>
import BtnLogin from './BtnLogin/index.vue';
</script>
```

</template>
</ShowCode>

<ShowCode iskey>
<template #codes>

```js
let particle_timer: any = null;
function $random(min = 0, max = 1, num = 0) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(num));
}
const particle = {
  mounted(el: HTMLElement, binding) {
    const box = el;
    let { color = '#cfb45c', size = 10 } = binding.value || {};
    el.style.transition = 'all 0.25s';
    const style = `
      position: absolute;
      background-color: ${color};
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      bottom:0;
      box-shadow: 0 0 10px 0 ${color};
    `;
    const box_width = box.offsetWidth;
    const box_height = box.offsetHeight;

    particle_timer = setInterval(() => {
      const left = $random(0, box_width - size),
        top = $random(box_height / 2, box_height),
        scale = $random(0.25, 0.75, 1),
        time = $random(0.5, 2, 1),
        c = document.createElement('span');
      c.style.cssText = style;
      c.style.left = left + 'px';
      c.style.transform = `scale(${scale})`;
      c.style.transition = `all ${time}s linear`;
      box.appendChild(c);
      setTimeout(() => {
        c.style.bottom = top / 1.5 + 'px';
        setTimeout(() => {
          c.style.transition = `all ${time / 4}s linear`;
          c.style.opacity = '0';
        }, time * 1000 - (time * 1000) / 4);
        setTimeout(() => {
          c.remove();
        }, time * 1000);
      }, 50);
    }, 50);
  },
  beforeUnmount() {
    clearInterval(particle_timer);
  },
};
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="value">

<template #desc>

| 说明                                                         | 类型   | 默认值                                           |
| ------------------------------------------------------------ | ------ | ------------------------------------------------ |
| {<br />color = 粒子颜色,<br />size = 粒子大小，单位`px`<br />} | Object | {<br />color = "#cfb45c",<br />size = 10,<br />} |

</template>
</ContainerBox>
