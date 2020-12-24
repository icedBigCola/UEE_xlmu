<template>
  <div class="header">
    <!-- <nav class="navbar navbar-expand-sm bg-b navbar-dark" id="main_navbar">
		<a class="navbar-brand" href="#">秦皇岛市旅游旺季生态环境保障指挥中心平台</a>
	 	<ul class="navbar-nav mr-auto">
			<li class="nav-item">
				<a class="nav-link" href="#">
          <router-link to="overView">
          总体概况
        </router-link> 
        <span class="sr-only">(current)</span></a>
			</li>
			<li class="nav-item">
				<a class="nav-link active" href="#">
          <router-link to="Monitor">
          在线监测
        </router-link></a>
			</li>
			<li class="nav-item dropdown">       
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
					aria-haspopup="true" aria-expanded="false">
					数据查询
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					<li class="nav-item dropdown">
						<a class="dropdown-item dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">
						   国家水质断面
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
								<li><a class="dropdown-item" href="#">国家水质自动站信息</a></li>
								<li><a class="dropdown-item" href="#">水质自动站小时数据</a></li>
						</ul>
					</li>
					<li><a class="dropdown-item" href="#">浴场数据查询</a></li>
					<li><a class="dropdown-item" href="#">浴场信息</a></li>
				</ul>
			</li>
			<li class="nav-item dropdown">        
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
					aria-haspopup="true" aria-expanded="false">
					数据查询
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					<li class="nav-item dropdown">
						<a class="dropdown-item dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">
						   国家水质断面
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
								<li><a class="dropdown-item" href="#">国家水质自动站信息</a></li>
								<li><a class="dropdown-item" href="#">水质自动站小时数据</a></li>
						</ul>
					</li>
					<li><a class="dropdown-item" href="#">浴场数据查询</a></li>
					<li><a class="dropdown-item" href="#">浴场信息</a></li>
				</ul>
			</li>
		</ul>
		

		<div class="float-right">			
  			<ul class="navbar-nav mr-auto">
  				<li class="nav-item dropleft">         
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false">
						{{ loginStatus }}
					</a>
					<ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="#">修改密码</a></li>
						<li><a class="dropdown-item" href="#"><router-link to="login">
            退出系统
          </router-link></a></li>
					</ul>
				</li>
  			</ul>
  		</div>

 	 </nav> -->
    

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#192745"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item>
         <img src="../assets/img/uni-logo.png" style="width:200px" alt />
      </el-menu-item>
      <el-menu-item style="font-size:18px;weight:900">
         秦皇岛市生态环境保障指挥中心平台
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="overView">
          总体概况
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="Monitor">
          在线监测
        </router-link>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">数据查询</template>
        <el-submenu index="3-1">
          <template slot="title">
              教务管理入口
          </template>
          <router-link to="/water1">
            <el-menu-item index="3-1-1">国家水质自动站信息</el-menu-item>
          </router-link>
          <router-link to="/water2">
             <el-menu-item index="3-1-2">教务管理信息</el-menu-item>
          </router-link>
        </el-submenu>

        <el-submenu index="3-2">
          <template slot="title">空气质量监测</template>
          <router-link to="/air1">
             <el-menu-item index="3-2-1">空气质量监测站信息</el-menu-item>
          </router-link>
          <router-link to="/air2">
            <el-menu-item index="3-2-2">空气质量数据查询</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="3-3">
          <template slot="title">噪声监测</template>
          <router-link to="/noise1">
             <el-menu-item index="3-3-1">噪声监测站信息</el-menu-item>
          </router-link>
          <router-link to="/noise2">
              <el-menu-item index="3-3-2">噪声监测数据查询</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="3-4">
          <template slot="title">河流信息</template>
            <router-link to="/river1">
              <el-menu-item index="3-4-1">河流信息</el-menu-item>
            </router-link>
        </el-submenu>
        <el-submenu index="3-5">
          <template slot="title">污染源信息</template>
            <router-link to="/polution1">
              <el-menu-item index="3-5-1">企业基本信息</el-menu-item>
            </router-link>
            <router-link to="/polution2">
              <el-menu-item index="3-5-2">企业排污口信息</el-menu-item>
            </router-link>
        </el-submenu>
        <el-submenu index="3-6">
          <template slot="title">手工断面</template>
            <router-link to="/artificialCuts1">
              <el-menu-item index="3-6-1">手工断面基本信息</el-menu-item>
            </router-link>
            <router-link to="/artificialCuts2">
              <el-menu-item index="3-6-2">手工断面数据查询</el-menu-item>
            </router-link>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4" style="float:right;margin-right:50px">
        <template slot="title"><div @click="loginPage()">{{loginStatus}}</div></template>
        <el-menu-item index="4-1" v-show="authority">
          <router-link to="addUser">
            添加用户
          </router-link>
        </el-menu-item>
        <el-menu-item index="4-2">
          修改密码
        </el-menu-item>
        <el-menu-item index="4-3">
          <router-link to="login">
            退出系统
          </router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item style="float:right;margin-right:5px">
        <div class="header-right">
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
            </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default {
  data() {
    return {
      activeIndex2: "1",
      loginStatus: "登录系统",
      authority: false
    };
  },
  // 注册组件
  components: {},
  created() {
    this.getUserInfo();
  },
  beforeUpdate() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getUserInfo() {
      this.$axios.get("/users/userinfo").then(res => {
        let result = res.data;
        console.log(result);
        if (result.code === 0) {
          this.loginStatus = result.data.username;
          if (result.data.authority === 1) {
            this.authority = true;
          } else {
            this.authority = false;
          }
        }
      });
    },
    loginPage(){
      if (this.loginStatus == "登录系统"){
        this.$router.push({
            path: "/"
        });
      }
    },
    handleFullScreen() {
        let element = document.documentElement;
        if (this.fullscreen) {
          if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        } else {
            if (element.requestFullscreen) {
               element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
               element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
               // IE11
               element.msRequestFullscreen();
            }
        }
          this.fullscreen = !this.fullscreen;
    }
  },
  computed: {
    isSignIn() {
      return this.$store.state.isSignIn;
    }
  }
};
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    font-family: PingFangSC-Light, 微软雅黑;
	
}

