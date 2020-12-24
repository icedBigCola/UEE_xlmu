<template>
    <div class="pro">
        <div id="proPie" style="width:100%;"></div>
        <ul class="legend">
            <li>
                <p></p>
                <span>外部链接</span>
            </li>
            <li>
                <p></p>
                <span>搜索访问</span>
            </li>
            <li>
                <p></p>
                <span>直接访问</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            option:{
                title:{
                    text:'访问方式占比',
                    left:'center',
                    top:'25%',
                    textStyle:{
                        color:'#619ADB',
                        fontWeight:400,
                        fontSize:15
                    }
                },
                tooltip:{
                    trigger:'item',
                },
                series:[
                    {
                        type:'pie',
                        radius:'50%',
                        center:['50%','75%'],
                        labelLine:{
                            show:false,
                        },
                        label:{
                            padding:[0,-20],
                            formatter:(val)=>{
                                return parseInt(val.percent)+'%'
                            }
                        },
                        data:[
                            {
                                value: 2345,
                                name: '外部链接',
                                itemStyle: {
                                  color: '#856BFF',
                                },
                            },
                            {
                                value: 5345,
                                name: '搜索访问',
                                itemStyle: {
                                  color: '#4C96FF',
                                },
                            },
                            {
                                value: 8345,
                                name: '直接访问',
                                itemStyle: {
                                  color: '#00FCFF',
                                },
                            },
                        ]
                    }
                ]
            }
        }
    },
    methods:{
        init(){
            var proPie = document.getElementById('proPie')
            let fsize = document.body.clientWidth/1920*16
            proPie.style.height =document.body.clientWidth<=1920? fsize*13+'px':'13rem'
            var myChart = this.$echarts.init(proPie); 
            myChart.setOption(this.option)
        },
    },
    mounted(){
        this.init()
    }
}
</script>

<style lang="scss" scoped>
    .pro{
        width:100%;
        height:100%;
        position: relative;
        .legend{
            position:absolute;
            right:0;
            top:0;
            height:2.3rem;
            line-height:1.8rem;
            width:18rem;
            display:flex;
            li{
                flex:1;
                padding:.5rem 0;
                p{
                    width:1rem;
                    height:.7rem;
                    border-radius:10%;
                    display:inline-block;
                }
                &:nth-of-type(1){
                    p{background-color: #856AFF;}
                    span{color:#856AFF}
                }
                &:nth-of-type(2){
                    p{background-color: #4C96FF;}
                    span{color:#4C96FF}
                }
                &:nth-of-type(3){
                    p{background-color: #00FCFF;}
                    span{color:#00FCFF}
                }
            }
        }
    }
</style>