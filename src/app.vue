<template>
  <div class="font-hei container">
    <transition name="slide">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style>
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    background: #f9f9f9;
  }
  .container {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import './common/init.css';
  import 'fonts.css/fonts.css';

  export default {
    name: 'rootApp',
    mounted: function () {
      
    }
  }

</script>