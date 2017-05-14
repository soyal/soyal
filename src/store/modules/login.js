const loginM = {
  state: {
    isLogin: false,
    isChecked: false,
    checkStatus: 'uncheck'
  },

  mutations: {
    login(state) {
      state.isLogin = true;
    },

    logout(state) {
      state.isLogin = false;
    },

    /**
     * 数据拉取中
     */
    loading(state) {
      state.loading = true;
    },

    /**
     * 数据拉取完成
     * @param {*} state 
     */
    complete(state) {
      state.loading = false;
    },

    /**
     * 通过验证
     * @param {*} state 
     */
    pass(state) {
      state.isChecked = true;
    },

    /**
     * 验证失败
     */
    deny(state) {
      state.isChecked = false;
    }
  },

  actions: {
    checkToken({commit}, token) {
      commit('loading');
      setTimeout(function() {
        commit('deny');
        commit('complete');
      }, 2000)
    }
  },

  getters: {
    isChecked(state) {
      return state.isChecked;
    }
  }
};

export default loginM;