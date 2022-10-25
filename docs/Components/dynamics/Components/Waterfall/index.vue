<template>
  <div class="Waterfall" ref="Waterfall">
    <slot></slot>
  </div>
</template>
<script>
import waterFullLayout from './Waterfall.js';
export default {
  name: 'Waterfall',
  props: {
    count: {
      type: Number,
      default: 2,
    },
    gap: {
      type: Number,
      default: 10,
    },
    loadHeight: {
      type: Number,
      default: 100,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      childs: [],
      parent: null,
      isLoadMore: true,
    };
  },
  mounted() {
    this.parent = this.$refs.Waterfall;

    this.updateChilds();
    this.parent.parentElement.addEventListener('scroll', (e) => {
      let d = Math.abs(e.target.scrollTop - e.target.scrollHeight + e.target.clientHeight);

      /* 当到达底部显示正在加载 */
      if (d <= 0) {
        this.$emit('update:loading', true);
      }

      if (d <= this.loadHeight && this.isLoadMore) {
        this.$emit('load-more');
        this.isLoadMore = false;
      } else if (d > this.loadHeight) {
        this.isLoadMore = true;
      }

      this.$emit('scroll', e.target.scrollTop);
    });
  },
  watch: {
    count() {
      this.updateChilds();
    },
  },
  methods: {
    updateChilds() {
      this.$nextTick(() => {
        this.childs = [...this.$refs.Waterfall.children].map((item) => {
          return item;
        });
        waterFullLayout({ count: this.count, gap: this.gap, parent: this.parent, childs: this.childs });
      });
    },
  },
};
</script>
<style scoped lang="less">
.Waterfall {
  position: relative;
}
</style>
