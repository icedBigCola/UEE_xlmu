<template>
  <div class="body">
    <common-header> </common-header>
    <!-- 
    <br />
    <div id="app">
      <web-map />
    </div>
  </div> -->
    <div class="header">
      <div class="bg_header">
        <div class="header_nav float-left t_title">
          教学运行状态监管平台
        </div>
      </div>
    </div>
    <br />
    <!-- content -->
    <div class="container-fluid my-3 px-4">
      <div class="row">
        <!-- left module -->
        <div class="col-3 px-2">
          <!-- 河流水质一览表 -->
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
                  <tr v-for="(item,index) in riverResult" v-bind:key="index" class="riverCol">
                    <td>{{index+1}}</td>
                    <td>{{riverNameResult[index]}}</td>
                    <td>{{$moment(riverTimeResult[index]).format('MM-DD HH:mm')}}</td>
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
          <!-- 河流水质一览表 end-->

          <!-- 水质日历 -->
          <div class="border border-primary" mb-3>
            <div class="line-b" id="test1" style="height:284px">
              <h5>水质日历</h5>
                <el-col :span="14">
                    <calendar v-bind:calendarData="calendarData" ref="calendarChild" v-on:ListentoChildEvent="showCalendarData">
                    </calendar>
                </el-col>
                <el-col :span="10">
                  <div>
                    <RadioGroup v-model="calendarData.type" size="large" style="zoom:115%;margin-top:8px">
                      <Radio label="河流"></Radio>
                      <Radio label="浴场" style="margin-left:10px"></Radio>
                    </RadioGroup>
                  </div>
                <el-col :span="22">
                  <el-select v-model="calendarData.model1" placeholder="石河" style="margin-top:10px;font-size:20px" @change="calendarChange()">
                    <el-option
                      v-for="item in cityList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <!-- <Select size="large" placement="top" on-change="calendarChange" v-model="calendarData.model1" style="margin-top:10px;font-size:20px" placeholder="石河">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value" style="font-size:50px">{{ item.label }}</Option>
                  </Select> -->
                  I - {{showList[0]}}
                  II - {{showList[1]}}
                  III - {{showList[2]}}
                  IV - {{showList[3]}}
                  V - {{showList[4]}}
                  VI - {{showList[5]}}
                  缺失 - {{showList[6]}}
                </el-col>
                </el-col>
                <div>
                </div>
            </div>
          </div>
          <!-- 水质日历 end-->
        </div>

        <!-- center module -->
        <div class="col-6 px-2">
          <div class="border border-primary">
            <div class="p-2 line-b"></div>
            <div id="app" class="col-12 px-2">
              <web-map />
            </div>
          </div>
        </div>

        <!-- right module -->
        <div class="col-3 px-2">
          <!-- 浴场水质 -->
          <div class="border border-primary mb-3">
            <div class="container p-0">
              <h5 class="pt-3 pl-3 pb-2">浴场水质</h5>
              <table class="table mb-2 line-b">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>名称</th>
                    <th>采集时间</th>
                    <th>当前水质</th>
                    <th>目标水质</th>
                  </tr>
                </thead>

                <tbody>
                   <tr v-for="(item,index) in BathAD_Result" v-bind:key="index" class="riverCol">
                    <td>{{index+1}}</td>
                    <td>{{BathAD_nameList[index]}}</td>
                    <td>{{$moment(BathAD_TimeResult[index]).format('MM-DD HH:mm')}}</td>
                    <td>
                      <div class="szType" v-bind:class="{szType6:BathAD_Quality_WQ[index]=='劣Ⅴ',
                      szType1:BathAD_Quality_WQ[index]=='Ⅰ',
                      szType2:BathAD_Quality_WQ[index]=='Ⅱ',
                      szType3:BathAD_Quality_WQ[index]=='Ⅲ',
                      szType4:BathAD_Quality_WQ[index]=='Ⅳ',
                      szType5:BathAD_Quality_WQ[index]=='V'}">
                      {{BathAD_Quality_WQ[index]}}
                    </div>
                    </td>
                    <td>
                      <div class="szType" v-bind:class="{szType6:BathAD_Quality_WQLTGVCHAR[index]=='劣Ⅴ',
                      szType1:BathAD_Quality_WQLTGVCHAR[index]=='Ⅰ',
                      szType2:BathAD_Quality_WQLTGVCHAR[index]=='Ⅱ',
                      szType3:BathAD_Quality_WQLTGVCHAR[index]=='Ⅲ',
                      szType4:BathAD_Quality_WQLTGVCHAR[index]=='Ⅳ',
                      szType5:BathAD_Quality_WQLTGVCHAR[index]=='V'}">
                        {{BathAD_Quality_WQLTGVCHAR[index]}}
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- 噪声环境质量 -->
          <div class="border border-primary mb-3">
            <div class="container p-0">
              <h5 class="pt-3 pl-3 pb-2">
                噪声环境质量<small class="fr mr-2">{{nowDate}}</small>
              </h5>
              <table class="table mb-2 line-b">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>站名</th>
                    <th>等效值</th>
                    <th>是否超标</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in noiseResult" v-bind:key="index" class="riverCol">
                    <td>{{index+1}}</td>
                    <td>{{noiseName[index]}}</td>
                    <td>{{noiseValue[index]}}</td>
                    <td>
                        <div class="szType" v-bind:class="{szType3:noiseLevel[index]=='正常',
                        szType6:noiseLevel[index]=='超标',
                        }">
                        {{noiseLevel[index]}}
                       </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- 空气质量 -->
          <div class="border border-primary mb-3">
            <div class="container p-0">
              <h5 class="pt-3 pl-3 pb-2">
                空气质量<small class="fr mr-2">{{nowDate}}</small>
              </h5>
              <table class="table mb-2 line-b">
                <thead>
                  <tr>
                    <th>站名</th>
                    <th>AQI</th>
                    <th>PM2.5</th>
                    <th>首要污染物</th>
                    <th>等级目标</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in airList" v-bind:key="index" class="riverCol">
                    <td>{{airList[index]}}</td>
                    <td>{{AQIResult[index]}}</td>
                    <td>{{PMResult[index]}}</td>
                    <td>{{MainResult[index]}}</td>
                    <td>
                        <div class="szType" v-bind:class="{szType3:LevelResult[index]=='优',
                        szType6:LevelResult[index]=='严重污染',
                        szType5:LevelResult[index]=='轻度污染',
                        szType4:LevelResult[index]=='良',
                        }">
                        {{LevelResult[index]}}
                       </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "@/views/CommonHeader.vue";
