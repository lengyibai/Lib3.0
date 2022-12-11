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
```

<ShowCode>
<template #codes>

```js
const $search = (data, value, keys) => {
  // 创建用于存储搜索结果的数组
  let arr = [];
  // 定义搜索函数，这个函数接收两个参数：搜索值和搜索键
  const fn = (item, key) => {
    // 使用正则表达式构造忽略大小写的搜索模式
    const reg = new RegExp(item.toString().toLowerCase(), "i");
    // 将过滤后的搜索结果添加到结果数组中
    arr.push(
      ...data.filter((item) => {
        let test = "";
        // 如果搜索的数据项的类型是数字，则直接搜索数据项
        if (typeof item[key] === "number") {
          test = item[key];
          return reg.test(test);
        }
        // 如果搜索的数据项的类型是字符串，则搜索数据项和拼音
        if (typeof item[key] === "string") {
          test = $pinyin(item[key]);
          return reg.test(test) || reg.test(item[key]);
        }
      })
    );
  };

  // 检查搜索值是否是数组
  if (Array.isArray(value)) {
    // 如果value为数组，则遍历数组的每个值并进行搜索
    value.forEach((val) => {
      // 遍历value中的每个值
      if (Array.isArray(keys)) {
        // 如果keys是数组，则遍历每个搜索键并进行搜索
        keys.map((key) => fn(val || "", key));
      } else {
        // 如果keys不是数组，则直接使用这个搜索键进行搜索
        fn(val || "", keys);
      }
    });
  } else {
    // 如果value不是数组，则直接对这个值进行搜索
    if (Array.isArray(keys)) {
      // 如果keys是数组，则遍历每个搜索键并进行搜索
      keys.map((key) => fn(value || "", key));
    } else {
      // 如果keys不是数组，则直接使用这个搜索键进行搜索
      fn(value || "", keys);
    }
  }

  // 返回搜索结果数组
  return arr;
};
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
