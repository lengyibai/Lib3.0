# $throttle

<ContainerBox title="介绍">
<template #desc>
不管流得再猛，也必须给我限速

使用方法与 [防抖](/Functions/custom/Debounce.html) 一致
</template>
</ContainerBox>

<ContainerBox title="节流（延迟执行）">
<ShowCode>
<template #codes>

```js
export function $throttleDelay(() => {
  let timer;
  return function (fn, delay) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn();
      }, delay);
    }
  };
})();
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="节流（立即执行）">
<ShowCode>
<template #codes>

```js
export function $throttleInstant(() => {
  let last = 0;
  return (callback, wait = 800) => {
    let now = +new Date();
    if (now - last > wait) {
      callback();
      last = now;
    }
  };
})();
```

</template>
</ShowCode>
</ContainerBox>
