<template>
  <div class="body">
    <!-- 公共标题部分 -->
    <common-header> </common-header>
    
    <!-- 弹窗部分 -->
    <Modal
        v-model="modal10"
        width="85%"
        footer-hide="false"
        class-name="vertical-center-modal">
        <h6 style="color:#000">
          {{stationName}}
        </h6>
        <el-card class="box-card" style="margin-top:12px">
          <h6 style="color:#000">
            基本信息
          </h6>
        </el-card>
        <el-card class="box-card" style="margin-top:12px">
          <h6 style="color:#000">
            监测数据
          </h6>
        </el-card>
        <el-card class="box-card" style="margin-top:12px">
          <Tabs type="card">
              <TabPane icon="md-trending-up" label="趋势图">
                <div id="infoBox" style="width:1200px;height:400px;margin:auto"></div>
              </TabPane>
              <TabPane label="数据表" icon="md-grid">
                <Table border :columns="columns5" :data="data5"></Table>
              </TabPane>
          </Tabs>
        </el-card>
    </Modal>
    <!-- <div id="app">
      <web-map style="width:100%;height:auto"/>
    </div> -->
    <!-- 	地图控制按钮-->
    <web-map v-on:mapClickEvent="showDialog" style="width:100%;height:800px"/>
<div class="position-fixed fixed-rt1">
  <div class="bg-b p-2"> 
  	<i class="iconfont icon-ditudingwei p-2"></i> 
  	<i class="iconfont icon-ditudingwei p-2"></i> 
  	<i class="iconfont icon-ditudingwei p-2"></i> 
  	<i class="iconfont icon-ditudingwei p-2" @click="restart()"></i> 
  	<i class="iconfont icon-ditudingwei p-2"></i> 
  </div>
</div>
<!--地图控制  end--> 
<!-- 		左侧信息-->
<div class="position-fixed fixed-lt" > <a href="#waterQuality" class="btn btn-secondary bg-b" data-toggle="collapse" >水质</a> 
  <!-- 		btn-primary-->
  <div id="waterQuality" class="collapse bg-b" style="width: 320px;">
    <div class="border border-primary mb-3">
      <div class="container p-0 line-b">
        <h5 class="pt-3 pl-3 pb-2">河流水质一览表</h5>
        <table class="table mb-2">
          <thead>
                  <tr>
                    <th>序号</th>
                    <th>河流名</th>
                    <th>监测时间</th>
                    <th>当前水质</th>
                    <th>目标水质</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in riverResult" v-bind:key="index" @click="jump(index)" class="riverCol">
                    <td>{{index+1}}</td>
                    <td style="width:70px">{{riverNameResult[index]}}</td>
                    <td style="width:100px">{{$moment(riverTimeResult[index]).format('MM-DD HH:mm')}}</td>
                    <td>
                      <div class="szType" v-bind:class="{szType6:riverNowQuality[index]=='劣Ⅴ',
                      szType1:riverNowQuality[index]=='Ⅰ',
                      szType2:riverNowQuality[index]=='Ⅱ',
                      szType3:riverNowQuality[index]=='Ⅲ',
                      szType4:riverNowQuality[index]=='Ⅳ',
                      szType5:riverNowQuality[index]=='V'}">
                      {{riverNowQuality[index]}}
                    </div>
                    </td>
                    <td>
                      <div class="szType" v-bind:class="{szType6:riverTargetQuality[index]=='劣Ⅴ',
                      szType1:riverTargetQuality[index]=='Ⅰ',
                      szType2:riverTargetQuality[index]=='Ⅱ',
                      szType3:riverTargetQuality[index]=='Ⅲ',
                      szType4:riverTargetQuality[index]=='Ⅳ',
                      szType5:riverTargetQuality[index]=='V'}">
                        {{riverTargetQuality[index]}}
                        </div>
                    </td>
                  </tr>
                </tbody>  
        </table>
      </div>
    </div>
  </div>
</div>
<!-- 	左侧信息 end--> 
<!--	右侧信息-->
<div class="position-fixed fixed-rt2 bg-b">
  <div class="text-center">
    <div>
      <div class="btn btn-secondary bg-b" @click="waterMonitor()">
        <div class="sp">断面水质</div>
        <span class="px-2 szType szType2">0</span></div>
    </div>
    <div>
      <div class="btn btn-secondary bg-b" @click="pollutionMonitor()">
        <div class="sp">污染源</div>
        <span class="px-2 szType szType6">0</span></div>
    </div>
    <div>
      <div class="btn btn-secondary bg-b" @click="adminiMonitor()">
        <div class="sp">治理项目</div>
        <span class="px-2 szType szType3">0</span></div>
    </div>
  </div>
