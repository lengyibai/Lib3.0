# $fmtNum

<ContainerBox title="介绍">
<template #desc>
慕名而来
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>

```js
$fmtNum(1000); //1,000
```

</template>

<ShowCode>
<template #codes>

```js
export function $fmtNum(num) {
  const str = num.toString();
  const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, '$1,');
}
```

</template>
</ShowCode>
</ContainerBox>
