<template>
  <div id="app">
    <ChatApp/>
  </div>
</template>

<script>
import ChatApp from '@/components/ChatApp'
export default {
  name: 'app',
  components: {
    ChatApp
  }
}
</script>

<style lang="scss">
@import "./assets/styles/_var.scss";

body {
  font-family: SF Pro Text, SF Pro Icons, system, -apple-system, system-ui,
    BlinkMacSystemFont, Helvetica Neue, Helvetica, Lucida Grande, sans-serif;
  background-color: #e0e0e0;
  background-image: linear-gradient(180deg, #dddbd1, #d2dbdc);

  #app {
    width: 100%;
    height: 100%;
    &:after {
      background-color: $green;
      content: "";
      height: 119px;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: -1;
    }
  }
}
</style>
