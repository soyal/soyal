<template>
  <div class="font-hei container">
    <transition name="router-transtion" 
                enter-active-class="animated rollIn"
                leave-active-class="animated rollOut">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<style>
  body {
    background: #f9f9f9;
    overflow-x: hidden;
  }

  .container {
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import './common/init.css';
  import 'fonts.css/fonts.css';
  import 'animate.css/animate.min.css'

  export default {
    name: 'rootApp',
    mounted: function () {

    }
  }

</script>