/*各浏览器显示不同，去掉蓝色边框*/
fieldset, img, input, button {
    border: none;
    padding: 0;
    margin: 0;
    outline-style: none;
}
img {
    border: 0;
    vertical-align: middle;
}
ul, li {
    list-style: none;
}
a {
    text-decoration: none;
    cursor: pointer;
}
/*清除浮动*/
.clear-both:before, .clear-both:after {
    display: table;
    content: "";
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    clear: both;
}
.clearfix {
    *zoom: 1; /*IE/7/6*/
}
.fl{
    float: left;
}
.fr{
    float: right;
}

/*header开始*/
.header{
    width: 100%;
    height: 80px;
    /* padding:0 20px; */
    min-width: 800px;
    background: #192745;
}
.bg_header{
    width: 100%;
    height: 80px;
    background: url(../img/title1.png) no-repeat;
    background-size: 100% 100%;
}
.header>.header_logo{
    padding:18px 10px 10px 0px;
}
.header>.header_logo>a{
    display: block;
}
.header>.header_logo>a>img{
    width:260px;
}

.header>.header_nav{
    margin-left: 20px;
}
.header>.header_nav>ul>li{
    float: left;
    margin-right: 6px;
    position: relative;
}
.header>.header_nav>ul>li>a{
    display: block;
    height: 80px;
    padding:0 10px 0 30px;
    line-height: 80px;
    color:#fff;
}
.header>.header_nav>ul>li>a:hover{
    border-bottom: 4px solid #4b8df8;
}
.header>.header_nav>ul>li>img{
    float: left;
    position: absolute;
    top: 33px;
    left:10px;
}
.header>.header_nav>ul>li>a.nav_current{
    border-bottom: 4px solid #4b8df8;
}

.header>.header_myself{
    width: 90px;
    text-align: center;
}
.header>.header_myself>p{
    color:#fff;
    font-size: 13px;
    margin-top: 15px;
}
.header>.header_myself>a{
    color:#fff;
    font-size: 13px;
}

/*content 开始*/

.content{
    margin: 20px;
    width: calc(100% - 40px);
    min-width: 1366px;
}
.content>.content_title{
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: #4b8df8;
    box-sizing: border-box;
    margin-bottom: 20px;
}
.content>.content_title>p{
    color:#fff;
    font-size: 16px;
    font-weight: 600;
}
.content>.content_title>img{
    margin: 10px 10px 0px 10px;
}
.content>.content_main{
    min-width: 1366px;
}
.content>.content_main>.content_search>div{
    margin-right: 25px;
}
.content>.content_main>.content_search>div>label{
    width: 80px;
    text-align: right;
}
.content>.content_main>.content_search>div>select,
.content>.content_main>.content_search>div>input
{
    width: 200px;
}
.content>.content_main>.content_table{
    margin-top: 30px;
}
.content>.content_main>.content_table>table{
    margin-top: 15px;
}
.content>.content_main>.content_table>table th:nth-child(1),
.content>.content_main>.content_table>table td:nth-child(1){
    width: 50px;
    text-align: center;
}

