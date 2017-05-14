
<template>
  <p class="typed-container"><span class="typed" :class="{animate: !isAnimate}">{{showStr}}</span></p>
</template>

<style>
  @keyframes blink {
    from,
    to {
      border-color: rgba(30, 30, 30, 1);
    }
    50% {
      border-color: rgba(30, 30, 30, 0);
    }
  }
  
  .typed-container {
    font-size: 24px;
  }

  .typed {
    border-right: 2px solid rgba(30, 30, 30, 1);
  }
  
  .typed.animate {
    animation: blink 1s infinite;
  }
</style>

<script>
  export default {
    name: 'typed',
    props: {
      content: {
        type: Array,
        required: true
      },
      time: {
        type: Object
      }
    },

    data() {
      return {
        showStr: "",
        isAnimate: false,
        interval: null              // 动画帧执行器
      }
    },

    watch: {
      content(newValue) {
        var me = this;

        me.stopType();
        me.typeStart(newValue);
      }
    },

    methods: {
      /**
       * 生成动画的方法
       * @param {Function} fn 每帧执行的方法，需要有一个boolean作为返回，为false就会终止动画
       * @param {Number} time 每帧时间间隔，默认100，单位ms
       */
      animate(fn, time) {
        var me = this,
          args = Array.prototype.slice.call(arguments, 2);

        time = time || 100;

        return new Promise(function (resolve, reject) {
          me.isAnimate = true;
          me.interval = setInterval(function () {
            if (!fn.apply(me, args)) {
              window.clearInterval(me.interval);
              me.isAnimate = false;
              resolve();
            }
          }, time);
        });
      },

      /**
       * 退格
       */
      backspace() {
        var me = this,
          len = me.showStr.length;

        if (len > 0) {
          me.showStr = me.showStr.slice(0, len - 1);
          return true;
        } else {
          return false;
        }
      },

      /**
       * 还原字符串
       * @param {Boolean} isAnimate 是否动画清除
       * @param {Number} time 动画间隔时间
       */
      clear(isAnimate, time) {
        var me = this;

        time = me.time.clear || 100;
        if (isAnimate) {
          return me.animate(me.backspace, time);
        } else {
          me.showStr = '';
        }
      },

      /**
       * 停止正在运行的type动画
       */
      stopType() {
        var me = this;

        window.clearInterval(me.interval);
        if(me.isAnimate) {
          me.isAnimate = false;
        }
      },

      /**
       * 键入一个字符
       * @param {String} c 一个字符
       */
      type(c) {
        var me = this;

        me.showStr = me.showStr.concat(c);
      },

      /**
       * 键入一句话
       * @param {String} str 要键入的字符串
       * @param {Number} time 每次键入的时间间隔，单位是毫秒ms，默认300
       */
      typeStr(str, time) {
        var index = 0, me = this, char;

        time = me.time.start || 200;
        return me.animate(function () {
          char = str[index++];
          if (char) {
            me.type(char);
            return true;
          } else {
            return false;
          }
        }, time);
      },

      /**
       * 开始type
       * @param {Array} content 要输出的内容
       */
      typeStart(content) {
        var me = this, pro;
        
        // 如果已经显示有字，那么先进行清除
        if(me.showStr) {
          pro = me.clear(true);
        }

        pro = pro || Promise.resolve();
        // 只有一句话
        if(content.length === 1) {
          pro.then(function() {
            return me.typeStr(content[0]);
          })
        } else {
          for(let i = 0, len = content.length; i < len; i++) {
            // 如果是最后一句话，不进行删除
            if(i === len-1) {
              pro = pro.then(function() {
                return me.typeStr(content[i]);
              });
            
            // 不是最后一句话，需要删除
            } else {
              pro = pro.then(function() {
                return me.typeStr(content[i]);
              }).then(function() {
                return me.clear(true);
              });
            }
          }
        }

        return pro;
      }

    },

    mounted() {
      var me = this;

      me.typeStart(me.content);
    }
  }

</script>