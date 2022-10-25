# $chromeV

<ContainerBox title="介绍">
<template #desc>
判断用户浏览器到没达到要求的版本，没达到让他升级
</template>
</ContainerBox>

<ContainerBox title="基础用法">

```js
$chromeV();
```

<ShowCode>
<template #codes>

```js
export function $chromeV() {
  let v = '';
  navigator.userAgent.split(' ').forEach((item) => {
    /chrome/i.test(item) && (v = item);
  });
  return Number(v.split('/')[1].split('.')[0]);
}
```

</template>
</ShowCode>
</ContainerBox>
