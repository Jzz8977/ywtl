<template>
  <div class="rightBot">
    <headerTit :title="title" :time="time" :url="url"></headerTit>
    <div class="main">
      <div class="chartWrap" id="rankingChart"></div>
    </div>
  </div>
</template>

<script>
import { request } from "@/utils/api.js";
export default {
  name: "rightBot",
  data() {
    return {
      title: "",
      time: "",
      url: request.rightBotTitleDirector,
      //   产值 / 增速
      xAxisMonth: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      legendArr: [],
      legendArr2: [],
      carData: [],
      cityData: [],
      robotData: [],
      basicData: [],
      technologyData: [],
      healthyData: [],
      series: [],
    };
  },
  mounted() {
    this.getEconomicsSituationV2();
  },
  methods: {
    async getEconomicsSituationV2() {
      let res = await this.$get(request.monthCategoryDataV2, {});
      // this.dataArr = res.data.data || [];
      // ;
      this.time = res.data.date || "";
      this.title = res.data.title || "";
      let arr = res.data.data || [];
      let legendArr = [];
      let series = [];
      for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        let seriesObj = {
          name: obj.name,
          type: "line",
          smooth: true,
          symbolSize: 0,
          data: obj.data,
        };
        series.push(seriesObj);

        let legendObj = {
          name: obj.name,
          icon: "rect",
          textStyle: {
            color: "#A3D5FF", // 图例文字颜色
          },
        };
        legendArr.push(legendObj);
      }
      this.series = series;
      this.legendArr = legendArr.slice(0, 3);
      this.legendArr2 = legendArr.slice(3, 6);
      this.initRankingChart();
    },
    initRankingChart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("rankingChart"));

      // 指定图表的配置项和数据
      let option = {
        color: [
          "#FFE700",
          "#7AFF77",
          "#59FCFF",
          "#318BFF",
          "#985BFF",
          "#F90CFD",
        ],

        tooltip: {
          textStyle: {
            // fontSize: 18
            fontSize: that.subFont(0.18),
          },
          padding: 10,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            let str = params[0].name + "<br/>";
            params.forEach((item) => {
              let b = item.seriesName;
              if (item.seriesName.length > 4) {
                b = b.slice(0, 6);
              }
              str += item.marker + b + ": " + item.data + "亿元<br/>";
            });
            return str;
          },
        },
        legend:[{
                  x: "center",
                  y: "bottom",
                  // bottom: "8%",
                  // align:'center',
                  width: 550,
                  itemWidth: 15,
                  itemHeight: 15,
                  textStyle: {
                    // fontSize: 16,
                    fontSize: that.subFont(0.16),
                  },
                  data: this.legendArr,
                },
                {
                  x: "center",
                  // y: "bottom",
                  bottom: "8%",
                  // align:'center',
                  width: 550,
                  itemWidth: 15,
                  itemHeight: 15,
                  textStyle: {
                    // fontSize: 16,
                    fontSize: that.subFont(0.16),
                  },
                  data: this.legendArr2,
                },],
        grid: {
          left: "6%",
          right: "5%",
          bottom: "16%",
          top: "15%",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            data: this.xAxisMonth,
            boundaryGap: false,
            splitLine: {
              show: false,
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
                fontSize: that.subFont(0.22),
              }, // 样式
            },

            axisLabel: {
              interval: 0, //横轴信息全部显示
              color: "#ffffff",
              fontSize: that.subFont(0.16),
              formatter: function (value) {
                return value.length > 5 ? value.substring(0, 5) + "..." : value;
              },
            },
          },
        ],

        yAxis: [
          {
            type: "value",
            name: "亿元    ",
            nameTextStyle: {
              color: "#06FEF7",
            },
            axisTick: {
              alignWithLabel: true,
              show: false,
            },
            data: this.yAxisData,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                //改变刻度字体样式
                color: "#fff",
              },
            },

            splitLine: {
              show: true,
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
        ],
        series: this.series,
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        // 自动渲染echarts
        if (myChart) {
          myChart.setOption(
            {
              color: [
                "#FFE700",
                "#7AFF77",
                "#59FCFF",
                "#318BFF",
                "#985BFF",
                "#F90CFD",
              ],

              tooltip: {
                textStyle: {
                  // fontSize: 18
                  fontSize: that.subFont(0.18),
                },
                padding: 10,
                trigger: "axis",
                axisPointer: {
                  type: "shadow",
                },
                formatter: function (params) {
                  let str = params[0].name + "<br/>";
                  params.forEach((item) => {
                    let b = item.seriesName;
                    if (item.seriesName.length > 4) {
                      b = b.slice(0, 6);
                    }
                    str += item.marker + b + ": " + item.data + "亿元<br/>";
                  });
                  return str;
                },
              },
              legend: [
                {
                  x: "center",
                  y: "bottom",
                  // bottom: "8%",
                  // align:'center',
                  width: 550,
                  itemWidth: 15,
                  itemHeight: 15,
                  textStyle: {
                    // fontSize: 16,
                    fontSize: that.subFont(0.16),
                  },
                  data: this.legendArr,
                },
                {
                  x: "center",
                  // y: "bottom",
                  bottom: "8%",
                  // align:'center',
                  width: 550,
                  itemWidth: 15,
                  itemHeight: 15,
                  textStyle: {
                    // fontSize: 16,
                    fontSize: that.subFont(0.16),
                  },
                  data: this.legendArr2,
                },
              ],
              grid: {
                left: "6%",
                right: "5%",
                bottom: "16%",
                top: "15%",
                containLabel: true,
              },

              xAxis: [
                {
                  type: "category",
                  data: this.xAxisMonth,
                  boundaryGap: false,
                  splitLine: {
                    show: false,
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
                      fontSize: that.subFont(0.22),
                    }, // 样式
                  },

                  axisLabel: {
                    interval: 0, //横轴信息全部显示
                    color: "#ffffff",
                    fontSize: that.subFont(0.16),
                    formatter: function (value) {
                      return value.length > 5
                        ? value.substring(0, 5) + "..."
                        : value;
                    },
                  },
                },
              ],

              yAxis: [
                {
                  type: "value",
                  name: "亿元    ",
                  nameTextStyle: {
                    color: "#06FEF7",
                  },
                  axisTick: {
                    alignWithLabel: true,
                    show: false,
                  },
                  data: this.yAxisData,
                  axisLabel: {
                    formatter: "{value}",
                    textStyle: {
                      //改变刻度字体样式
                      color: "#fff",
                    },
                  },

                  splitLine: {
                    show: true,
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
              ],
              series: this.series,
            },
            true
          );
          myChart.resize();
        }
      });
    },
  },
};
</script>

<style scoped>
.rightBot {
  margin-top: 10px;
  width: 100%;
  height: 385px;
  background: url(../../../assets/img/leftBot.png) no-repeat;
  background-size: 100% 100%;
  border: 1px solid transparent;
  /* overflow: hidden; */
}
.main {
  width: 100%;
  height: 320px;
  padding: 0 10px 10px;
  box-sizing: border-box;
}
.chartWrap {
  width: 100%;
  height: 100%;
  background: url(../../../assets/img/rightBotBg.png) no-repeat;
  background-size: 100% 100%;

  background-size: 100% 100%;
}
</style>