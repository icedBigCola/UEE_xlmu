<template>
  <div>
    <!-- 搜索选项卡片视图区 -->
    <el-card>
      <el-form label-width="60px">
        <el-row>
          <el-col :span="4">
            <h5>
              教学管理数据
            </h5>
          </el-col>
        </el-row>
       
        <el-row>
          <el-col :span="8">
            <!-- 监控时间 -->
            <!-- <el-date-picker
              v-model="value2"
              style="margin-left:10px"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="——"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions">
            </el-date-picker> -->
          </el-col>
          <el-col :span="5">
            站点
            <el-select v-model="value" placeholder="所有课程模块类别"  style="margin-left:10px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            <!-- 是否超标
            <el-select v-model="value1" placeholder="全部"  style="margin-left:10px">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select> -->
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
      <Tabs active-key="key1">
          <Tab-pane label="数据表" key="key1">
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
          </Tab-pane>
          <Tab-pane label="水质趋势图" key="key2">
            <div id="infoBox" style="width:1200px;height:400px;margin:auto"></div>
          </Tab-pane>
          <Tab-pane label="指标趋势图" key="key3">
          </Tab-pane>
      </Tabs>
      <el-row></el-row>
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
import $ from "jquery";
import scriptjs from 'scriptjs'
import echarts from 'echarts'
export default {
  data() {
    return {
      pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        // value2: null,
      pages: {
          limit: 10,
          currentPage: 1,
          total: 0
        },
      options: [
        {
          value: '所有课程模块类别',
          label: '所有课程模块类别'
        },
        {
          value: '专业基础课程模块',
          label: '专业基础课程模块'
        }, {
          value: '专业课程模块',
          label: '专业课程模块'
        },{
          value: '综合实践课程模块',
          label: '综合实践课程模块'
        },
        // {
        //   value: '石河口',
        //   label: '石河口'
        // },
        // {
        //   value: '汤河口',
        //   label: '汤河口'
        // },
        // {
        //   value: '洋河口',
        //   label: '洋河口'
        // },
        // {
        //   value: '饮马河口',
        //   label: '饮马河口'
        // },
        // {
        //   value: '新开河口',
        //   label: '新开河口'
        // },
        // {
        //   value: '戴河口',
        //   label: '戴河口'
        // },
        ],
        options2: [{
          value: '全部',
          label: '全部'
        }, {
          value: '是',
          label: '是'
        },{
          value: '否',
          label: '否'
        },
        ],
        value: '所有课程模块类别',
        // value1: '全部',
        columns8: [
                    {
                        "title": "序号",
                        "key": "ID",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                        'minWidth': 100,
                    },
                    {
                        "title": "学科名称",
                        "key": "Magor",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                        'minWidth': 100,
                    },
                    {
                        "title": "年级",
                        "key": "Grade",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                        'minWidth': 100,
                    },
                    {
                        "title": "人数",
                        "key": "num",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                        'minWidth': 100,
                    },
                    {
                        "title": "所在教研室",
                        "key": "Course_undertaker",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                        'minWidth': 100,
                    },
                    {
                        "title": "课程模块类别",
                        "key": "Course_module_category",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                        'minWidth': 100,
                    },
                    {
                        "title": "课程类别",
                        "key": "Course_category",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                        'minWidth': 100,
                    },
                    {
                        "title": "课程代码",
                        "key": "Course_Code",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                        'minWidth': 100,
                    },
                    {
                        "title": "课程名称",
                        "key": "Course_name",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",'minWidth': 100,
                    },
                    {
                        "title": "学分",
                        "key": "Credit",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                        'minWidth': 100,
                    },
                    {
                      "title":"总学时",
                      "key":"Total",
                      "sortable":true,
                      "align": "center" ,
                      'minWidth': 100,

                    },
                                       {
                      "title":"理论学时",
                      "key":"Theory",
                      "sortable":true,
                      "align": "center" ,
                      'minWidth': 100,

                    },
                                       {
                      "title":"实践学时",
                      "key":"Practice",
                      "sortable":true,
                      "align": "center" ,'minWidth': 100,


                    },
                   {
                      "title":"1",
                      "key":"one",
                      "sortable":true,
                      "align": "center" ,

                    },
                       {
                      "title":"2",
                      "key":"two",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"3",
                      "key":"three",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"4",
                      "key":"four",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"5",
                      "key":"five",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"6",
                      "key":"six",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"7",
                      "key":"seven",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"8",
                      "key":"eight",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"评估方法",
                      "key":"Assessment_method",
                      "sortable":true,
                      "align": "center" ,
                      'minWidth': 100,

                    },
                    {
                      "title":"备注",
                      "key":"remarks",
                      "sortable":true,
                      "align": "center" ,
                      'minWidth': 100,

                    },
                    
                ],
        columns9: [
                    {
                        "title": "序号",
                        "key": "ID",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "学科名称",
                        "key": "Magor",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "年级",
                        "key": "Grade",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "人数",
                        "key": "num",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "所在教研室",
                        "key": "Course_undertaker",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "课程模块类别",
                        "key": "Course_module_category",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "课程类别",
                        "key": "Course_category",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "课程代码",
                        "key": "Course_Code",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "课程名称",
                        "key": "Course_name",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                        "title": "学分",
                        "key": "Credit",
                        // "width": 250,
                        "sortable": true,
                        "align": "center",
                    },
                    {
                      "title":"总学时",
                      "key":"Total",
                      "sortable":true,
                      "align": "center" ,

                    },
                                       {
                      "title":"理论学时",
                      "key":"Theory",
                      "sortable":true,
                      "align": "center" ,

                    },
                                       {
                      "title":"实践学时",
                      "key":"Practice",
                      "sortable":true,
                      "align": "center" ,

                    },
                   {
                      "title":"1",
                      "key":"one",
                      "sortable":true,
                      "align": "center" ,

                    },
                       {
                      "title":"2",
                      "key":"two",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"3",
                      "key":"three",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"4",
                      "key":"four",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"5",
                      "key":"five",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"6",
                      "key":"six",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"7",
                      "key":"seven",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"8",
                      "key":"eight",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"评估方法",
                      "key":"Assessment_method",
                      "sortable":true,
                      "align": "center" ,

                    },
                    {
                      "title":"备注",
                      "key":"Remarks",
                      "sortable":true,
                      "align": "center" ,

                    },
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
    //导出全部的
    exportAllPolution(){
      var para = {"date":this.value};
      this.$axios.post("/xinxicourse_ku/all_nation_water_day",para).then(res => {
        let result = res.data.data
        this.data8 = result;
      });
    },
    //导出部分的
    exportPolutionByName(){
      var para = {"param":this.value};
      this.$axios.post("/xinxicourse_ku/search_by_name_export",para).then(res => {
        let result = res.data.data;
        console.log(result);
        this.data8 = result;
        console.log(this.data8)

      });
    },
    //获取分页信息分类
    getPolutionInfo() {
      this.$axios.post("/xinxicourse_ku/all_nation_water_day_page",this.pages).then(res => {
        let result = res.data.data;
        this.data7 = result.rows
        // console.log(result);
        console.log("*******************************")
        console.log(result)
        console.log(this.data7);
        console.log("*******************************")
        // for(var i = 0; i < this.data7.length; i++)
        // {
        //   this.data7[i].DO = this.data7[i].DO.toFixed(3);
        //   this.data7[i].N_TOTAL = this.data7[i].N_TOTAL.toFixed(2);
        //   this.data7[i].CODMN = this.data7[i].CODMN.toFixed(2);
        //   this.data7[i].P_TOTAL = this.data7[i].P_TOTAL.toFixed(2);
        //   this.data7[i].NH4N = this.data7[i].NH4N.toFixed(2);
        // }
        this.pages.total =result.count;
        this.tableData = result.data;
      });
    },
    //获取所有分类
    getPolutionInfoByName(){
        this.pages.para = this.value;
        this.$axios.post("/xinxicourse_ku/search_by_name",this.pages).then(res => {
        let result = res.data.data;
        console.log(result);
        this.data7 = result.rows;
     
        this.pages.total = result.count;
        // this.tableData = result.data;
         });
    },

    search(){
      this.pages.currentPage = 1;
      if (this.value !== '所有课程模块类别')
      {
        this.getPolutionInfoByName();
        this.exportPolutionByName();
      }
      else{
        this.getPolutionInfo();
        this.exportAllPolution();
      }
    },

  // //搜索
  // search2(){
  //       this.pages.currentPage = 1;
  //       if(this.value != '所有课程模块类别'){
          
  //       }
        
  // },
  

    exportData(){
      var outname = '教务管理信息' + '-' + this.value
      this.$refs.dataTable.exportCsv({
        filename: outname,
      });
    },
    async handleCurrentChange(val) {
      if (this.value !== '所有站点'){
         this.pages.currentPage = val;
         this.getPolutionInfoByName();
      }
      else{
         this.pages.currentPage = val;
         this.getPolutionInfo();
      }
    },
    async handlePageChange(val) {
      if (this.value !== '所有站点'){
        console.log(val);
        this.pages.limit = val;
        this.getPolutionInfoByName();
      }
      else{
        this.pages.limit = val;
        this.getPolutionInfo();
      }

    },
    drawLine(){
      var myChart=echarts.init(document.getElementById("infoBox"));
      if (!myChart){
      return false;
     }
    //指定图表的配置项和数据
    var option={
        //标题
        title:{
          text:'环境监测',
          left:'center'
        },

        tooltip: {
                trigger: 'axis'
        },

        grid:{
          width:1000,
          height: 300,
          containLabel:true
        },

        toolbox:{
            show:true,
            feature:{
                saveAsImage:{
                    show:true
                }
            }
        },
 
        legend:{
            // data:['污水','COD','PH值','氨氮量','总磷','总氮','六合铬']
            data:['COD','PH值','氨氮量','总磷','总氮','六合铬'],
            top:40
        },
 
        xAxis:{
            data: ["2020/8/13 10:00","2020/8/13 9:00","2020/8/13 8:00","2020/8/13 7:00","2020/8/13 6:00","2020/8/13 5:00","2020/8/13 4:00","2020/8/13 3:00","2020/8/13 2:00","2020/8/13 1:00","2020/8/13 0:00","2020/8/12 23:00","2020/8/12 22:00","2020/8/12 21:00","2020/8/1220:00","2020/8/12 19:00","2020/8/12 18:00","2020/8/12 17:00","2020/8/12 16:00","2020/8/12 15:00","2020/8/12 14:00","2020/8/12 13:00","2020/8/12 12:00"]
        },
 
        yAxis:{},
 
        series:[{
        //     name:'污水',
        //     type:'line',
        //     smooth: 0.3,
        //         color: ['#66AEDE'],
        //     data:[664.09,725.31,642.09,685.43,784.94,667.37,482.61,316.93,412.8,441.94,528,665.3,673.93,691,602.29,578.56,518.29,493.76,685.3,485.6,478.12,421.16,577.91]
        // },{ 
            name: 'COD',
                type: 'line',
                smooth: 0.3,
                color: ['#90EC7D'],
                data: [11.44,
                    10.9,
                    12.73,
                    14.3,
                    13.55,
                    13.1,
                    13.1,
                    13.1,
                    13.7,
                    14,
                    12.91,
                    12.5,
                    10.97,
                    10,
                    13.98,
                    16.8,
                    27.38,
                    36,
                    14.72,
                    5.4,
                    7.02,
                    8,
                    16.72]
        },{
            name: 'PH值',
                type: 'line',
                symblo: 'none',
                smooth: 0.3,
                color: ['#669966'],
                data: [0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0]
            }, {
                name: '氨氮量',
                type: 'line',
                symblo: 'none',
                smooth: 0.3,
                color: ['#9571FF'],
                data: [7.6,
                    7.91,
                    8.18,
                    9.8,
                    10.63,
                    8.74,
                    6.32,
                    4.15,
                    5.65,
                    6.19,
                    6.82,
                    8.32,
                    7.4,
                    6.91,
                    8.42,
                    9.72,
                    14.19,
                    17.78,
                    10.09,
                    2.62,
                    3.36,
                    3.37,
                    9.66]
            }, {
                name: '总磷',
                type: 'line',
                symblo: 'none',
                smooth: 0.3,
                color: ['#9951B2'],
                data: [0.12,
                    0.12,
                    0.11,
                    0.1,
                    0.12,
                    0.12,
                    0.12,
                    0.12,
                    0.1,
                    0.1,
                    0.14,
                    0.14,
                    0.13,
                    0.13,
                    0.13,
                    0.13,
                    0.15,
                    0.59,
                    0.14,
                    0.11,
                    0.1,
                    0.1,
                    0.1]
            }, {
                name: '总氮',
                type: 'line',
                symblo: 'none',
                smooth: 0.3,
                color: ['#767676'],
                data: [8.57,
                    8.81,
                    9.54,
                    9.63,
                    9.84,
                    9.62,
                    9.03,
                    9.09,
                    9.01,
                    9.23,
                    9.3,
                    9.32,
                    9.35,
                    9.34,
                    9.3,
                    9.25,
                    9.12,
                    9.1,
                    9.03,
                    9.59,
                    11.11,
                    11.11,
                    11.11]
            }, {
                name: '六合铬',
                type: 'line',
                symblo: 'none',
                smooth: 0.3,
                color: ['#FBA7AA'],
                data: [0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
    ]
    };
    //使用刚刚指定的配置项和数据项显示图表
    myChart.setOption(option);
    },
  },
  mounted(){
    this.drawLine();
  },
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