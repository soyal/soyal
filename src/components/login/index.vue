<template>
  <div class="login-container-wrap">
    <div class="login-container">
      <typed :content="showMsg" :time="typeTime"></typed>
      <log-input></log-input>
    </div>
  </div>
</template>

<style>
  .login-container-wrap {
    position: absolute;
    width: 100%;
  }
  .login-container {
    position: relative;
    width: 640px;
    margin:0 auto;
    padding-top: 260px;
    height: 100px;
  }
</style>

<script>
  import {mapGetters} from 'vuex';
  import typed from './typed.vue';
  import logInput from './log-input.vue';

  export default {
    name: 'login',

    data() {
      return {
        typeTime: {
          start: 100,
          clear: 50
        }
      }
    },

    computed: {
      ...mapGetters({
        showMsg: 'showMsg'
      })
    },

    watch: {
      isChecked(isPass) {
        if(isPass) {
          alert('check success');
        } else {
          alert('deny');
        }
      }
    },

    components: {
      typed,
      logInput
    }
  }

</script>