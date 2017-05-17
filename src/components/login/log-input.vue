<template>
  <div class="log-input-container">
    <div class="log-ctn animated" :class="{shake: authErr, bounce: authPass}"> 
      <input ref="input" type="text" class="log-input" v-model="userToken" @keyup="keyupHandler">
    </div>
  </div>
</template>

<style>
  .log-input-container {
    position: absolute;
    width: 100%;
    height: 45px;
    bottom: 0;
  }

  .log-ctn {
    box-sizing: border-box;
    float: left;
    width: 100%;
    height: 45px;
  }

  .log-input {
    box-sizing: border-box;
    padding: 10px 10px;
    font-size: 18px;
    color: #333;
    width: 100%;
    height: 100%;
    transition: all 0.2s linear;
    border: none;
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .log-input:focus {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  import 'animate.css/animate.min.css'

  export default {
    name: 'log-input',

    data() {
      return {
        userToken: ""
      }
    },

    computed: {
      ...mapGetters({
        authErr: 'authErr',
        authPass: 'authPass'
      })
    },

    methods: {
      keyupHandler(e) {
        var me = this,
          keyCode = e.keyCode;

        // 回车键
        if (keyCode === 13) {
          me.$store.dispatch('checkToken', e.target.value);
        }
      }
    },

    mounted() {
      this.$refs.input.focus();
    }
  }

</script>