.content>.content_main>.content_page>span {
    font-size: 12.8px;
    margin-top: 7px;
}
.content>.content_main>.content_page>select{
    width: 70px;
    margin-right: 10px;
}

/* CSS Document */
.t_title{
	width: 100%;
	height: 100px;
	text-align: center;
	font-size: 2rem;
	line-height: 80px;
	color:#fff;
}
.border-primary{
	position:relative;
	box-shadow: 0 0 10px #2C58A6;
}


.border-primary::before,.border-primary::after{position:absolute;width:22px;height:22px;content:''}
.border-primary::before{background:url(../img/line-lt.png) no-repeat;left:-3px;top:-3px}
.border-primary::after{background:url(../img/line-rt.png) no-repeat;right:-3px;top:-3px;z-index:-1;}

.line-b::before,.line-b::after{position:absolute;width:22px;height:22px;content:''}
.line-b::before{background:url(../img/line-rb.png) no-repeat;right:-3px;bottom:-3px}
.line-b::after{background:url(../img/line-lb.png) no-repeat;left:-3px;bottom:-3px}



.table{margin: 0; font-size: 0.9rem;text-align: center;}
.table td,.table th{padding:.5rem .25rem;vertical-align:top;border-top:1px dotted #025086}
.table thead th{border:1px solid #025086;background-color:rgba(2,80,134,0.3);}
.table tbody+tbody{border-top:0px solid #dee2e6}
.szType{width:70%;border-radius:0.2rem;margin:0 auto;}
.szType0{background:#aaa }
.szType1{background:rgba(210,239,244,0.8)}
.szType2{background:rgba(60,190,230,0.8) }
.szType3{background:rgba(116,186,78,0.8) }
.szType4{background:rgba(238,236,65,0.8)}
.szType5{background:rgba(239,134,65,0.8)}
.szType6{background:rgba(226,35,45,0.8) }

/*导航颜色*/
.bg-b{background-color: #152747;}
.navbar-brand{font-size: 1.4rem;}
.dropdown-menu{min-width:6rem;color:#fff;;background-color:rgba(44,88,166,.3);border:1px solid rgba(44,88,166,.5);}
.dropdown-item{color: white}

/*深蓝按钮*/
.btn-secondary{background-color:#152747;border-color:#152747}
.btn-secondary:hover{background-color:#2c58a6;border-color:#2c58a6}
.btn-secondary.focus,.btn-secondary:focus{background-color:#2c58a6;border-color:#2c58a6;box-shadow:0 0 0 .2rem rgba(21,39,71,.5)}
.btn-secondary.disabled,.btn-secondary:disabled{background-color:#152747;border-color:#152747}
.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{background-color:#152747;border-color:#152747}
.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(21,39,71,.5)}


/*固定定位*/
.fixed-lt{top:80px;left: 0px;}
.fixed-rb{bottom:1.5rem;right: 1rem;}
.fixed-rt1{top:80px;right: 1rem;}
.fixed-rt2{top:9rem;right: 1rem;}
.fixed-rt3{top:9.2rem;right: 4.4rem; width: 340px;}
.fixed-rb1{bottom: 1.5rem;right: 4.4rem;width: 12rem;}
.fixed-rb2{bottom: 1.5rem;right: 17rem;width: 33rem;}
.absolute-rt{right: 6px;top: 6px;}


/*竖排文本*/
.sp{
	width: 1.5em;margin: auto;
}

/*地图图层控制按钮样式*/
.shezhi>li{padding: .2rem 1rem;width: 100%;text-align: left;}

.dropdown-menu {
    margin-top: 0;
}
.dropdown-menu .dropdown-toggle::after {
    vertical-align: middle;
    border-left: 4px solid;
    border-bottom: 4px solid transparent;
    border-top: 4px solid transparent;
}
.dropdown-menu .dropdown .dropdown-menu {
    left: 100%;
    top: 0%;
}

.dropdown-menu > li a:hover,
.dropdown-menu > li.show {
	background-color:rgba(44,88,166,.5);
	color: white;
}
.dropdown-menu > li.show > a{
	color: white;
}

.left-tabs {
    position: fixed;
    top: 80px;
    left: 0;
    box-sizing: border-box;
    z-index: 10;
}
</style>
