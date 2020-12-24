<template>
  <div class="body">
    <common-header> </common-header>

    <el-row>
      <el-col :span="10">
        <div style="margin-top:50px">
          <el-input
            placeholder="请输入用户名"
            v-model="registerForm.username"
            style="width:200px"
          >
          </el-input>
          <br />
          <el-input
            placeholder="请输入密码"
            style="width:200px"
            v-model="registerForm.password"
            show-password
          >
          </el-input>
          <br />
          <el-select
            v-model="registerForm.authority"
            style="width:200px"
            slot="prepend"
            placeholder="请选择用户权限"
          >
            <el-option label="管理员" value="1"></el-option>
            <el-option label="普通用户" value="2"></el-option>
          </el-select>
          <br />
          <el-button type="primary" plain style="width:200px" @click="signUp()"
            >提交</el-button
          >
        </div>
      </el-col>
      <el-col :span="14">
        <div style="margin-top:50px">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="id" label="编号" width="180">
            </el-table-column>
            <el-table-column prop="username" label="用户名" width="180">
            </el-table-column>
            <el-table-column prop="authority" label="权限" width="180">
            </el-table-column>
            <el-table-column width="180">
              <el-button type="danger" round>删除用户</el-button>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CommonHeader from "@/views/CommonHeader.vue";
export default {
  data() {
    return {
      tableData: null,
      registerForm: {
        username: "",
        password: "",
        authority: ""
      }
    };
  },
  // 注册组件
  components: {
    CommonHeader
  },
  created() {
    this.getUserInfo();
  },
  beforeUpdate() {},
  methods: {
    submit() {},
    signUp() {
      //   alert(this.registerForm.username)
      this.$axios.post("/users/register", this.registerForm).then(res => {
        console.log(res);
        this.getUserInfo();
      });
    },
    getUserInfo() {
      this.$axios.get("/users/alluserinfo").then(res => {
        let result = res.data;
        console.log(result);
        this.tableData = result.data;
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].authority === 1) {
            this.tableData[i].authority = "管理员";
          } else {
            this.tableData[i].authority = "普通用户";
          }
        }
        // if(result.code === 0)
        // {

        // }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.body {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  /* background:#398144; */
}
</style>
