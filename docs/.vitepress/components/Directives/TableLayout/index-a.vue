<template>
  <table class="table" v-tableLayout="['right', 'left']">
    <tr>
      <td>QQ：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>密码：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>手机号：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>家庭住址：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>大学：</td>
      <td><input type="text" /></td>
    </tr>
    <tr>
      <td>身份证号：</td>
      <td><input type="text" /></td>
    </tr>
  </table>
</template>
<script>
export default {
  directives: {
    tableLayout: {
      mounted(el, { value }) {
        el.style.cssText = `
          border-collapse: collapse;
        `;
        [...el.querySelectorAll("td")].forEach((item, index) => {
          item.style.wordBreak = "break-all";
          item.style.textAlign = index % 2 ? value[1] : value[0];
        });
      },
    },
  },
};
</script>
<style scoped lang="less">
.table {
  width: 300px;
  border-collapse: collapse;
  td {
    padding: 0 !important;
    input {
      border: none !important;
      border-bottom: 1px solid #000 !important;
    }
  }
}

tr {
  background-color: transparent;
  border: none;
}
</style>
