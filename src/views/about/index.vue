<template>
  <div class="about">
    this is about page
  </div>
</template>

<script lang="ts">
  import {ref} from "vue"

  export default {
    setup() {
      return {
        tempValue: ref(0)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "./index.styl"
</style>
