<!--
 * @Author: yangzhixin
 * @Date: 2025-04-07 09:13:17
 * @LastEditors: yangzhixin
 * @LastEditTime: 2025-04-07 11:12:54
 * @Description: file content
 * @FilePath: /home/src/App.vue
-->
<template>
  <div id="app">
    <main-header />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
