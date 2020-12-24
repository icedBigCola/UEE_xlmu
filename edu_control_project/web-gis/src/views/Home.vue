<template>
<div class="body">
    <common-header> </common-header>
    <!-- 
    <el-col :span="6">
      <div style="margin-top:50px">
        <el-select
          v-model="select.town_name"
          slot="prepend"
          placeholder="请选择乡镇名称"
        >
          <el-option label="刘家营乡" value="刘家营乡"></el-option>
          <el-option label="燕河营乡" value="燕河营乡"></el-option>
          <el-option label="潘庄乡" value="潘庄镇"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="search"
          >搜索</el-button
        >
        <br /><br />
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="编号" width="180">
          </el-table-column>
          <el-table-column prop="shape" label="形状" width="180">
          </el-table-column>
          <el-table-column prop="town_name" label="乡镇名字" width="180">
          </el-table-column>
          <el-table-column prop="town_code" label="乡镇编号" width="180">
          </el-table-column>
        </el-table>
      </div>

      <div style="margin-top:50px">
        <el-select
          v-model="select.town_name"
          slot="prepend"
          placeholder="请选择乡镇名称"
        >
          <el-option label="刘家营乡" value="刘家营乡"></el-option>
          <el-option label="燕河营乡" value="燕河营乡"></el-option>
          <el-option label="潘庄乡" value="潘庄镇"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="search"
          >搜索</el-button
        >
        <br /><br />
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="编号" width="180">
          </el-table-column>
          <el-table-column prop="shape" label="形状" width="180">
          </el-table-column>
          <el-table-column prop="town_name" label="乡镇名字" width="180">
          </el-table-column>
          <el-table-column prop="town_code" label="乡镇编号" width="180">
          </el-table-column>
        </el-table>
      </div>
    </el-col>
    <el-col :span="12">
      <div id="app">
        <web-map />
      </div>
    </el-col>
    <el-col :span="6">
      <div style="margin-top:50px">
        <el-select
          v-model="select.town_name"
          slot="prepend"
          placeholder="请选择乡镇名称"
        >
          <el-option label="刘家营乡" value="刘家营乡"></el-option>
          <el-option label="燕河营乡" value="燕河营乡"></el-option>
          <el-option label="潘庄乡" value="潘庄镇"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="search"
          >搜索</el-button>
        <br /><br />
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="编号" width="180">
          </el-table-column>
          <el-table-column prop="shape" label="形状" width="180">
          </el-table-column>
          <el-table-column prop="town_name" label="乡镇名字" width="180">
          </el-table-column>
          <el-table-column prop="town_code" label="乡镇编号" width="180">
          </el-table-column>
        </el-table>
      </div>

      <div style="margin-top:50px">
        <el-select
          v-model="select.town_name"
          slot="prepend"
          placeholder="请选择乡镇名称"
        >
          <el-option label="刘家营乡" value="刘家营乡"></el-option>
          <el-option label="燕河营乡" value="燕河营乡"></el-option>
          <el-option label="潘庄乡" value="潘庄镇"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="search"
          >搜索</el-button
        >
        <br /><br />
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="编号" width="180">
          </el-table-column>
          <el-table-column prop="shape" label="形状" width="180">
          </el-table-column>
          <el-table-column prop="town_name" label="乡镇名字" width="180">
          </el-table-column>
          <el-table-column prop="town_code" label="乡镇编号" width="180">
          </el-table-column>
        </el-table>
      </div>
    </el-col> -->
    <div class="commonServer" id="commonServer">
        <div class="title"></div>
        <div class="main">
            <div class="left">
                <today style="flex:1;" />
                <source-page style="flex:1.4;" />
                <pv-today style="flex:1.5;" />
                <video-page style="flex:1.6;" />
            </div>
            <div class="center">
                <cmap style="flex:2.5" />
                <pre-month style="flex:1" />
            </div>
            <div class="right">
                <topRight style="flex:1.7" />
                <province-page style="flex:1" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import CommonHeader from "@/views/CommonHeader.vue";
export default {
    data() {
        return {
            tableData: null,
            select: {
                town_name: ""
            }
        };
    },
    // 注册组件
    components: {
        CommonHeader,
        // WebMap,
    },
    created() {
        this.getTownInfo();
    },
    beforeUpdate() {},
    methods: {
        getTownInfo() {
            this.$axios.get("/map_town/all_map_town_info").then(res => {
                let result = res.data;
                console.log(result);
                this.tableData = result.data;
            });
        },
        search() {
            this.$axios.post("/map_town/search_by_name", this.select).then(res => {
                let result = res.data;
                console.log(result);
                this.tableData = result.data;
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

#app {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 800px;
    height: 800px;
}

.commonServer {
    width: 100%;
    height: 67.5rem;
    padding: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    color: #61defa;
    background-image: url("../../static/images/commonServer/bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .title {
        width: 100%;
        height: 3rem;
    }

    .main {
        flex: 1;
        display: flex;

        div {
            flex: 1;
        }

        .left {
            background-image: url("../../static/images/commonServer/left.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            display: flex;
            flex-direction: column;
        }

        .center {
            flex: 1.4;
            margin: 0 1.5rem;
            display: flex;
            flex-direction: column;
        }

        .right {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
