<template>
  <div class="midBot">
    <headerTit :title="title" :time="time"></headerTit>
    <div class="main">
      <div class="chartWrap" id="speedChart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "midBot",
  data() {
    return {
      title: "北京市各区工业总产值及增速比较分析",
      time: "2020年1-8月",
      //   产值 / 增速
      xAxisMonth: [
        "通州区",
        "朝阳区",
        "门头沟区",
        "西城区",
        "亦庄开发区",
        "石景山区",
        "海淀区",
        "朝阳区",
        "昌平区",
        "房山区",
        "怀柔区",
        "延庆区",
        "平谷区",
        "密云区",
        "大兴区",
        "丰台区",
        "东城区",
      ],
      // 核心区
      czData: [
        50,
        80,
        90,
        100,
        50,
        80,
        90,
        100,
        50,
        80,
        90,
        100,
        50,
        80,
        90,
        100,
        50,
        80,
      ],
      // 台马区
      zsData: [
        50,
        10,
        100,
        200,
        50,
        10,
        100,
        200,
        50,
        10,
        100,
        200,
        50,
        10,
        100,
        200,
        50,
        10,
      ],
    };
  },
  mounted() {
    this.initSpeedChart();
  },
  methods: {
    initSpeedChart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("speedChart"));

      // 指定图表的配置项和数据
      let option = {
        color: ["#93FDFF", "#FFE700"],
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
        legend: {
          x: "center",
          y: "top",
          itemWidth: 10,
          itemHeight: 10,
          data: [
            {
              name: "产值",
              icon: "rect",
              textStyle: {
                color: "#A3D5FF", // 图例文字颜色
              },
            },
            {
              name: "增速",
              icon: "rect",
              textStyle: {
                color: "#A3D5FF", // 图例文字颜色
              },
            },
          ],
        },
        grid: {
          left: "3%",
          right: "3%",
          bottom: "3%",
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
              show: false,
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
              rotate: 45, // 倾斜角度
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
            name: "总产值/亿元    ",
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
              show: false,
              lineStyle: {
                color: "#3A82CA",
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#3A82CA",
              }, // 样式
            },
          },
          {
            name: "       增速",
            nameTextStyle: {
              color: "#06FEF7",
            },
            type: "value",
            axisTick: {
              alignWithLabel: true,
              show: false,
            },
            data: this.yAxisData,
            axisLabel: {
              formatter: "{value}%",
              textStyle: {
                //改变刻度字体样式
                color: "#fff",
              },
            },

            splitLine: {
              show: false,
              lineStyle: {
                color: "#3A82CA",
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
            name: "产值",
            type: "bar",
            barWidth: 10,
            barGap:0,
            data: this.zsData,
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
                    colorList = ["#00B7FF", "#96FEFF"];
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
            name: "增速",
            type: "bar",
            barWidth: 10,
            data: this.czData,
            symbolSize: 0,
            yAxisIndex: 1,
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
.midBot {
  margin-top: 10px;
  width: 924px;
  height: 385px;
  background: url(../../assets/img/midBot.png) no-repeat;
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
  background: url(../../assets/img/midBotBg.png) no-repeat;
  background-size: 100% 100%;
}
</style>