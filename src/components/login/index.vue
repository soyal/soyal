<template>
  <div class="login-container">
    <typed :content="blinkContent" :time="typeTime"></typed>
    <log-input></log-input>
  </div>
</template>

<style>
  .login-container {
    position: relative;
    width: 640px;
    margin:0 auto;
    padding-top: 260px;
    height: 100px;
  }
</style>

<script>
  import typed from './typed.vue';
  import logInput from './log-input.vue';

  export default {
    name: 'login',

    data() {
      return {
        blinkContent: ['输入token进行验证'],

        typeTime: {
          start: 100,
          clear: 50
        }
      }
    },

    computed: {
      isChecked() {
        return this.$store.getters.isChecked;
      }
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