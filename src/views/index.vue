<template>
  <div class="main-layout">
    <!--头部-->
    <Header/>
    <div class="main-content">
      <!--侧边导航-->
      <Slide/>
      <!--内容主体-->
      <Body/>
    </div>
  </div>
</template>

<script lang="ts">
  import Header from "@/views/layout/header/index.vue"
  import Slide from "@/views/layout/slide/index.vue"
  import Body from "@/views/layout/body/index.vue"

  export default {
    components: {Header, Slide, Body},
    setup() {
      return {}
    }
  }
</script>

<style lang="stylus">
  .main-content
    max-width 960px
    margin 0 auto
    display flex
</style>
