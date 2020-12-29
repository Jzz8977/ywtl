<template>
  <div class="rightBot">
    <headerTit :title="title" :time="time"></headerTit>
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
      title: "重点产业工业总产值分析",
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
      legendArr: [],
      carData: [0, 7, 13, 19, 25, 25, 25, 25, 25],
      cityData: [0, 6, 12, 18, 23, 23, 23, 23, 23],
      robotData: [0, 5, 11, 17, 21, 21, 21, 21, 21],
      basicData: [0, 4, 10, 16, 20, 20, 20, 20, 20],
      technologyData: [0, 3, 15, 19, 19, 19, 19, 19],
      healthyData: [0, 2, 8, 14, 17, 17, 17, 17, 17],

      series: [
        {
          name: "生物技术和大健康",
          type: "line",
          smooth: true,
          symbolSize: 0,

          data: this.carData,
        },
      ],
    };
  },
  mounted() {
    this.getEconomicsSituationV2();
  },
  methods: {
    async getEconomicsSituationV2() {
      let res = await this.$get(request.monthCategoryDataV2, {});
      // this.dataArr = res.data.data || [];
      // debugger;
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
      this.legendArr = legendArr;
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
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            let str = params[0].name + "<br/>";
            params.forEach((item) => {
              str +=
                item.marker + item.seriesName + ": " + item.data + "亿元<br/>";
            });
            return str;
          },
        },
        legend: {
          x: "center",
          y:'bottom',
          // bottom: "8%",
          // align:'center',
          width:350,
          itemWidth: 10,
          itemHeight: 10,
          fontSize: 16,
          data: this.legendArr,
        },
        grid: {
          left: "6%",
          right: "5%",
          bottom: "15%",
          top: "15%",
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
              fontSize: 16,
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
        if (myChart) myChart.resize();
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