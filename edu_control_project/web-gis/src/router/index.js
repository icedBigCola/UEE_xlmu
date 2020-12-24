import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Monitor from "@/views/Monitor.vue";
import modifyPassword from "@/views/ModifyPassword.vue";
import addUser from "@/views/addUser.vue";
import overView from "@/views/Overview.vue";
import Layout from '@/views/layout/index.vue';
import air1 from '../components/air1.vue';
import air2 from '../components/air2.vue';
import artificialCuts1 from '../components/artificialCuts1.vue';
import artificialCuts2 from '../components/artificialCuts2.vue';
import noise1 from '../components/noise1.vue';
import noise2 from '../components/noise2.vue';
import polution1 from '../components/polution1.vue';
import polution2 from '../components/polution2.vue';
import river1 from '../components/river1.vue';
import water1 from '../components/water1.vue';
import water2 from '../components/water2.vue';

export default new VueRouter({
  routes: [
    //登录
    {
      path: "/",
      name: "login",
      component: Login
    },
    //地图主页
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        requireAuth: true //需要登陆权限
      }
    },
    //总揽界面
    {
      path: "/overview",
      name: "overView",
      component: overView,
      meta: {
        requireAuth: true //需要登陆权限
      }
    },
    //监控
    {
      path: "/monitor",
      name: "Monitor",
      component: Monitor,
      meta: {
        requireAuth: true //需要登陆权限
      }
    },
    //修改密码
    {
      path: "/modifyPassword",
      name: "modifyPassword",
      component: modifyPassword,
      meta: {
        requireAuth: true //需要登陆权限
      }
    },
    //添加用户
    {
      path: "/addUser",
      name: "addUser",
      component: addUser,
      meta: {
        requireAuth: true, //需要登陆权限
        title: '数据查询'
      }
    },
    {
      path: '/search',
      redirect: '/air1',
      component: Layout,
      meta: {
        requireAuth: true //需要登陆权限
      },
      children: [
        {path:'/air1',component:air1, meta: { title: '空气质量监测站信息',requireAuth: true},},
        {path:'/air2',component:air2, meta: { title: '空气质量数据查询',requireAuth: true}},
        {path:'/artificialCuts1',component:artificialCuts1,meta: { title: '手工断面基本信息',requireAuth: true}},
        {path:'/artificialCuts2',component:artificialCuts2,meta: { title: '手工断面数据查询',requireAuth: true}},
        {path:'/noise1',component:noise1,meta: { title: '噪声监测站信息',requireAuth: true}},
        {path:'/noise2',component:noise2,meta: { title: '噪声监测数据查询',requireAuth: true}},
        {path:'/polution1',component:polution1,meta: { title: '企业基本信息',requireAuth: true}},
        {path:'/polution2',component:polution2,meta: { title: '企业排污口信息',requireAuth: true}},
        {path:'/river1',component:river1,meta: { title: '河流信息',requireAuth: true}},
        {path:'/water1',component:water1,meta: { title: '国家水质自动站信息',requireAuth: true}},
        {path:'/water2',component:water2,meta: { title: '教学管理平台信息',requireAuth: true}},
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
