<template>
  <div>
    <!-- 搜索选项卡片视图区 -->
    <el-card>
      <el-form label-width="60px">
        <el-row>
          <el-col :span="4">
            <h5>
              企业基本信息
            </h5>
          </el-col>
        </el-row>
       
        <el-row>
          <!-- 要搜索学生的学号 -->
          <el-col :span="4">
            <el-select v-model="value" placeholder="全部" @change="search()">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <!-- 搜索按钮 -->
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
          </el-col>
          <!-- 导出Excel -->
          <el-col :span="2">
            <el-button type="warning" icon="el-icon-download" @click="exportData()">导出</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!-- 学生列表卡片视图区 -->
    <el-card>
      <el-row></el-row>
      <div style="height:400px;overflow:scroll">
        <Table stripe :columns="columns8" :data="data7" size="default" ref="table"></Table>
        <Table stripe :columns="columns9" :data="data8" size="default" ref="dataTable" v-show="false"></Table>
      </div>
      <br>
      <el-pagination
          @current-change="handleCurrentChange"
          @size-change="handlePageChange"
          :current-page="pages.currentPage"
          :page-size="pages.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pages.total"
        >
      </el-pagination>
      <!-- <Page :total="totalP" show-sizer show-total show-elevator
        :page-size="pageSize"
      /> -->
      <!-- <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> Export source data</Button>
      <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> Export sorting and filtered data</Button>
      <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> Export custom data</Button> -->
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: {
          limit: 10,
          currentPage: 1,
          total: 0
        },
      options: [{
          value: '东北大学',
          label: '东北大学'
        }, {
          value: '七里海',
          label: '七里海'
        },{
          value: '全部',
          label: '全部'
        },
        ],
        value: '全部',
        columns8: [
                    {
                        "title": "污染源名称",
                        "key": "OBJNAME",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "类型编码",
                        "key": "TYPECODE",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "污染企业类型",
                        "key": "TYPENAME",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "排入河流",
                        "key": "INRIVER",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    }
                ],
        columns9: [
                    {
                        "title": "污染源名称",
                        "key": "OBJNAME",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "类型编码",
                        "key": "TYPECODE",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "污染企业类型",
                        "key": "TYPENAME",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "排入河流",
                        "key": "INRIVER",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    }
                ],
        data7: [],
        data8: [],
        }
  },
  created() {
    this.getPolutionInfo();
    this.exportAllPolution();
    // this.exportPolutionByName();
  },
  methods: {
    exportAllPolution(){
      this.$axios.get("/map_enterprise/all_map_enterprise").then(res => {
        let result = res.data.data;
        this.data8 = result;
        // this.tableData = result.data;
      });
    },
    exportPolutionByName(){
      var para = {"param":this.value};
      this.$axios.post("/map_enterprise/search_by_name_export",para).then(res => {
        let result = res.data.data;
        // console.log(result);
        this.data8 = result;
        // this.tableData = result.data;
      });
    },
    getPolutionInfo() {
      this.$axios.post("/map_enterprise/all_map_enterprise_page",this.pages).then(res => {
        let result = res.data.data;
        this.data7 = result.rows;
        this.pages.total =result.count;
        console.log(result);
        // this.tableData = result.data;
      });
    },
    getPolutionInfoByName(){
        this.pages.para = this.value;
        this.$axios.post("/map_enterprise/search_by_name",this.pages).then(res => {
        let result = res.data.data;
        console.log(result);
        this.data7 = result.rows;
        this.pages.total = result.count;
        // this.tableData = result.data;
         });
    },
    search(){
      this.pages.currentPage = 1;
      if (this.value !== '全部')
      {
        this.getPolutionInfoByName();
        this.exportPolutionByName();
      }
      else{

        this.getPolutionInfo();
        this.exportAllPolution();
      }
    },
    exportData(){
      var outname = '企业基本信息' + '-' + this.value
      this.$refs.dataTable.exportCsv({
        filename: outname,
      });
    },
    async handleCurrentChange(val) {
      if (this.value !== '全部'){
         this.pages.currentPage = val;
         this.getPolutionInfoByName();
      }
      else{
         this.pages.currentPage = val;
         this.getPolutionInfo();
      }
    },
    async handlePageChange(val) {
      if (this.value !== '全部'){
        console.log(val);
        this.pages.limit = val;
        this.getPolutionInfoByName();
      }
      else{
        this.pages.limit = val;
        this.getPolutionInfo();
      }

    }
  }
};
</script>

<style lang="css" scoped>
.el-button {
  margin-left: 30px;
}

.el-card{
  margin-top:20px;
}
</style>