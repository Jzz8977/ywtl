<template>
  <div class="rightBot">
    <headerTit :title="title" :time="time"></headerTit>
    <div class="main">
      <div class="chartWrap" id="rankingChart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightBot",
  data() {
    return {
      title: "国家级经济开发区工业总产值排名",
      time: "2020年1-8月",
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
      carData: [0, 7, 13, 19, 25, 25, 25, 25, 25],
      cityData: [0, 6, 12, 18, 23, 23, 23, 23, 23],
      robotData: [0, 5, 11, 17, 21, 21, 21, 21, 21],
      basicData: [0, 4, 10, 16, 20, 20, 20, 20, 20],
      technologyData: [0, 3, 15, 19, 19, 19, 19, 19],
      healthyData: [0, 2, 8, 14, 17, 17, 17, 17, 17],
    };
  },
  mounted() {
    this.initRankingChart();
  },
  methods: {
    initRankingChart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("rankingChart"));

      // 指定图表的配置项和数据
      let option = {
        color: ["#F90CFD", "#985BFF", "#318BFF", "#7AFF77", "#FFE700"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            let str = params[0].name + "<br/>";
            params.forEach((item) => {
              if (item.seriesName == "产值") {
                str +=
                  item.marker +
                  item.seriesName +
                  ": " +
                  item.data +
                  "亿元<br/>";
              } else if (item.seriesName == "增速") {
                str += item.marker + item.seriesName + ": " + item.data + "%";
              }
            });
            return str;
          },
        },
        legend: [
          {
            x: "center",
            bottom: "5%",
            itemWidth: 10,
            itemHeight: 10,
            data: [
              {
                name: "生物技术和大健康",
                icon: "rect",
                textStyle: {
                  color: "#A3D5FF", // 图例文字颜色
                },
              },
              {
                name: "新一代信息技术",
                icon: "rect",
                textStyle: {
                  color: "#A3D5FF", // 图例文字颜色
                },
              },
              {
                name: "基础与新材料",
                icon: "rect",
                textStyle: {
                  color: "#A3D5FF", // 图例文字颜色
                },
              },
            ],
          },
          {
            x: "center",
            y: "bottom",

            itemWidth: 10,
            itemHeight: 10,
            data: [
              {
                name: "机器人和智能制造",
                icon: "rect",
                textStyle: {
                  color: "#A3D5FF", // 图例文字颜色
                },
              },
              {
                name: "都市",
                icon: "rect",
                textStyle: {
                  color: "#A3D5FF", // 图例文字颜色
                },
              },
              {
                name: "高端汽车及新能源汽车",
                icon: "rect",
                textStyle: {
                  color: "#A3D5FF", // 图例文字颜色
                },
              },
            ],
          },
        ],
        grid: {
          left: "5%",
          right: "5%",
          bottom: "13%",
          top: "19%",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            data: this.xAxisMonth,
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
        series: [
          {
            name: "生物技术和大健康",
            type: "line",
            barWidth: 10,
            data: this.carData,
          },
          {
            name: "新一代信息技术",
            type: "line",
            barWidth: 10,
            data: this.cityData,
            symbolSize: 0,
          },
          {
            name: "基础与新材料",
            type: "line",
            barWidth: 10,
            data: this.robotData,
          },
          {
            name: "机器人和智能制造",
            type: "line",
            barWidth: 10,
            data: this.basicData,
            symbolSize: 0,
          },
          {
            name: "都市",
            type: "line",
            barWidth: 10,
            data: this.technologyData,
          },
          {
            name: "高端汽车及新能源汽车",
            type: "line",
            barWidth: 10,
            data: this.healthyData,
            symbolSize: 0,
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.rightBot {
  margin-top: 10px;
  width: 100%;
  height: 385px;
  background: url(../../assets/img/leftBot.png) no-repeat;
  overflow: hidden;
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
  background: url(../../assets/img/rightBotBg.png) no-repeat;
  background-size: 100% 100%;
}
</style>