<template>
  <div class="13">
    <!-- agoDayHide='1517483961' -->
    <!-- futureDayHide="1526054400" -->
    <Calendar
      ref="Calendar"
      :markDateMore="arr"
      v-on:isToday="clickToday"
      agoDayHide="1530115221"
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
    ></Calendar>
  </div>
</template>

<script>
import Calendar from '../vue-calendar-component/index';
import Vue from "vue";
import timeUtil from "../vue-calendar-component/calendar";
import dayjs from 'dayjs';

export default {
  props:{
    calendarData:{
      
    }
  },
  data() {
    return {
      //存放查询渲染的列表的数组
      arr: [
      ], 
      //当前查询月份的日期
      date: new Date(),
      stardard1: 0,
      stardard2: 0,
      stardard3: 0,
      stardard4: 0,
      stardard5: 0,
      stardard6: 0,
      missing: 0,
      showList: [],
    };
  },
  components: {
    Calendar
  },
  methods: {
    parseDate2Str(date,format){
      format = format || 'YYYY-MM-DD HH:mm:ss';
      return dayjs(date).format(format);
    },
    clickDay(data) {
      console.log("选中了", data); //选中某天
    },
    clickToday(data) {
      console.log("跳到了本月今天", data); //跳到了本月
    },
    changeDate(data) {
      console.log("左右点击切换月份", data); //左右点击切换月份
      //将字符串切割
      var arr=data.split("/");
      //切割好得到日期，这里重要的是要年和月
      arr[1] = Number(arr[1]) - 1;
      arr[1] = arr[1].toString();
      this.date = timeUtil.getDate(arr[0],arr[1],"01","0","0","0");
      this.getRiverInfo();
    },
    demo() {
      // this.$refs.Calendar.ChoseMonth("2018-12-13"); //跳到12月12日选中12月12日
    },
    getRiverInfo() {
      this.arr = []
      this.stardard1 = 0
      this.stardard2 = 0
      this.stardard3 = 0
      this.stardard4 = 0
      this.stardard5 = 0
      this.stardard6 = 0
      this.missing = 0
      var countDays = timeUtil.getDaysInOneMonth(this.date).toString();
      console.log(countDays);
      var month = this.parseDate2Str(this.date,'MM');
      month = Number(month) -1;
      month = month.toString();
      var year = this.parseDate2Str(this.date,'YYYY');
      var startDate = timeUtil.getDate(year,month,"01","0","0","0")
      var endDate = timeUtil.getDate(year,month,countDays,"23","59","59")
      var info = {"rivername":this.calendarData.model1,"start":startDate,"end":endDate}
      this.$axios.post("/river_day/search_by_name",info).then(res => {
        var riverResult = res.data.data;
        console.log(riverResult);
          for (var i = 0; i < riverResult.length; i++)
          {
            if (riverResult[i].MONITORDAY != null)
            {
              var temp = {}
              temp.date = riverResult[i].MONITORDAY;
              var color = riverResult[i].MAXWATERQUALITYCHAR;
              if (color == 'Ⅰ'){
                temp.className = "szType1";
                this.stardard1 = this.stardard1 + 1;
              }
              else if (color == 'Ⅱ'){
                temp.className = "szType2";
                this.stardard2 = this.stardard2 + 1;
              }
              else if (color == 'Ⅲ'){
                temp.className = "szType3";
                this.stardard3 = this.stardard3 + 1;
              }
              else if (color == 'Ⅳ'){
                temp.className = "szType4";
                this.stardard4 = this.stardard4 + 1;
              }
              else if (color == 'V'){
                temp.className = "szType5";
                this.stardard5 = this.stardard5 + 1;
              }
              else if (color == '劣Ⅴ'){
                temp.className = "szType6";
                this.stardard6 = this.stardard6 + 1;
              }
              Vue.set(this.arr,i,temp);
            }
          }  
          this.missing = timeUtil.getDaysInOneMonth(this.date) - this.stardard1 - this.stardard2 - this.stardard3 - this.stardard4
                       - this.stardard5 - this.stardard6;
          this.showList[0] = this.stardard1;
          this.showList[1] = this.stardard2;
          this.showList[2] = this.stardard3;
          this.showList[3] = this.stardard4;
          this.showList[4] = this.stardard5;
          this.showList[5] = this.stardard6;
          this.showList[6] = this.missing;
          this.boardcastToParent();
      });
    },
    boardcastToParent(){
      this.$emit("ListentoChildEvent",this.showList);
    }
  },
  created() {
    if (this.calendarData.type === '河流')
    {
      this.getRiverInfo();
    }
    this.boardcastToParent();
  }
};
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: center;
  width: 90%;
  margin: auto;
}

.div {
  width: 220px;
  height: 44px;
}

.wh_container >>> .wh_content_all{
    background-color:rgba(220,38,38,0);
    /* width: 250px;
    height: 300px; */
}

.wh_container >>> .mark1 {
  background-color: orange;
  border-radius:50px;
}

.wh_container >>> .mark2 {
  background-color: blue;
  border-radius:50px;
}
.wh_content_item > .wh_isMark {
  background: orange;
  border-radius:50px;
}
.wh_content_item{
  width: 20px;
  height: 20px;
}
.wh_content_item >  .wh_item_date_wh_isToday{
  width: 20px;
  height: 20px;
}

.wh_container >>> .wh_content_all {
  /* background-color: red; */
  /* width: 20px;
  height: 20px; */
}

.wh_content_item{
  width: 20px;
  height: 20px;
}

.wh_content_item >.wh_top_tag{
  width: 20px;
  height: 20px;
}

.wh_top_tag{
  width: 20px;
  height: 20px;
}

.wh_container >>> .szType{width:70%;border-radius:0.2rem;margin:0 auto;}
.wh_container >>> .szType0{background:#aaa }
.wh_container >>> .szType1{background:rgba(210,239,244,0.8)}
.wh_container >>> .szType2{background:rgba(60,190,230,0.8) }
.wh_container >>> .szType3{background:rgba(116,186,78,0.8) }
.wh_container >>> .szType4{background:rgba(238,236,65,0.8)}
.wh_container >>> .szType5{background:rgba(239,134,65,0.8)}
.wh_container >>> .szType6{background:rgba(226,35,45,0.8) }
.wh_container >>> .origin{background: #aaaaaa;}
</style>