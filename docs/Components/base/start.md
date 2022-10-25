# 快速上手

<ContainerBox title="介绍">
<template #desc>

通过本章节你可以了解到`Lib`的安装方法和基本使用姿势
</template>
</ContainerBox>

## 完整引入

<ContainerBox title="通过下载组件库">
<template #desc>

[下载组件库](https://gitee.com/lengyibai/lib3-component-packages/raw/master/lib-components.zip)
将下载的文件解压到项目内

在`main.js`引入并使用`compontents/common/lib-components/index`文件

```js
// main.js

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import LibComponents from '@/components/LibComponents/index.js';

app.use(LibComponents).mount('#app');
```

</template>
</ContainerBox>

## 按需引入

<ContainerBox title="通过下载组件包及当前组件的所有案例">
<template #desc>

每个组件文档下都会提供该组件的组件包，下载后按照下面操作使用即可

1. 在项目内创建一个文件夹`src/components/common/lib-components`

2. 将下载的`组件包`解压到`lib-components`文件夹，如解压`LibRange`组件，目录结构是这样的：`lib-components/LibRange/index.vue`

3. 在`lib-components`下创建`index.js`文件，用于遍历组件文件夹自动全局注册组件

```js
//index.js

import { defineAsyncComponent } from 'vue';

const components = import.meta.glob('./**/*.vue');
export default function install(app) {
  Object.entries(components).forEach(([key, value]) => {
    const name = key.replace(/\/index.vue/g, '');
    if (name.includes('childComp')) return;
    const _name = name.slice(name.lastIndexOf('/') + 1);
    if (_name.includes('demo') || _name.includes('.vue')) return;
    app.component(_name, defineAsyncComponent(value));
  });
}
```

4. 在`main.js`引入并使用`compontents/common/lib-components/index`文件

```js
//main.js

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import LibComponents from '@/components/LibComponents/index.js';

app.use(LibComponents).mount('#app');
```

</template>
</ContainerBox>

::: tip
当做完上面的操作，以后直接将组件解压至`src/components/common/lib-components`即可,

直接[使用组件](/Components/base/start.html#使用组件)，无需再做其他的引入操作，已经为你自动注册了组件

:::

## 使用组件

<ContainerBox title="采用大驼峰命名组件">
<template #desc>

所有组件都需要加上前缀`Lib`

```vue
<LibMaskClose />

<!-- or -->

<LibMaskClose></LibMaskClose>
```

</template>
</ContainerBox>