import WebMap from "@/views/WebMap.vue";
import Calendar from "@/views/calendar.vue";
import dayjs from 'dayjs';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Vue from "vue";

export default {
  data(){
    return{
      nowDate: this.parseDate2Str(new Date(), 'YYYY-MM-DD HH:mm:ss'),
      timer: '',
      calendarData : {
        type: '河流',
        model1: '石河',
      },
      type: '河流',
      cityList: [
                    {
                        value: '石河',
                        label: '石河'
                    },
                    {
                        value: '沙河',
                        label: '沙河'
                    },
                    {
                        value: '排洪河',
                        label: '排洪河'
                    },
                    {
                        value: '新开河',
                        label: '新开河'
                    },
                    {
                        value: '汤河',
                        label: '汤河'
                    },
                    {
                        value: '新河',
                        label: '新河'
                    },
                    {
                        value: '戴河',
                        label: '戴河'
                    },
                    {
                        value: '洋河',
                        label: '洋河'
                    },
                    {
                        value: '人造河',
                        label: '人造河'
                    },
                    {
                        value: '东沙河',
                        label: '东沙河'
                    },
                    {
                        value: '饮马河',
                        label: '饮马河'
                    },
                    {
                        value: '七里海',
                        label: '七里海'
                    },
                    {
                        value: '滦河',
                        label: '滦河'
                    }
                ],
                //左上河流相关
                riverList:["石河","沙河","排洪河","新开河","汤河","新河","戴河","洋河","人造河","东沙河","饮马河","七里海","滦河"],
                riverResult:[],
                riverNameResult:[],
                riverTimeResult:[],
                riverNowQuality:[],
                riverTargetQuality:[],
                //左下日历相关展示数据
                showList:[],
                // 浴场水质
                BathAD_nameList:["中直","老虎石","国务院中","北京军区","国务院东","军委","专家","省办"],
                BathAD_Result:[],
                BathAD_NameResult:[],
                BathAD_TimeResult:[],
                BathAD_Quality_WQ:[],
                BathAD_Quality_target:[],
                BathAD_Quality_WQLTGVCHAR:[],
                //噪声
                noiseList:["北戴河技术交流中心","国海宾馆","河北省医疗气功医院","金山宾馆","碧海新村","锦都大酒店"],
                noiseResult:[],
                noiseName:[],
                noiseValue:[],
                noiseLevel:[],
                //空气
                airList:["北戴河园林局","北戴河联峰山公园","北戴河环保分局"],
                airResult:[],
                AQIResult:[],
                PMResult:[],
                MainResult:[],
                LevelResult:[],
    }
  },
  components: {
    CommonHeader,
    WebMap,
    Calendar
  },
  methods:{
    parseDate2Str(date,format){
      format = format || 'YYYY-MM-DD HH:mm:ss';
      return dayjs(date).format(format);
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
    getaddressInfo(){
        var BathInfo = {"BathAD":this.BathAD_nameList};
        this.$axios.post("/WATERQUALITY_BATH/WATERQUALITY_BATH2",BathInfo).then(res => {
        console.log(res);
        this.BathAD_Result = res.data.data;
        console.log(this.BathAD_Result);
        for(var j= 0 ;j<this.BathAD_Result.length;j++){
          this.BathAD_NameResult[j] = this.BathAD_Result.POINTNAME;
          let lasttime = this.BathAD_Result[j].MONITORTIME;
          this.BathAD_TimeResult[j] = lasttime;
          this.BathAD_Quality_WQ[j] = this.BathAD_Result[j].WQ;
          this.BathAD_Quality_target[j] = this.BathAD_Result[j].WATERQUALITYTARGET;
          this.BathAD_Quality_WQLTGVCHAR[j] = this.BathAD_Result[j].WQLTGVCHAR;
        }
        console.log(this.BathAD_Quality_WQ);
        });
    },
    getNoiseInfo(){
      var info = {"noise":this.noiseList};
      this.$axios.post("/noise/recent_noise",info).then(res => {
        this.noiseResult = res.data.data;
        console.log(this.noiseResult);
        for(var i=0;i <this.noiseResult.length;i++)
        {
          if(this.noiseResult[i] != null)
          {
            this.noiseName[i] = this.noiseResult[i].POINTNAME;
            this.noiseValue[i] = this.noiseResult[i].LEQ;
            this.noiseLevel[i] = this.noiseResult[i].ISOVER;
          }
        }
      });
    },
    getAirInfo(){
      var info = {"air":this.airList};
      this.$axios.post("/air/recent_air",info).then(res => {
        this.airResult = res.data.data;
        console.log(this.airResult);
        for(var i=0;i <this.airResult.length;i++)
        {
          if(this.airResult[i] != null)
          {
            this.AQIResult[i] = this.airResult[i].AQI;
            this.PMResult[i] = this.airResult[i].PM25;
            this.MainResult[i] = this.airResult[i].MAINPOLLUTANT;
            this.LevelResult[i] = this.airResult[i].LEVEL;
          }
        }
      });
    },
    calendarChange(){
      this.$refs.calendarChild.getRiverInfo();
    },
    showCalendarData(data){
      console.log("接收到的数据",data);
      for(var i = 0; i < data.length; i++)
      {
        Vue.set(this.showList,i,data[i]);
      }
    }
  },
  created(){
    this.timer = setInterval(()=>{
      this.nowDate = this.parseDate2Str(new Date(), 'YYYY-MM-DD');
    },1000);
    this.getRiverInfo();
    this.getaddressInfo();
    this.getNoiseInfo();
    this.getAirInfo();
  },
  mounted() {
  },
  beforeDestroy() {
    if(this.timer){
      clearInterval(this.timer);
    }
  }
};
</script>
<style scoped>
@charset "utf-8";
/* td tr{
color: rgba(255,255,255,0.6)
} */

.riverCol:hover{
    background:#223b6d;
}

.input_box{
  font-size: 30px;
  color: #000;
}
/* CSS Document */
.t_title {
  width: 100%;
  height: 100px;
  text-align: center;
  font-size: 2rem;
  line-height: 80px;
  color: #fff;
}
.border-primary {
  position: relative;
  box-shadow: 0 0 10px #2c58a6;
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
.border-primary::before,
.border-primary::after {
  position: absolute;
  width: 22px;
  height: 22px;
  content: "";
}
.border-primary::before {
  background: url(../img/line-lt.png) no-repeat;
  left: -3px;
  top: -3px;
}
.border-primary::after {
  background: url(../img/line-rt.png) no-repeat;
  right: -3px;
  top: -3px;
}

.line-b::before,
.line-b::after {
  position: absolute;
  width: 22px;
  height: 22px;
  content: "";
}
.line-b::before {
  background: url(../img/line-rb.png) no-repeat;
  right: -3px;
  bottom: -3px;
}
.line-b::after {
  background: url(../img/line-lb.png) no-repeat;
  left: -3px;
  bottom: -3px;
}

.table {
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
}
.table td,
.table th {
  padding: 0.5rem 0.25rem;
  vertical-align: top;
  border-top: 1px dotted #025086;
}
.table thead th {
  border: 1px solid #025086;
  background-color: rgba(2, 80, 134, 0.3);
}
.table tbody + tbody {
  border-top: 0px solid #dee2e6;
}
.szType {
  width: 70%;
  border-radius: 0.2rem;
  margin: 0 auto;
}
.szType0 {
  background: #aaa;
}
.szType1 {
  background: rgba(210, 239, 244, 0.8);
}
.szType2 {
  background: rgba(60, 190, 230, 0.8);
}
.szType3 {
  background: rgba(116, 186, 78, 0.8);
}
.szType4 {
  background: rgba(238, 236, 65, 0.8);
}
.szType5 {
  background: rgba(239, 134, 65, 0.8);
}
.szType6 {
  background: rgba(226, 35, 45, 0.8);
}

* {
  margin: 0;
  padding: 0;
  font-family: PingFangSC-Light, 微软雅黑;
}
.body,
html {
  width: 100%;
  height: auto;
  color: white;
  /* overflow: hidden;*/
  background: #000 url(./../img/true.png) no-repeat;
  background-size: 100% 100%;
  font-size: 14px；;
}
/*各浏览器显示不同，去掉蓝色边框*/
.fieldset,
img,
input,
button {
  border: none;
  padding: 0;
  margin: 0;
  outline-style: none;
}
.img {
  border: 0;
  vertical-align: middle;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
/*清除浮动*/
.clear-both:before,
.clear-both:after {
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
.fl {
  float: left;
}
.fr {
  float: right;
}

/*header开始*/
.header {
  width: 100%;
  height: 80px;
  padding: 0 20px;
  min-width: 1366px;
}
.bg_header {
  width: 100%;
  height: 80px;
  background: url(../img/title1.png) no-repeat;
  background-size: 100% 100%;
}
.header > .header_logo {
  padding: 18px 10px 10px 0px;
}
.header > .header_logo > a {
  display: block;
}
.header > .header_logo > a > img {
  width: 260px;
}

.header > .header_nav {
  margin-left: 20px;
}
.header > .header_nav > ul > li {
  float: left;
  margin-right: 6px;
  position: relative;
}
.header > .header_nav > ul > li > a {
  display: block;
  height: 80px;
  padding: 0 10px 0 30px;
  line-height: 80px;
  color: #fff;
}
.header > .header_nav > ul > li > a:hover {
  border-bottom: 4px solid #4b8df8;
}
.header > .header_nav > ul > li > img {
  float: left;
  position: absolute;
  top: 33px;
  left: 10px;
}
.header > .header_nav > ul > li > a.nav_current {
  border-bottom: 4px solid #4b8df8;
}

.header > .header_myself {
  width: 90px;
  text-align: center;
}
.header > .header_myself > p {
  color: #fff;
  font-size: 13px;
  margin-top: 15px;
}
.header > .header_myself > a {
  color: #fff;
  font-size: 13px;
}

/*content 开始*/

.content {
  margin: 20px;
  width: calc(100% - 40px);
  min-width: 1366px;
}
.content > .content_title {
  width: 100%;
  height: 35px;
  line-height: 35px;
  background-color: #4b8df8;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.content > .content_title > p {
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.content > .content_title > img {
  margin: 10px 10px 0px 10px;
}
.content > .content_main {
  min-width: 1366px;
}
.content > .content_main > .content_search > div {
  margin-right: 25px;
}
.content > .content_main > .content_search > div > label {
  width: 80px;
  text-align: right;
}
.content > .content_main > .content_search > div > select,
.content > .content_main > .content_search > div > input {
  width: 200px;
}
.content > .content_main > .content_table {
  margin-top: 30px;
}
.content > .content_main > .content_table > table {
  margin-top: 15px;
}
.content > .content_main > .content_table > table th:nth-child(1),
.content > .content_main > .content_table > table td:nth-child(1) {
  width: 50px;
  text-align: center;
}

.content > .content_main > .content_page > span {
  font-size: 12.8px;
  margin-top: 7px;
}
.content > .content_main > .content_page > select {
  width: 70px;
  margin-right: 10px;
}
/*content 结束*/

#app {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 790px;
  height: 875px;
  padding:20px;
}
</style>
