# $debounce

<ContainerBox title="介绍">
<template #desc>
不管抖得再快，也只会触发立即执行或者延迟执行的一次
</template>
</ContainerBox>

<ContainerBox title="防抖（延迟执行）">
<ShowCode>
<template #codes>

```js
export function $debounceDelay(() => {
  let timer = null;
  return (callback, wait = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="防抖（立即执行）">
<ShowCode>
<template #codes>

```js
export function $debounceInstant(() => {
  let timer;
  return function (fn, delay) {
    let context = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    let callNow = !timer;
    timer = setTimeout(() => {
      timer = null;
    }, delay);
    if (callNow) fn.apply(context, args);
  };
})();
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="使用方法">

<template #desc>
直接调用
</template>

```js
setInterval(
  $debounce(() => {
    console.log(666);
  }, 1000),
  100
);
```

</ContainerBox>
