<template>
  <section>
    <h2>this is a demo</h2>
    <span>{{ nodeData }}</span>
    <h3>footer</h3>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types';
import Vue from 'vue'
import { getData } from "~/service/index.api";

export default Vue.extend({
  layout: 'blog',
  // 页面内部的middleware  发生在页面加载前
  middleware() {
    // eslint-disable-next-line no-console
    console.log('middleware in page inside')
  },

  // context 为上下文对象
  validate(ctx: Context): Promise<boolean> | boolean {
    // 这里是在页面运行前进行一个校验  检验通过继续执行
    // 在动态路由对应的页面组件中配置一个校验方法用于校验动态路由参数的有效性
    // 也可以在 validate 方法中校验 store 的数据
    return Promise.resolve(ctx.isDev)
  },

  // asyncData方法会在组件（限于页面组件）每次加载之前被调用。
  // 所以其在方法内是没有办法通过 this 来引用组件的实例对象
  asyncData(): void {
    // 异步处理逻辑, 在组件渲染前获取数据
  },

  data() {
    return {
      nodeData: ''
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.nodeData = await getData(this.$axios);
    }
  }
})
</script>
