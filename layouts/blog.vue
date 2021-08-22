<template>
  <div>
    <div>My blog navigation bar here</div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  // 定义在页面层级的middleware 页面路由跳转
  // middleware: 'auth'
  middleware() {
    console.log('middleware in layout')
  }
}
</script>
