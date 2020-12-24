<template>
<el-container class="home-container">
    <!-- 头部区域 -->
    <el-header style="height:80px">
        <common-header> </common-header>
    </el-header>
    <!-- 主体区域 -->
    <el-container style="padding:0px">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '230px'" style="text-align:left">
        <!-- 点击折叠侧边栏菜单 -->
        <el-tooltip effect="light" content="折叠/展开" placement="bottom-end" :enterable="false">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
        </el-tooltip>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
          style="text-align:left"
        >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单模板 -->
            <template slot="title" >
              <!-- 图标 -->
              <i :class="iconobj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState(subItem.path)"
            >
              <template slot="title">
                <!-- 图标 -->
                <!-- <i class="el-icon-menu"></i> -->
                <!-- 文本 -->
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容主体区域 -->
      <el-main style="margin:0px;">
        <TopBar></TopBar>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
    <!-- <el-container class="home-container">
        <el-header>
            <common-header> </common-header>
        </el-header>
        <el-container>
        <SideBar></SideBar>
        <div class="right-container" :class="{'collapse-ml': isCollapse}">
            <TopBar style="margin-left:30px"></TopBar>
            <AppMain></AppMain>
        </div>
        </el-container>
    </el-container> -->
</template>

<script>
    import { mapState } from 'vuex'
    // import SideBar from './sideBar'
    import TopBar from './TopBar/index'
    // import AppMain from './appMain'
    import CommonHeader from "@/views/CommonHeader.vue";

    export default {
        data() {
    return {
      menulist: [
        {
          id: 1,
          authName: "国家水质断面",
          children: [
            { id: "1.1", authName: "国家水质自动站信息", path: "/water1", children: [] },
            { id: "1.2", authName: "水质自动站小时信息", path: "/water2", children: [] }
          ]
        },
        {
          id: 2,
          authName: "空气质量监测",
          path: "lygl",
          children: [
            { id: "2.1", authName: "空气质量监测站信息", path: "/air1", children: [] },
            { id: "2.2", authName: "空气质量数据查询", path: "/air2", children: [] }
          ]
        },
        {
          id: 3,
          authName: "噪声监测",
          path: "ssgl",
          children: [
            { id: "3.1", authName: "噪声监测站信息", path: "/noise1", children: [] },
            { id: "3.2", authName: "噪声监测数据查询", path: "/noise2", children: [] },
          ]
        },
        {
          id: 4,
          authName: "河流信息",
          path: "yhqxgl",
          children: [
            { id: "4.1", authName: "河流信息", path: "/river1", children: [] },
          ]
        },
        {
          id: 5,
          authName: "污染源信息",
          path: "xsgl",
          children: [
            { id: "5.1", authName: "企业基本信息", path: "/polution1", children: [] },
            { id: "5.2", authName: "企业排污口信息", path: "/polution2", children: [] }
          ]
        },
        {
          id: 6,
          authName: "手工断面",
          path: "hqfw",
          children: [
            { id: "6.1", authName: "手工断面基本信息", path: "/artificialCuts1", children: [] },
            { id: "6.2", authName: "手工断面数据查询", path: "/artificialCuts2", children: [] }
          ]
        }
      ],
      iconobj: {
        "1": "iconfont iconren",
        "2": "iconfont iconicon-",
        "3": "iconfont iconsushe",
        "4": "iconfont iconic_opt_feature",
        "5": "iconfont iconxuesheng",
        "6": "iconfont iconhouqinwuzi",
        "7": "iconfont iconiconfontshenghuojiaofei",
        "8": "iconfont icontongji"
      },
      //   是否折叠
      isCollapse: false,
      //   被激活的连接地址
      activePath: ""
    };
    },
        computed: {
            ...mapState({
                isCollapse: (state) => state.common.isCollapse
            })
        },
       components: {
          //  SideBar,
           TopBar,
          //  AppMain,
           CommonHeader,
       },
       created() {
      this.activePath = window.sessionStorage.getItem('activePath');
      // 从 vuex 中取到路由表 设置给 menulist
      // this.menulist = this.$store.state.routerlist;
       },
        methods: {
            // 退出按钮
            logout() {
            // window.sessionStorage.clear();
            this.$router.push("/login");
            // 删除sessionStorage中保存的值
            sessionStorage.clear ()
            },
            // 点击折叠与展开侧边栏菜单
            toggleCollapse() {
            this.isCollapse = !this.isCollapse;
            },
            // 保存链接的激活状态
            saveNavState(activePath) {
            this.$router.push(activePath);
            }
        }
    }
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  background: #f2f2f2;
}
.el-header {
  background-color: #192745;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
}
.home-logo {
  display: flex;
  align-items: center;
}
.home-logo img {
  width: 6.2%;
}
.home-logo span {
  color: white;
  font-size: 20px;
  margin-left: 15px;
}
.el-aside {
  background-color: #393d49;
}
.el-main {
  background: #f2f2f2;
  margin: 0;
}
.el-menu {
  border-right: none;
}
.iconfont {
  margin-right: 15px;
}
.toggle-button {
  background: #4a5064;
  color: white;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  font-size: 10px;
  line-height: 24px;
}
</style>