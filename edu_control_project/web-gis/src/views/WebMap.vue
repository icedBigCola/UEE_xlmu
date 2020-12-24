<template>
  <div id="map" style="position:relative;">
    <el-card class="box-card" v-show="tip" :style="tipStyle">
      站点名称:{{itemName}}
    </el-card>
  </div>
</template>

<script>
import * as esriLoader from 'esri-loader'
export default {
  name: "web-map",
  data() {
    return {
        // drawer: false,
        // direction: 'btt',
        itemName: 'test',
        //噪声
        noiseList:["北戴河技术交流中心","国海宾馆","河北省医疗气功医院","金山宾馆","碧海新村","锦都大酒店"],
        noiseResult:[],
        noiseName:[],
        noiseValue:[],
        noiseLevel:[],
        x0:[],
        y0:[],
        noiseSource:[],
        //空气
        airList:["北戴河园林局","北戴河联峰山公园","北戴河环保分局"],
        airResult:[],
        AQIResult:[],
        PMResult:[],
        MainResult:[],
        LevelResult:[],
        tip:false,
        tipStyle:"left:100px;top:200px"
    };
  },
  methods:{
    test(){
        console.log('_________')
        console.log(this.$store.state.featureLayer1.source)
    },
    setContentInfo(features){
        console.log(features);
    },
    boardcastToParent(item){
      this.$emit("mapClickEvent",item);
    },
  },
  mounted() {
    esriLoader.loadModules(
      ["esri/Map",
       "esri/views/MapView", 
       "esri/layers/FeatureLayer",
       "esri/layers/WebTileLayer",
       "esri/renderers/UniqueValueRenderer",
       "esri/symbols/PictureMarkerSymbol",
       "dojo/query",
        "esri/core/promiseUtils",
        "esri/Graphic",
        "esri/geometry/Point",
        "esri/tasks/Locator",
        "dojo/on",
       "dojo/domReady!"],
      { css: true }
    ).then(([ArcGISMap, MapView, FeatureLayer,query, on, UniqueValueRenderer, PictureMarkerSymbol,WebTileLayer]) => {
      var tiandituBaseUrl = "http://t0.tianditu.gov.cn/";
      var token = "70c4ad1cf8d962a0a649f4ad340847b5";
            var featureLayer = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer",
                    outFields:["*"],
            });

            var features0 = [
            
            ];

            //噪声
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
                  this.x0[i] = this.noiseResult[i].LATITUDE;
                  this.y0[i] = this.noiseResult[i].LONGITUDE;
                  var noiseFeature = {
                    geometry: {
                      type: "point",
                      x: this.x0[i],
                      y: this.y0[i],
                    },
                    attributes: {
                      noiseLevel: this.noiseLevel[i],
                    }
                  }
                  features0[i] = noiseFeature;
                }
              }
              
            });

            const fwySym = {
              type: "picture-marker", // autocasts as new SimpleLineSymbol()
              url: "https://i.loli.net/2020/08/30/rwg3nyEiklTDNSY.gif",
              width: '50px',
              height: '50px',
            };

            // Symbol for U.S. Highways
            const hwySym = {
              type: "picture-marker", // autocasts as new SimpleLineSymbol()
              url:  "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
              width: '50px',
              height: '50px',
            };

            // Symbol for other major highways
            const otherSym = {
              type: "picture-marker", // autocasts as new SimpleLineSymbol()
              url:  "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
              width: '50px',
              height: '50px',
            };

            const test = {
              type: "unique-value", // autocasts as new UniqueValueRenderer()
              defaultSymbol: otherSym,
              field: "ISOVER",
              uniqueValueInfos: [
                {
                  value: "正常", // code for interstates/freeways
                  symbol: hwySym,
                },
                {
                  value: "超标", // code for U.S. highways
                  symbol: fwySym,
                },
              ]
            };

            const hwyRenderer = {
              type: "unique-value", // autocasts as new UniqueValueRenderer()
              defaultSymbol: otherSym,
              field: "DepArpt",
              uniqueValueInfos: [
                {
                  value: "KATL", // code for interstates/freeways
                  symbol: hwySym,
                },
                {
                  value: "Cool", // code for U.S. highways
                  symbol: fwySym,
                },
                {
                  value: "Nice", // code for interstates/freeways
                  symbol: otherSym,
                },
              ]
            };

            var featureLayer0 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/0",
                    outFields:["*"],
            });

            var featureLayer1 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/1",
                    // popupTemplate: template,
                    // popupEnabled: true,
            });

            var featureLayer2 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/2",
                    outFields:["*"],
            });

            const symbol = {
              type: 'picture-marker',
              url: "https://i.loli.net/2020/08/30/rwg3nyEiklTDNSY.gif",
              width: '50px',
              height: '50px',
            }

            const renderer = {
                type: 'simple',
                symbol,
            };

            var featureLayer3 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/3",
                    outFields:["*"],
            });

            var featureLayer4 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/4",
                    // renderer,
                 outFields:["*"],
                //  renderer
            });

            

            var featureLayer5 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/5",
                    outFields:["*"],
            });

            var featureLayer6 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/6",
                    outFields:["*"],
            });

            var featureLayer7 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/7",
                    outFields:["*"],
            });

            var featureLayer8 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/8",
                    outFields:["*"],
            });

            var featureLayer9 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/9",
                    outFields:["*"],
            });

            var featureLayer10 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/10",
                    outFields:["*"],
            });

            var featureLayer11 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/11",
                    outFields:["*"],
            });

            var featureLayer12 = new FeatureLayer({
                url:
                    "https://10.13.12.155:6443/arcgis/rest/services/arc_test/MapServer/12",
                    outFields:["*"],
                    renderer : test,
            });

            var features = [
            {
              geometry: {
                type: "point",
                x: 119.183,
                y: 39.774
              },
              attributes: {
                ObjectID: 1,
                DepArpt: "KATL",
                MsgTime: Date.now(),
                FltId: "UAL1"
              }
            },
            {
              geometry: {
                type: "point",
                x: 119.173,
                y: 39.794
              },
              attributes: {
                ObjectID: 2,
                DepArpt: "Cool",
                MsgTime: Date.now(),
                FltId: "UAL1"
              }
            },
            {
              geometry: {
                type: "point",
                x: 120.173,
                y: 37.794
              },
              attributes: {
                ObjectID: 3,
                DepArpt: "Nice",
                MsgTime: Date.now(),
                FltId: "UAL1"
              }
            }
            ];


            const testlayer = new FeatureLayer({
            source: features,  // array of graphics objects
            objectIdField: "OBJECTID",
            outFields:["*"],
            fields: [{
              name: "OBJECTID",
              type: "oid"
            }, {
              name: "DepArpt",
              type: "string"
            }],
             renderer : hwyRenderer,
             geometryType: "point"
          });
            


      const map = new ArcGISMap({
        // basemap: "streets",
        basemap: 'streets',
        ground: "world-elevation",
        logo: false,
        layers: [featureLayer, featureLayer11, featureLayer5,
                    featureLayer6, featureLayer7,
                    featureLayer8, featureLayer9,
                    featureLayer10, featureLayer0, featureLayer1,
                    featureLayer2, featureLayer3, featureLayer4,featureLayer12,testlayer]
      });

      // map.add(testlayer);
      // //球面墨卡托投影矢量底图
      // var tiledLayer = new  WebTileLayer({
      //   urlTemplate:tiandituBaseUrl+'/DataServer?T=img_w/wmts&x={col}&y={row}&l={level}&tk='+token,
      //   subDomains:["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]
      // });
      // //矢量标注(球面墨卡托投影)
      // var tiledLayerAnno = new WebTileLayer({
      //   urlTemplate: tiandituBaseUrl + "/DataServer?T=cia_w?T=vec_c/wmts&x={col}&y={row}&l={level}&tk=" +token,
      //   subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]
      // });
      // //将天地图底图添加到map上
      // map.add(tiledLayer);
      // //标注添加到map上
      // map.add(tiledLayerAnno);


      this.view = new MapView({
        container: this.$el,
        map: map,
        center: [119.183, 39.774],
        zoom: 10
      });


    //   this.view.focus("click", function(event){
    //     // event is the event handle returned after the event fires.
    //     console.log(event);
    //     });

      this.$store.state.map = map;
      this.$store.state.view = this.view;
      this.$store.state.featureLayer0 = featureLayer0;
      this.$store.state.featureLayer1 = featureLayer1;
      this.$store.state.featureLayer2 = featureLayer2;
      this.$store.state.featureLayer3 = featureLayer3;
      this.$store.state.featureLayer4 = featureLayer4;
      this.$store.state.featureLayer5 = featureLayer5;
      this.$store.state.featureLayer6 = featureLayer6;
      this.$store.state.featureLayer7 = featureLayer7;
      this.$store.state.featureLayer8 = featureLayer8;
      this.$store.state.featureLayer9 = featureLayer9;
      this.$store.state.featureLayer10 = featureLayer10;
      this.$store.state.featureLayer11 = featureLayer11;
      this.$store.state.featureLayer11 = featureLayer12;
      var temp = this.view

      let _this = this;

      
      
      // this.view.whenLayerView(testlayer).then(function (layerView) {
      //     console.log(testlayer);
      //     temp.on("click", function (event) {
      //         // Perform a hitTest on the View
      //         temp.hitTest(event).then(function(event) {
      //           // Make sure graphic has a popupTemplate
      //           _this.drawer = true;
      //           _this.itemName = event.results[0].graphic.attributes.POINTNAME;
      //           console.log(event);
      //           _this.boardcastToParent(_this.itemName);
      //         });
      //       });

      //       temp.on("pointer-move", function (event) {
      //         // Perform a hitTest on the View
      //         temp.hitTest(event).then(function(event) {
      //           // Make sure graphic has a popupTemplate
      //           _this.itemName = event.results[0].graphic.attributes.POINTNAME;
      //           console.log(event);
      //           if(_this.itemName)
      //           {
      //              _this.tip = true;
      //              var left = event.screenPoint.x;
      //              var right = event.screenPoint.y;
      //              var position = "left:" + left + "px;" + "top:" + right +"px";
      //              _this.tipStyle = position;
      //              console.log(_this.tipStyle);
      //           }
      //           else{
      //              _this.tip = false;
      //           }
      //         });
      //       });

      //       temp.on("pointer-leave", function (event){
      //         _this.tip = false;
      //       });
      //  });
      //监听点击事件
      temp.on("click", function (event) {
              // Perform a hitTest on the View
              temp.hitTest(event).then(function(event) {
                // Make sure graphic has a popupTemplate
                _this.drawer = true;
                _this.itemName = event.results[0].graphic.attributes.POINTNAME;
                console.log(event);
                _this.boardcastToParent(_this.itemName);
              });
            });

            //监听鼠标移动事件
            temp.on("pointer-move", function(event) {
              // Perform a hitTest on the View
              temp.hitTest(event).then(function(event) {
                // Make sure graphic has a popupTemplate
                console.log(event);
                if(event.results[0] && event.results[0].graphic)
                {
                   _this.itemName = event.results[0].graphic.attributes.POINTNAME;
                   console.log(event.results[0].graphic);
                }
                if(event.results[0] && event.results[0].graphic && _this.itemName)
                {
                   _this.tip = true;
                   var oBox = document.getElementById("map");
                   var position = oBox.getBoundingClientRect();
                   var left = event.screenPoint.x + position.x;
                   var right = event.screenPoint.y + position.y;
                   var position = "left:" + left + "px;" + "top:" + right +"px";
                   _this.tipStyle = position;
                   console.log(_this.tipStyle);
                }
                else{
                   _this.tip = false;
                }
              });
            });

            // temp.on("pointer-leave", function (event){
            //   temp.hitTest(event).then(function(event) {
            //     _this.tip = false;   
            //   });
            // });
    });
  },
  beforeDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
  },
};
</script>

<style scoped>
div {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.box-card{
  width:200px;
  height:80px;
  position:fixed;
  left:820px;
  top:370px;
}
</style>
