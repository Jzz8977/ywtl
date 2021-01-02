<template>
  <div class="rightTop">
    <headerTit :title="title" :time="time"></headerTit>
    <div class="main">
      <div class="mainTop">
        <div class="borederBot">
          <div
            :class="{'border-left':i!=2, 'padding20':true,'w154px':i==1}"
            v-for="(item,i) in fixedDataSum"
          >
            <p>
              <span :class="{'yellow34':i==0, 'DINAlternate-Bold':true,'white34':i!=0}">{{item.val}}</span>
              <span>{{item.danWei}}</span>
            </p>
            <p>{{item.title}}</p>
          </div>
          <!-- <div class="border-left padding20 w154px">
            <p>
              <span class="white34 DINAlternate-Bold">+57.18%</span>
              <span>亿</span>
            </p>
            <p>同比变化值</p>
          </div>
          <div class="padding20">
            <p>
              <span class="white34 DINAlternate-Bold">+24.18%</span>
              <span></span>
            </p>
            <p>同比增幅</p>
          </div>-->
        </div>
        <div class="borederBot noBorder">
          <div
            :class="{'border-leftReserve':i!=2, 'padding20':true,'w154px':i==1}"
            v-for="(item,i) in fixedData"
          >
            <p>
              <span>{{item.title}}</span>
            </p>
            <div v-for="(itemm,a) in item.data">
              <p
                :class="{'margin':a==0, 'alignLeft':true}"
                :style="{'text-indent:30px!important':a!=0,'white-space:nowrap;':true}"
              >
                <i class="size14">{{itemm.title}}:</i>
                <!-- <i class="size16">{{itemm.val}}</i> -->
                <i class="size16">{{itemm.val}}</i>
                <i class="size14">{{itemm.danWei}}</i>
              </p>
            </div>
            <!-- <p class="margin alignLeft">
              <i>{固投}:</i>
              <i class="size16">123</i>
              <i>亿元</i>
            </p>
            <p class="alignLeft">
              <i>建安:</i>
              <i class="size16">75</i>
              <i>亿元</i>
            </p>-->
          </div>
          <!-- <div class="border-leftReserve w154px padding20">
            <p>
              <span>大兴部分</span>
            </p>
            <p class="margin alignLeft" style="text-indent:30px!important">
              <i>固投:</i>
              <i class="size16">123</i>
              <i>亿元</i>
            </p>
            <p class="alignLeft" style="text-indent:30px!important">
              <i>建安:</i>
              <i class="size16">75</i>
              <i>亿元</i>
            </p>
          </div>
          <div class="padding20">
            <p>
              <span>台马部分</span>
            </p>
            <p class="margin alignLeft">
              <i class="size14">固投:</i>
              <i class="size16">123</i>
              <i class="size14">亿元</i>
            </p>
            <p class="alignLeft">
              <i class="size14">建安:</i>
              <i class="size16">75</i>
              <i class="size14">亿元</i>
            </p>
          </div>-->
        </div>
      </div>
      <div class="chartWrap">
        <div class="chartWrapOut">
          <div class="chartTitleWrap">
            <div class="line"></div>
            <div class="chartTitle">{{titleChart}}</div>
            <div class="lineReserve"></div>
          </div>
          <div class="chartWrapIn">
            <div class="name">
              <div style="margin-left:20px">经开区</div>
              <div>核心区</div>
              <div>台马部分</div>
              <div>大兴部分</div>
            </div>
            <div id="SumChart" class="midTopChart w150px" >
              <!-- 经开区本年固投建安与增速分析 -->
            </div>
            <div id="hxChart" class="midTopChart">
              <!-- 经开区本年固投建安与增速分析 -->
            </div>
            <div id="tmChart" class="midTopChart">
              <!-- 经开区本年固投建安与增速分析 -->
            </div>
            <div id="dxChart" class="midTopChart">
              <!-- 经开区本年固投建安与增速分析 -->
            </div>
          </div>
          <div class="legend">
            <div></div>
            <div></div>
            <div>
              <span style="background:#FFE700"></span>
              固投
            </div>
            <div>
              <span style="background:#318BFF"></span>
              建安
            </div>
            <div>
              <span style="background:#93FDFF"></span>
              同比变化
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "@/utils/api.js";
export default {
  name: "rightTop",
  data() {
    return {
      title: "经开区固投情况",
      time: "2020年1-8月",
      yMax: null,
      xData: [],
      jkYB1Data: [],
      jkYB2Data: [],

      hxFZData: [],
      hxYB1Data: [],
      hxYB2Data: [],

      tmFZData: [],
      tmYB1Data: [],
      tmYB2Data: [],

      dxYB1Data: [],
      dxYB2Data: [],
      fixedDataSum: [],
      fixedData: [],
      titleChart: "",
      year:null,
    };
  },
  mounted() {
    let date = new Date();
   let year = this.year =  date.getFullYear();
    let arr = [];
    arr.push(year - 1);
    arr.push(year);
    this.xData = arr;
    this.getFixedSituationV2();
    this.initAll();
  },
  methods: {
    async getFixedSituationV2() {
      let res = await this.$get(request.fixedSituationV2, {});
      let dataArr = res.data.data || [];
      this.time = res.data.date || "";
      this.title = res.data.title || "";

      this.fixedData = dataArr.fixedData; //核心 大兴 台马 固投和建安数据
      this.fixedDataSum = dataArr.fixedDataSum; //经开区固投
      let fixedAnalysis = dataArr.fixedAnalysis; //ƒ图表
      console.log(fixedAnalysis, "123123");

      this.titleChart = fixedAnalysis.title;
      this.subArr(fixedAnalysis.data);
    },
    subArr(arr) {
      arr.forEach((v) => {
        // v.name=
        if (v.name == "经开区") {
          this.jkYB1Data = this.objToArr(v.jianAn);
          this.jkYB2Data = this.objToArr(v.guTou);
        } else if (v.name == "核心区") {
          this.hxYB1Data = this.objToArr(v.jianAn);
          this.hxYB2Data = this.objToArr(v.guTou);
        } else if (v.name == "台马部分") {
          this.tmYB1Data = this.objToArr(v.jianAn);
          this.tmYB2Data = this.objToArr(v.guTou);
        } else if (v.name == "大兴部分") {
          this.dxYB1Data = this.objToArr(v.jianAn);
          this.dxYB2Data = this.objToArr(v.guTou);
        }
      });

      this.initAll();
    },
    objToArr(obj) {
      let arr = [];
      arr[0] = obj[this.year-1+''] - 0;
      arr[1] = obj[this.year+''] - 0;
      return arr;
    },
    initAll() {
      let a, b;
      a = this.jkYB1Data[0] + this.jkYB2Data[0];
      b = this.jkYB1Data[1] + this.jkYB2Data[1];
      // debugger
      if (a >= b) {
        this.yMax = a;
      } else {
        this.yMax = b;
      }
      let tmArr = [];
      // debugger;
      this.dxYB1Data.forEach((v, i) => {
        let a = v + this.dxYB2Data[i];
        tmArr.push(a);
      });
      this.tmFZData = tmArr;

      let arr = [];
      console.log(this.hxYB1Data, this.hxYB2Data, this.tmFZData);

      let x = this.tmYB1Data[0] + this.tmYB2Data[0] + this.tmFZData[0];
      let x2 = this.tmYB1Data[1] + this.tmYB2Data[1] + this.tmFZData[1];
      arr.push(x);
      arr.push(x2);

      this.hxFZData = arr;
      this.initSum();
      this.initHxChart();
      this.initTmChart();
      this.initDxChart();
    },
    initSum() {
      let that = this;
      var myChart = this.$echarts.init(document.getElementById("SumChart"));
      let option = {
        tooltip: {
          textStyle: { fontSize: 18 },
          padding: 10,
          trigger: "item",
          position: "right",
          formatter: function (params, ticket, callback) {
            if (params.seriesName == "辅助") {
              return "";
            } else {
              return (
                params.name + "<br/>" + params.seriesName + ":" + params.value
              );
            }
          },
        },
        grid: {
          left: "5%",
          right: "0%",
          bottom: "14%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: this.xData,
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#3A82CA",
            },
          },
          axisTick: {
            alignWithLabel: true,
            show: true,
            inside: "top",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A82CA",
              fontSize: 22,
            }, // 样式
          },

          axisLabel: {
            interval: 0, //横轴信息全部显示
            color: "#ffffff",
            formatter: function (value) {
              return value.length > 5 ? value.substring(0, 5) + "..." : value;
            },
          },
        },
        yAxis: {
          type: "value",
          name: "亿元                 ",
          nameTextStyle: {
            color: "#06FEF7",
          },
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          max: this.yMax,
          data: this.yAxisData,
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              //改变刻度字体样式
              color: "#fff",
            },
          },

          splitLine: {
            show: false,
            lineStyle: {
              // 使用深浅的间隔色
              color: "#3A82CA",

              type: "dashed",
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A82CA",
            }, // 样式
          },
        },
        series: [
          {
            name: "建安",
            type: "bar",
            stack: "1",
            data: this.jkYB1Data,
            barWidth: 10,
            itemStyle: {
              //通常情况下：
              normal: {
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList;
                  if (params.value < 0) {
                    colorList = ["#0072FF", "#96D1FF"];
                  } else {
                    colorList = ["#007BFF", "#60A5FF"];
                  }
                  return new that.$echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: colorList[0],
                    },
                    {
                      offset: 1,
                      color: colorList[1],
                    },
                  ]);
                },
              },
            },
          },
          {
            // name: "2020年",
            name: "固投",
            stack: "1",
            type: "bar",
            data: this.jkYB2Data,
            barWidth: 10,
            itemStyle: {
              //通常情况下：
              normal: {
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList;
                  if (params.value < 0) {
                    colorList = ["#0072FF", "#96D1FF"];
                  } else {
                    colorList = ["#FF8E00", "#FFEA37"];
                  }
                  return new that.$echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: colorList[0],
                    },
                    {
                      offset: 1,
                      color: colorList[1],
                    },
                  ]);
                },
              },
            },
          },
          {
            name: "同比变化",
            data: this.jkYB1Data,
            type: "line",
            stack: 2,
            // data: [40, 40],
            color: "#00FFFD",
          },
          {
            name: "同比变化",
            stack: 2,
            type: "line",
            data: this.jkYB2Data,
            color: "#00FFFD",
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        // 自动渲染echarts
        if (myChart) myChart.resize();
      });
    },
    initHxChart() {
      let that = this;
      var myChart = this.$echarts.init(document.getElementById("hxChart"));
      let option = {
        tooltip: {
          textStyle: { fontSize: 18 },
          padding: 10,
          trigger: "item",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params, ticket, callback) {
            if (params.seriesName == "辅助") {
              return "";
            } else {
              return (
                params.name + "<br/>" + params.seriesName + ":" + params.value
              );
            }
          },
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "14%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: this.xData,
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#3A82CA",
            },
          },
          axisTick: {
            alignWithLabel: true,
            show: false,
            inside: "top",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A82CA",
              fontSize: 22,
            }, // 样式
          },

          axisLabel: {
            interval: 0, //横轴信息全部显示
            color: "#ffffff",
            formatter: function (value) {
              return value.length > 5 ? value.substring(0, 5) + "..." : value;
            },
          },
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#06FEF7",
          },
          max: this.yMax,
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          data: this.yAxisData,
          axisLabel: {
            show: false, ////
            formatter: "{value}",
            textStyle: {
              //改变刻度字体样式
              color: "#fff",
            },
          },

          splitLine: {
            show: false,
            lineStyle: {
              // 使用深浅的间隔色
              color: "#3A82CA",

              type: "dashed",
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A82CA",
            }, // 样式
          },
        },
        series: [
          {
            name: "辅助",
            symbolSize: 0,

            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            stack: "1",
            data: this.hxFZData,
            type: "bar",
          },
          {
            name: "辅助",
            symbolSize: 0,

            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            stack: "2",
            data: this.hxFZData,
            type: "line",
          },
          {
            name: "建安",
            type: "bar",
            barWidth: 10,
            stack: "1",
            data: this.hxYB1Data,
            itemStyle: {
              //通常情况下：
              normal: {
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList;
                  if (params.value < 0) {
                    colorList = ["#0072FF", "#96D1FF"];
                  } else {
                    colorList = ["#007BFF", "#60A5FF"];
                  }
                  return new that.$echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: colorList[0],
                    },
                    {
                      offset: 1,
                      color: colorList[1],
                    },
                  ]);
                },
              },
            },
          },
          {
            name: "固投",
            stack: "1",
            type: "bar",
            data: this.hxYB2Data,
            itemStyle: {
              //通常情况下：
              normal: {
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList;
                  if (params.value < 0) {
                    colorList = ["#0072FF", "#96D1FF"];
                  } else {
                    colorList = ["#FF8E00", "#FFEA37"];
                  }
                  return new that.$echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: colorList[0],
                    },
                    {
                      offset: 1,
                      color: colorList[1],
                    },
                  ]);
                },
              },
            },
          },
          {
            name: "同比变化",
            type: "line",
            stack: 2,
            data: this.hxYB1Data,

            color: "#00FFFD",
          },
          {
            name: "同比变化",
            stack: 2,
            type: "line",
            data: this.hxYB2Data,
            color: "#00FFFD",
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        // 自动渲染echarts
        if (myChart) myChart.resize();
      });
    },
    initTmChart() {
      let that = this;
      var myChart = this.$echarts.init(document.getElementById("tmChart"));
      let option = {
        tooltip: {
          textStyle: { fontSize: 18 },
          padding: 10,
          trigger: "item",
          axisPointer: {
            type: "shadow",
          },
          // formatter:'{b}<br />{a}{c}'
          formatter: function (params, ticket, callback) {
            if (params.seriesName == "辅助") {
              return "";
            } else {
              return (
                params.name + "<br/>" + params.seriesName + ":" + params.value
              );
            }
          },
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "14%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: this.xData,
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#3A82CA",
            },
          },
          axisTick: {
            alignWithLabel: true,
            show: false,
            inside: "top",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A82CA",
              fontSize: 22,
            }, // 样式
          },

          axisLabel: {
            interval: 0, //横轴信息全部显示
            color: "#ffffff",
            formatter: function (value) {
              return value.length > 5 ? value.substring(0, 5) + "..." : value;
            },
          },
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#06FEF7",
          },
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          max: this.yMax,
          data: this.yAxisData,
          axisLabel: {
            show: false,
            formatter: "{value}",
            textStyle: {
              //改变刻度字体样式
              color: "#fff",
            },
          },

          splitLine: {
            show: false,
            lineStyle: {
              // 使用深浅的间隔色
              color: "#3A82CA",

              type: "dashed",
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A82CA",
            }, // 样式
          },
        },
        series: [
          {
            name: "辅助",
            symbolSize: 0,

            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            stack: "1",
            data: this.tmFZData,
            type: "bar",
          },
          {
            name: "辅助",
            symbolSize: 0,

            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            stack: "2",
            data: this.tmFZData,
            type: "line",
          },
          {
            name: "建安",
            type: "bar",
            barWidth: 10,
            stack: "1",
            data: this.tmYB1Data,
            itemStyle: {
              //通常情况下：
              normal: {
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList;
                  if (params.value < 0) {
                    colorList = ["#0072FF", "#96D1FF"];
                  } else {
                    colorList = ["#007BFF", "#60A5FF"];
                  }
                  return new that.$echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: colorList[0],
                    },
                    {
                      offset: 1,
                      color: colorList[1],
                    },
                  ]);
                },
              },
            },
          },
          {
            name: "固投",
            stack: "1",
            type: "bar",
            data: this.tmYB2Data,
            itemStyle: {
              //通常情况下：
              normal: {
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList;
                  if (params.value < 0) {
                    colorList = ["#0072FF", "#96D1FF"];
                  } else {
                    colorList = ["#FF8E00", "#FFEA37"];
                  }
                  return new that.$echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: colorList[0],
                    },
                    {
                      offset: 1,
                      color: colorList[1],
                    },
                  ]);
                },
              },
            },
          },
          {
            name: "同比变化",
            type: "line",
            stack: 2,
            data: this.tmYB1Data,
            color: "#00FFFD",
          },
          {
            name: "同比变化",
            stack: 2,
            type: "line",
            data: this.tmYB2Data,
            color: "#00FFFD",
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        // 自动渲染echarts
        if (myChart) myChart.resize();
      });
    },
    initDxChart() {
      let that = this;
      var myChart = this.$echarts.init(document.getElementById("dxChart"));
      let option = {
        tooltip: {
          textStyle: { fontSize: 18 },
          padding: 10,
          trigger: "item",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params, ticket, callback) {
            if (params.seriesName == "辅助") {
              return "";
            } else {
              return (
                params.name + "<br/>" + params.seriesName + ":" + params.value
              );
            }
          },
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "14%",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: this.xData,
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#3A82CA",
            },
          },
          axisTick: {
            alignWithLabel: true,
            show: false,
            inside: "top",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A82CA",
              fontSize: 22,
            }, // 样式
          },

          axisLabel: {
            interval: 0, //横轴信息全部显示
            color: "#ffffff",
            formatter: function (value) {
              return value.length > 5 ? value.substring(0, 5) + "..." : value;
            },
          },
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#06FEF7",
          },

          max: this.yMax,
          axisTick: {
            alignWithLabel: true,
            show: false,
          },
          data: this.yAxisData,
          axisLabel: {
            show: false,
            formatter: "{value}",
            textStyle: {
              //改变刻度字体样式
              color: "#fff",
            },
          },

          splitLine: {
            show: false,
            lineStyle: {
              // 使用深浅的间隔色
              color: "#3A82CA",

              type: "dashed",
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#3A82CA",
            }, // 样式
          },
        },
        series: [
          {
            name: "建安",

            type: "bar",
            barWidth: 10,
            stack: "1",
            data: this.dxYB1Data,
            itemStyle: {
              //通常情况下：
              normal: {
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList;
                  if (params.value < 0) {
                    colorList = ["#0072FF", "#96D1FF"];
                  } else {
                    colorList = ["#007BFF", "#60A5FF"];
                  }
                  return new that.$echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: colorList[0],
                    },
                    {
                      offset: 1,
                      color: colorList[1],
                    },
                  ]);
                },
              },
            },
          },
          {
            name: "固投",
            stack: "1",
            type: "bar",
            data: this.dxYB2Data,
            itemStyle: {
              //通常情况下：
              normal: {
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: function (params) {
                  var colorList;
                  if (params.value < 0) {
                    colorList = ["#0072FF", "#96D1FF"];
                  } else {
                    colorList = ["#FF8E00", "#FFEA37"];
                  }
                  return new that.$echarts.graphic.LinearGradient(0, 1, 1, 0, [
                    {
                      offset: 0,
                      color: colorList[0],
                    },
                    {
                      offset: 1,
                      color: colorList[1],
                    },
                  ]);
                },
              },
            },
          },
          {
            name: "同比变化",
            type: "line",
            stack: 2,
            data: this.dxYB1Data,
            color: "#00FFFD",
          },
          {
            name: "同比变化",
            stack: 2,
            type: "line",
            data: this.dxYB2Data,
            color: "#00FFFD",
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        // 自动渲染echarts
        if (myChart) myChart.resize();
      });
    },
  },
};
</script>

