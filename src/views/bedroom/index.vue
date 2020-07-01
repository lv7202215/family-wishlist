<template>
  <div class="bedroom">
    <ul class="bedroom-nav">
      <li v-for="(item,index) in roomOptions.children" :key="index" @click="jumpFun(item.path)">
        {{item.meta.title}}
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {readonly} from "vue"
  import {useRouter} from "vue-router";
  import BEDROOM_ROUTER from "@/router/modules/bedroom";
  export default {
    setup() {
      // 卧室列表
      const roomOptions = readonly(
        BEDROOM_ROUTER[0]
      )
      const routers = useRouter()
      const jumpFun = (params: string) => routers.push(params)
      return {
        roomOptions,
        jumpFun
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "./index.styl"
</style>
