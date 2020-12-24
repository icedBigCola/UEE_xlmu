import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import setAxios from "./setAxios";
import Cookie from "js-cookie";
import "bootstrap";
import $ from "jquery";
import './theme/index.css';
import '@/styles/index.scss'
import moment from 'moment'



Vue.prototype.$moment = moment

Vue.config.productionTip = false

console.log($);

//引入element ui

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//引入使用iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);


//引入axios
import axios from "axios";
Vue.prototype.$axios = axios;

// 引入Antd
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;
Vue.use(Antd);

//调用setAxios方法
setAxios();

router.beforeEach((to, from, next) => {
  store.commit("setToken", Cookie.get("token")); //获取token
  if (store.state.token) {
    store.commit("changeIsSignIn", 1); //更改登陆状态如果有toke
  }
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next();
    } else {
      next({ path: "/login" }); //如果没有token，返回登陆
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