<style scoped>
span,
i {
  /* float: left;
     */
  margin-left: -2px;
}
.w154px {
  width: 154px !important;
}
.rightTop {
  width: 100%;
  height: 590px;
  background: url(../../../assets/img/leftTop.png) no-repeat;
    background-size: 100% 100%;

  overflow: hidden;
}
.main {
  width: 100%;
  height: 526px;
}
.mainTop {
  width: 100%;
  height: 250px;
  padding: 0 20px;
  box-sizing: border-box;
}
.borederBot {
  height: 120px;
  border-bottom: 2px solid #fff;
  border-image: linear-gradient(
      to right,
      rgba(26, 199, 189, 0),
      #1a76bc,
      #1a76bb,
      rgba(26, 199, 189, 0)
    )
    1 10;
}
.noBorder {
  border: 0;
}
.flex {
}
.borederBot > div {
  float: left;
  width: 132px;
  height: 120px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
}
.borederBot > div > p,
.borederBot > div > p > span {
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a3d5ff;
  line-height: 25px;
  white-space: nowrap;
}
.borederBot > div > p {
  font-size: 18px;
}
.borederBot > div > p > span {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 25px;
}
.borederBot > div > p > i {
  font-style: normal;
}
/* !============ */
.borederBot > div > div{
  white-space: nowrap;
}
.borederBot > div > div > p,
.borederBot > div > div > p > span {
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a3d5ff;
  line-height: 25px;
}
.borederBot > div > div > p {
  font-size: 18px;
}
.borederBot > div > div > p > span {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 25px;
}
.borederBot > div > div > p > i {
  font-style: normal;
}
/* !============ */
.padding20 {
  padding: 20px 0;
}
.border-left {
  border-right: 2px solid #fff;
  border-image: linear-gradient(to bottom, rgba(26, 199, 189, 0), #1a76bc) 1 10;
}
.border-leftReserve {
  border-right: 2px solid #fff;
  border-image: linear-gradient(to bottom, #1a76bb, rgba(26, 199, 189, 0)) 1 10;
}

.alignLeft {
  text-align: left !important;
  width: 100%;
  /* text-indent: 18px; */
}
.border-leftReserve > p > i {
  font-size: 14px;
}
.border-leftReserve > div > p > i {
  font-size: 14px;
}

.chartWrap {
  width: 100%;
  height: 267px;
  padding: 10px 10px 0;
  box-sizing: border-box;
  position: relative;
}
.chartWrapOut {
  width:100%;
  height: 100%;
  background: url(../../../assets/img/rightBotBg.png) no-repeat;
  background-size: 100% 100%;
}
.chartTitleWrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 25px;
  padding-top: 16px;
}
.chartTitle {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 25px;
}
.chartWrapIn {
  height: calc(100% - 41px);
  width: 100%;
  position: relative;
  box-sizing: border-box;
}
.midTopChart {
  float: left;
  width: 100px;
  height: 100%;
}
.w150px{
  width: 150px;
}
.name {
  position: absolute;
  width: 100%;
  height: 30px;
  top: 1px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.name > div {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
}
.legend {
  position: absolute;
  width: 100%;
  height: 30px;
  bottom: 1px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.legend > div {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a3d5ff;
  line-height: 22px;
}
.legend > div > span {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.margin {
  margin-top: 10px;
  margin-bottom: 5px;
}
</style>