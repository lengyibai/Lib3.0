# $search

<ContainerBox title="介绍">
<template #desc>
支持各种关键属性搜索、支持拼音搜索、支持拼音简写搜索、不区分大小写、支持模糊查询

如果输入框清空查询，则返回所有数据
</template>
</ContainerBox>

<ContainerBox title="基础用法">
<template #desc>

依赖于[中文转拼音](/Functions/custom/Pinyin.html)，需要在函数外加入

</template>

```js
const obj = [
  { id: 1, name: '张三', age: 20 },
  { id: 2, name: '李四', age: 24 },
  { id: 3, name: '王五', age: 24 },
  { id: 4, name: '赵六', age: 24 },
];

$search(obj, 24, ['name', 'age']);
// [{ name: '李四', age: 24 }, { name: '王五', age: 24 }, { name: '赵六', age: 24 }]

$search(obj, ['zs'], ['name', 'age']);
// [{ name: '张三', age: 20 }]

$search(obj, 'LiS', ['name', 'age']);
// [ { name: '李四', age: 24 } ]

$search(obj, ['张三', 'ww'], ['name', 'age']);
// [ { name: '张三', age: 20 }, { name: '王五', age: 24 } ]

$search(obj, 'zs-lis', ['name', 'age']);
// [ { name: '张三', age: 20 }, { name: '李四', age: 24 } ]
```

<ShowCode>
<template #codes>

```js
export function $search(data, value, keys) {
  let arr = [];

  function fn(item, key) {
    let reg = new RegExp(item, 'i');
    arr.push(
      ...data.filter((item) => {
        return reg.test($pinyin(item[key] || item[key].toString())) || reg.test(item[key]);
      })
    );
  }
  keys.forEach((key) => {
    fn(value || '', key);
  });
  return arr;
}
```

</template>
</ShowCode>
</ContainerBox>

<ContainerBox title="Params">
<template #desc>

| 参数  | 说明                                 | 类型   |
| ----- | ------------------------------------ | ------ |
| data  | 传递一个数组，里面存有对象形式的数据 | Array  |
| value | 搜索值                               | String |
| keys  | 代表搜索的属性                       | String |

</template>
</ContainerBox>

<ContainerBox title="针对 Element UI 的下拉多选进行查询">

<template #desc>
此时不需要依赖任何函数，但不支持拼音查询，况且也不可能拼音查询

如果下拉框清空查询，则需要使用`[""]`去查询，这样查询才能返回所有数据
</template>

```js
$searchMul(data, value, key);
```

```js
const obj = [
  { id: 1, name: '张三', age: 20 },
  { id: 2, name: '李四', age: 24 },
  { id: 3, name: '王五', age: 24 },
  { id: 4, name: '赵六', age: 24 },
];

console.log($searchMul(obj, ['张三', '李四'], 'name'));
// [ { name: '张三', age: 20 }, { name: '王五', age: 24 } ]
```

<ShowCode>
<template #codes>

```js
export function $searchMul(data, value, key) {
  let arr = [];

  function fn(item) {
    let reg = new RegExp(item, 'i');
    arr.push(
      ...data.filter((item) => {
        return reg.test(item[key]);
      })
    );
  }
  value.forEach((item) => {
    fn(item);
  });
  return arr;
}
```

</template>
</ShowCode>
</ContainerBox>
