<template>
  <div class="DownDrag" v-dragFile="dragFile">
    <span>将文件拖动到此处解析</span>
    <div class="list" v-for="(item, index) in fileList" :key="index">
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  directives: {
    dragFile: {
      mounted(el, { value }) {
        el.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
        el.addEventListener("drop", (e) => {
          e.preventDefault();
          let file = [...e.dataTransfer.items].map((item) => {
            if (item.kind === "file") {
              return item.getAsFile();
            }
          });
          value(file);
        });
      },
    },
  },
  methods: {
    dragFile(file) {
      console.log(file);
      this.fileList = file.map((item) => {
        return item.name;
      });
    },
  },
};
</script>
<style scoped>
.DownDrag {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
  border: 0.35vw dashed #000;
  font-size: 3vw;
}
.list {
  font-size: 2.5vw;
}
</style>
