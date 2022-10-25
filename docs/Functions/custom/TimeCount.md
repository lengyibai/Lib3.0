# $timeCount

<ContainerBox title="介绍">
<template #desc>
一般记录网站已运行时间和倒计时
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>
如果是未来时间，将返回倒计时，如果是过去时间，则返回已过去时间

当前打印的是此文件的最后修改时间和指定时间的相差
</template>

```js
setInterval(() => {
  console.log($timeCount('2022-01-01 00:00:00')); // { y: '00', mon: '08', d: '25', h: '23', min: '53', s: '35' }
}, 1000);
```

<ShowCode>
<template #codes>

```js
export function $timeCount(time = '2022-04-01 10:45:00') {
  let now = new Date(time).getTime(),
    future = new Date().getTime(),
    times = future - now > 0 ? Math.floor((future - now) / 1000) : Math.floor((now - future) / 1000);

  const time_arr = [
    {
      y: times / 60 / 60 / 24 / 30 / 12,
    },
    {
      mon: (times / 60 / 60 / 24 / 30) % 12,
    },
    {
      d: (times / 60 / 60 / 24) % 30,
    },
    {
      h: (times / 60 / 60) % 24,
    },
    {
      min: (times / 60) % 60,
    },
    {
      s: times % 60,
    },
  ];
  let timeObj = {};
  time_arr.forEach((item) => {
    const arr = Object.entries(item)[0];
    const key = arr[0];
    const value = arr[1];
    item[key] = Math.floor(value).toString().padStart(2, '0');
    Object.assign(timeObj, item);
  });
  return timeObj;
}
```

</template>
</ShowCode>
</ContainerBox>
