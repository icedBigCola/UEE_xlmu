import Vue from "vue";
import Vuex from "vuex";
import common from './module/common'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignIn: 0,
    token: "",
    map:null,
    view:null,
    featureLayer0:null,
    featureLayer1:null,
    featureLayer2:null,
    featureLayer3:null,
    featureLayer4:null,
    featureLayer5:null,
    featureLayer6:null,
    featureLayer7:null,
    featureLayer8:null,
    featureLayer9:null,
    featureLayer10:null,
    featureLayer11:null,
  },
  mutations: {
    changeIsSignIn(state, n) {
      state.isSignIn = n;
    },
    setToken(state, val) {
      state.token = val;
    }
  },
  actions: {},
  modules: {
    common
  }
});
