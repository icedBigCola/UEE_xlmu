<template>
<div class="body">
    <div class="conbox">
        <div class="logo">
            <img src="../assets/img/uni-logo.png" alt />

        </div>
        <div class="smbox">
            <div class="a-form-itembox">
                <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
                    <el-form-item class="Item">
                        <div class="title">用户登陆</div>
                    </el-form-item>
                    <!-- // <el-popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                        // <el-button slot="reference">hover 激活</el-button>
                        // </el-popover>-->
                    <el-form-item class="Item inputbox" prop="name">
                        <el-input v-model="loginForm.name" placeholder="请输入用户名">
                            <img src="../assets/img/user.png" slot="prefix" :style="{ zoom: '11%', color: '#0088cc' }" />
                        </el-input>
                    </el-form-item>
                    <el-form-item class="Item inputbox" prop="password">
                        <el-input v-model="loginForm.password" placeholder="请输入密码" type="password">
                            <img src="../assets/img/password.png" slot="prefix" :style="{ zoom: '11%', color: '#0088cc' }" />
                        </el-input>
                    </el-form-item>
                    <el-form-item class="Item inputbox">
                        <el-button type="primary" class="Item inputbox" @click="signIn">
                            登陆
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div v-loading.fullscreen.lock="loading"></div>
        <div class="foot">
            <a class="copyright-a" href="http://www.beian.miit.gov.cn">河北环境工程学院版权所有</a>
            Copyright ©2020
        </div>
    </div>
</div>
</template>

<script>
import Cookie from "js-cookie"; //引入cookie
export default {
    data() {
        return {
            loading: false,
            btnloading: false,
            loginForm: {
                name: "",
                password: ""
                // authority: 1
            },
            loginRules: {
                name: [{
                    required: true, //必填
                    message: "请输入用户名", //如果没输入弹出
                    trigger: "blur"
                }],
                password: [{
                    required: true, //必填
                    message: "请输入密码", //如果没输入弹出
                    trigger: "blur"
                }]
            }
        };
    },
    // 注册组件
    components: {},
    created() {},
    mounted() {
        // var header = document.getElementById("common-header");
        // header.style.display = 'none';
    },
    beforeUpdate() {},
    methods: {
        signIn() {
            this.$refs["loginForm"].validate(valid => {
                if (valid) {
                    // alert('submit!');
                    this.loading = true;
                    this.$axios.post("/users/login", this.loginForm).then(res => {
                        let result = res.data; //获得返回的数据
                        if (result.code === 0) {
                            //登陆成功0
                            Cookie.set("token", result.token);
                            this.$store.commit("setToken", result.token);
                            this.$store.commit("changeIsSignIn", 1);
                            setTimeout(() => {
                                this.loading = false;
                                this.$router.push({
                                    path: "/overView"
                                });
                                // var header = document.getElementById("common-header");
                                // header.style.display = 'inline';
                                this.$notify({
                                    title: "登陆成功",
                                    message: "河北环境工程学院大数据平台",
                                    type: "success",
                                    duration: 1000
                                });
                            }, 1000);
                        } else {
                            this.loading = false;
                            this.$notify.error({
                                title: "登陆失败",
                                message: "账号或密码错误",
                                duration: 1000
                            });
                        }
                    });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        signUp() {
            this.$refs["loginForm"].validate(valid => {
                if (valid) {
                    // alert('submit!');
                    this.$axios.post("/users/register", this.loginForm).then(res => {
                        console.log(res);
                    });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
.body {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background: #398144;
}

.conbox {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.logo {
    font-size: 30px;
    color: #fff;
    width: 60vw;
    display: flex;
    align-items: center;
}

.logo img {
    height: 80px;
    margin-right: 20px;
}

.smbox {
    width: 60vw;
    height: 60vh;
    background-color: #fff;
    margin: 40px 0px;
    box-shadow: 0px 0px 10px #000;
    background-image: url("../assets/img/bg.png");
    background-repeat: no-repeat;
    background-position: left;
    background-size: 100%;
    position: relative;
}

.a-form-itembox {
    position: absolute;
    top: 0px;
    right: 0px;
    box-sizing: border-box;
    padding: 60px 80px;
}

.title {
    font-size: 20px;
    color: #000;
}

.inputbox {
    width: 300px;
    box-sizing: border-box;
}

.inputsmbox {
    width: 300px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
}

.btn {
    width: 300px;
}

.foot {
    color: #fff;
}

.copyright-a {
    text-decoration: none;
    color: #fff;
}

.copyright-a:hover {
    color: #fff;
}

.toggle {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1000;
}
</style>
