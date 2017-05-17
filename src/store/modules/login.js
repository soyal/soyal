const loginM = {
  state: {
    token: 'world',
    authErr: false,   // 验证不通过
    authPass: false,   //验证通过
    greedMsg: ['来，输入点啥吧'],
    errMsg: ['不对哦~tip:hello，____'],
    successMsg: ['那你很棒棒哦~'],
    showMsg: null
  },

  mutations: {
    checkToken(state, token) {
      // 通过
      if( token === state.token) {
        state.authPass = true;
        state.showMsg = state.successMsg;
      // 没有通过
      } else {
        state.authErr = true;
        state.showMsg = state.errMsg;
      }
    },

    // 重置authErr
    resetAuth(state) {
      state.authErr = false;
      state.authPass = false;
    }
  },

  actions: {
    checkToken({commit}, token) {
      commit('checkToken', token);

      // 2s展示一次动画
      setTimeout(() => {
        commit('resetAuth');
      }, 2000);
    }
  },

  getters: {
    authErr: (state) => {
      return state.authErr;
    },
    authPass: (state) => {
      return state.authPass;
    },
    showMsg: (state) => {
      return state.showMsg || state.greedMsg;
    }
  }
};

export default loginM;