</div>
<div class="position-fixed fixed-rt3 bg-b" id="popBox1" v-show="water">
  
  <div class="border border-primary mb-3 bg-b"> 
    <!--国控断面-->
    <div class="container p-0 line-b"> 
     		<a rel="#" class="position-absolute absolute-rt"  @click="closeWaterMonitor()" ><i class="iconfont icon-guanbi" ></i></a>
      <h5 class="pt-3 pl-3 pb-2 bg-b">国控断面 <span class="date fr f14 mt10 mr10"></span> </h5>
      <table  class="table mb-2">
        <thead>
          <tr>
            <th>序号</th>
            <th>站点名称</th>
            <th>监测时间</th>
            <th>当前水质</th>
            <th>目标水质</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>2</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
    <!--国控断面 end --> 
    
    <!--手工断面-->
    
    <h5 class="pt-3 pl-3 pb-2 bg-b">手工断面 <span class="date fr f14 mt10 mr10"></span> </h5>
    <table  class="table mb-2">
      <thead>
        <tr>
          <th>序号</th>
          <th>断面名称</th>
          <th>采集时间</th>
          <th>当前水质</th>
          <th>目标水质</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <th>2</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </table>
<!--    手工断面 end-->
  </div>
</div>

<!--右侧信息  end -->
<!--地图图层控制和图注信息-->
<div class="position-fixed fixed-rb"> <div class="btn btn-secondary bg-b" v-bind:class="{layer_choose:layer1}" @click="bottomShow()"> <div  ><i class="iconfont icon-shezhi2" ></i></div></div></div>
<!--地图图层控制-->
<div class="position-fixed fixed-rb1 bg-b" id="popBox2" v-show="station_show">
	<div class="border border-primary"><div class="container p-0 line-b">
		<a rel="#" class="position-absolute absolute-rt" @click="closeStation()"><i class="iconfont icon-guanbi"></i></a>		
		<ul class="m-3 shezhi">
		  <li class="btn btn-secondary btn accordion"  @click="layerShow(3)"><i class="iconfont icon-ditudianwei_huaban1 pr-2" v-bind:class="{layer_choose:layerChoose3,layer_not_choose:!layerChoose3}"></i><span v-bind:class="{layer_choose:layerChoose3,layer_not_choose:!layerChoose3}">国控水质站</span></li>
		  <li class="btn btn-secondary bg-b" @click="layerShow(2)"><i class="iconfont icon-haiyang pr-2" ></i><span>海洋水质站</span></li>
		  <li class="btn btn-secondary bg-b" @click="layerShow(4)"><i class="iconfont icon-shougong pr-2" v-bind:class="{layer_choose:layerChoose4,layer_not_choose:!layerChoose4}"></i><span v-bind:class="{layer_choose:layerChoose4,layer_not_choose:!layerChoose4}">手工断面</span></li>
		  <li class="btn btn-secondary bg-b" @click="layerShow(9)"><i class="iconfont icon-yuchang pr-2" ></i><span>浴场</span></li>
		  <li class="btn btn-secondary bg-b" @click="layerShow(1)"><i class="iconfont icon-kongqi1 pr-2" ></i><span>空气质量站</span></li>
		  <li class="btn btn-secondary bg-b" @click="layerShow(0)"><i class="iconfont icon-zaosheng1 pr-2" ></i><span>噪声监测站</span></li>
		  <li class="btn btn-secondary bg-b" @click="layerShow(9)"><i class="iconfont icon-gongye pr-2" ></i><span>工业企业</span></li>
		  <li class="btn btn-secondary bg-b" @click="layerShow(9)"><i class="iconfont icon-wushuichulichang pr-2" ></i><span>污水处理厂</span></li>
    	</ul>
	</div></div>
</div>
<!--地图图层控制  end-->
<div class="position-fixed fixed-rb2 bg-b" id="popBox3" v-show="pollution_show">
	<div class="border border-primary"><div class="container px-0 pb-3 line-b">
		<a  class="position-absolute absolute-rt" @click="closePollution()"><i class="iconfont icon-guanbi"></i></a>	
		<div class="legend-cite">
		  <cite>AQI :</cite>
		  <div class="legend-small">
			<span class="s1">离线</span>
			<span class="s2">O值</span>
			<span class="s3">优</span>
			<span class="s4">良</span>
			<span class="s5">轻度</span>
			<span class="s6">中度</span>
			<span class="s7">重度</span>
			<span class="s8">严重</span>
		  </div>
		</div>
		<div class="legend-cite">
		  <cite>河流水质 :</cite>
		  <div class="legend-small">
			<span class="sz1">缺失</span>
			<span class="sz2">I</span>
			<span class="sz3">II</span>
			<span class="sz4">III</span>
			<span class="sz5">IV</span>
			<span class="sz6">V</span>
			<span class="sz7">劣VI</span>
		  </div>
		</div>
		<div class="legend-cite">
		  <cite>污染源 :</cite>
		  <div class="legend-small">
			<span class="s1">离线</span>
			<span class="s4">正常</span>
			<span class="s7">超标</span>
		  </div>
		</div>
		<div class="legend-cite">
		  <cite>噪声 :</cite>
		  <div class="legend-small">
			<span class="s1">离线</span>
			<span class="s4">正常</span>
			<span class="s7">超标</span>
		  </div>
		</div>
	</div></div>
