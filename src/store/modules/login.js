const loginM = {
  state: {
    token: 'world',
    authErr: false,   // 验证不通过
    authPass: false,   //验证通过
    startToLogin: false, //开始切换
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
      if(state.authPass) {
        state.startToLogin = true;
      }
      state.authErr = false;
      state.authPass = false;
    },

    resetLogin(state) {
      state.startToLogin = false;
    }
  },

  actions: {
    checkToken({commit}, token) {
      commit('checkToken', token);

      // 2s展示一次动画
      setTimeout(() => {
        commit('resetAuth');
      }, 2000);
    },
    resetLogin({commit}) {
      commit('resetLogin');
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
    },
    startToLogin: (state) => {
      return state.startToLogin;
    }
  }
};

export default loginM;