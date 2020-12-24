<template>
  <div class="searchCom">
    <div id="box" style="width:1200px;height:500px;margin:auto"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
    };
  },
  created(){
    
  },
  mounted(){
    this.drawLine();
  },
  components: {
  },
  methods: {
    drawLine(){
      var myChart=echarts.init(document.getElementById("box"));
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
                    left:'8%',
                    right:'0',
                    bottom:'1%',
                    top:70,
                    
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
};
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>

</style>