</div>
  </div>
</template>

<script>
import CommonHeader from "@/views/CommonHeader.vue";
import WebMap from "@/views/WebMap.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import scriptjs from 'scriptjs'
import echarts from 'echarts'
import 'vue-popup-mixin/dist/VuePopupMixin.css';
import Popup from 'vue-popup-mixin'


export default {
  data() {
    return {
      //[119.7791, 39.967]
      station_show : false,
      pollution_show : false,
      water: false,
      location:[[119.777971, 39.970793], //1 石河
      [119.708531, 39.947625], //2 //沙河
      [119.7791, 39.967], //3
      [119.623416, 39.931958], //4 新开河
      [119.5625, 39.9205], //5 汤河
      [119.570319, 39.920141], //6
      [119.425428, 39.806131], //7 戴河
      [119.411355, 39.789651], //8 洋河
      [119.353891, 39.75125], //9 //人造河
      [119.326701, 39.69717], //10 东沙河
      [119.287486, 39.674225], //11
      [119.279012, 39.588756] //12
      ,[119.664331, 39.941622]], //13
      layer3 : true,
      layer4 : true,
      riverList:["石河","沙河","排洪河","新开河","汤河","新河","戴河","洋河","人造河","东沙河","饮马河","七里海","滦河"],
      riverResult:[],
      riverNameResult:[],
      riverTimeResult:[],
      riverNowQuality:[],
      riverTargetQuality:[],
      layerChoose1: true,
      layerChoose2: true,
      layerChoose3: true,
      layerChoose4: true,
      drawer: false,
      direction: 'btt',
      dialogVisible: false,
      modal10: false,
      stationName: '测试站',
      columns5: [
                    {
                        title: 'Date',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
      
    };
  },
  components: {
    CommonHeader,
    WebMap
  },
  created(){
    this.getRiverInfo();
  },
  methods:{
    showDialog(data){
      this.modal10 = true;
      this.stationName = data;
      console.log(data);
    },
    bottomShow(){
      this.station_show = !this.station_show; //打开站点
      this.pollution_show = !this.pollution_show; //打开污染源
      console.log(document.getElementById("r1"));
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    closeStation(){
      this.station_show = false; //关闭站点
    },
    closePollution(){
      this.pollution_show = false; //关闭污染源
    },
    waterMonitor(){
      this.water = !this.water;
      this.drawer = true;
      this.drawLine();
    },
    pollutionMonitor(){
      this.water = !this.water;
    },
    adminiMonitor(){
      this.water = !this.water;
    },
    closeWaterMonitor(){
      this.water = false;
    },
    jump(id){
      console.log(id);
      this.$store.state.view.goTo({
        center: this.location[id],
        zoom: 15
      }, {
        speedFactor: 0.09
      });
    },
    restart(){
      this.$store.state.view.goTo({
        center: [119.183, 39.774],
        zoom: 10
      }, {
        speedFactor: 0.09
      });
    },
    layerShow(layer){
      if(layer == 3){
        this.layerChoose3 = !this.layerChoose3;
        if(this.layer3)
        {
          this.layer3 = false;
          this.$store.state.featureLayer3.visible = this.layer3;
          console.log(this.$store.state.featureLayer3.fields[0]);
        }
        else{
          this.layer3 = true;
          this.$store.state.featureLayer3.visible = this.layer3;
        }
      }
      else if(layer == 4){
        this.layerChoose4 = !this.layerChoose4;
        if(this.layer4)
        {
          this.layer4 = false;
          this.layerChoose3 = true;
          this.$store.state.featureLayer4.visible = this.layer4;
        }
        else{
          this.layer4 = true;
          this.$store.state.featureLayer4.visible = this.layer4;
        }
      }
    },
    getRiverInfo() {
      var info = {"rivers":this.riverList};
      this.$axios.post("/river_hour/search_recent",info).then(res => {
        this.riverResult = res.data.data;
        console.log(this.riverResult);
        for(var i=0;i <this.riverResult.length;i++)
        {
          if(this.riverResult[i] != null)
          {
            this.riverNameResult[i] = this.riverResult[i].RIVERNAME;
            let newDate = this.riverResult[i].MONITORTIME;
            this.riverTimeResult[i] = newDate;
            this.riverNowQuality[i] = this.riverResult[i].MAXWATERQUALITYCHAR;
            this.riverTargetQuality[i] = this.riverResult[i].WATERQUALITYTARGETCHAR;
          }
        }
      });
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
    }
  },
  mounted(){
    this.drawLine();
  },
  beforeDestroy() {}
};
</script>
<style scoped>
.body {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  /* background:#398144; */
}

.layer_choose{
  color: #75fa4c;
}

.layer_not_choose{
  color: #cdcdcd;
}

.riverCol:hover{
    background:#223b6d;
}

#app {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

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
    padding:0 20px;
    min-width: 1366px;
}
.body{
  width: 100%;
    height: auto;
    color:white;
    /* overflow: hidden;*/
    background: #000 url(./../img/true.png) no-repeat;
    background-size: 100% 100%;
	  font-size:14px;
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

tr,
td {
  color: #fff;
  font-weight: 600;
}

.h1,
h2,
h3,
h4,
h5,
h6,
h7 {
  color: #fff;
  font-weight: 900;
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
/*content 结束*/


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

@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1981801_7tww0rzi8o8.eot?t=1596439825358'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1981801_7tww0rzi8o8.eot?t=1596439825358#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1981801_7tww0rzi8o8.woff?t=1596439825358') format('woff'),
  url('//at.alicdn.com/t/font_1981801_7tww0rzi8o8.ttf?t=1596439825358') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1981801_7tww0rzi8o8.svg?t=1596439825358#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 1em;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-kongqi1:before {
  content: "\e600";
}

.icon-guokong:before {
  content: "\e661";
}

.icon-zaosheng1:before {
  content: "\e606";
}

.icon-wushuichulichang:before {
  content: "\e746";
}

.icon-ditudianwei_huaban1:before {
  content: "\e69d";
}

.icon-gongye:before {
  content: "\e602";
}

.icon-yuchang:before {
  content: "\e60e";
}

.icon-shougong:before {
  content: "\eda8";
}

.icon-haiyang:before {
  content: "\e8e8";
}

.icon-ditudingwei:before {
  content: "\e625";
  font-size:1.5rem;
}

.icon-shezhi2:before {
  content: "\e605";
	font-size: 1.8rem;
}

.icon-guanbi:before {
  content: "\e603";
}

.icon-guanbi2fill:before {
  content: "\e724";
}

.icon-guanbi2:before {
  content: "\e725";
}

.icon-xiangshang2:before {
  content: "\e76e";
}

.icon-ditu:before {
  content: "\e614";
}

.icon-arrow-up-bold:before {
  content: "\e685";
}

/* CSS Document */
.legend-cite cite{display:inline-block;flex:0 0 90px;font-weight:bolder;text-align:right;padding-right:15px;box-sizing:border-box;white-space:nowrap;font-weight:normal}
/*.break-area{display:flex;align-items:center}*/
.legend-cite{margin-top:20px;display:flex}
.legend-small{flex:1;display:flex}
.legend-small span{width:3rem;font-size:12px;text-align:center;position:relative;height:25px}
.legend-small span::after{display:block;content:'';position:absolute;bottom:0;left:0;right:0;height:7px}
.legend-small span.s1::after{background:#aaa}
.legend-small span.s2::after{background:#d2eff4}
.legend-small span.s3::after{background:#3cbee6}
.legend-small span.s4::after{background:#74ba4e}
.legend-small span.s5::after{background:#fdfe00}
.legend-small span.s6::after{background:#fd8201}
.legend-small span.s7::after{background:#fe0103}
.legend-small span.s8::after{background:#7f0327}
.legend-small span.sz1::after{background:#aaa}
.legend-small span.sz2::after{background:#d2eff4}
.legend-small span.sz3::after{background:#3cbee6}
.legend-small span.sz4::after{background:#74ba4e}
.legend-small span.sz5::after{background:#eeec41}
.legend-small span.sz6::after{background:#ef8641}
.legend-small span.sz7::after{background:#e2232d}

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
    padding:0 20px;
    min-width: 1366px;
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

.dialog {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    width: 90%;
  }

  .dialog-content {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
  }

  .dialog-fade-transition {
    transition: opacity .3s linear;
  }

  .dialog-fade-enter,
  .dialog-fade-leave {
    opacity: 0;
  }

  .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
