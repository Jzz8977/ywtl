<template>
  <div class="midTop">
    <!-- 11 -->
    <headerTit :title="title" :time="time" :url='url'></headerTit>
    <div class="main">
      <div class="mainTop">
        <div class="up" v-for="(item,i) in outValSumData">
          <img src="../../../assets/img/moneyChart.png" v-if="i==0" alt />
          <img src="../../../assets/img/lineChart.png" v-else-if="i==1" alt />
          <img src="../../../assets/img/pieChart.png" v-else-if="i==2" alt />
          <div class="mr">
            <div class="mrt">
              <span class="yellow44 DINAlternate-Bold" v-if="i==0">{{item.val}}</span>
              <span class="white40 DINAlternate-Bold" v-if="i==1">{{item.val}}</span>
              <span class="white40 DINAlternate-Bold" v-else-if="i==2">{{item.val}}</span>
              <span :class="{'DINAlternate':true,'white40':i==2}">{{item.danWei}}</span>
            </div>
            <div class="mrb">{{item.title}}</div>
          </div>
        </div>
        <!-- <div class="up">
          <img src="../../assets/img/lineChart.png" alt />
          <div class="mr">
            <div class="mrt">
              <span class="white40 DINAlternate-Bold">-358.18</span>
              <span>亿元</span>
            </div>
            <div class="mrb A3D5FF">同比变化值</div>
          </div>
        </div>
        <div class="up">
          <div>&nbsp;</div>
          <img src="../../assets/img/pieChart.png" alt />
          <div class="mr">
            <div class="mrt">
              <span class="white40 DINAlternate-Bold">-24%</span>
            </div>
            <div class="mrb A3D5FF">同比增幅</div>
          </div>
          <div>&nbsp;</div>
        </div>-->
        <div class="down" v-for="(item,i) in outValData">
          <div class="downUp">
            <img src="../../../assets/img/diamond.png" alt />
            <span>{{item.chanZhiName}}</span>
            <span class="yellow34 DINAlternate-Bold">{{item.chanZhiNum}}</span>
            <span>亿元</span>
          </div>
          <div class="downBot">
            <div>
              <!-- <p>{{item.tongBiName}}</p> -->
              <p>同比增长</p>
              <p>
                <span class="white24">{{item.tongBiNum}}</span>
                <span>{{item.tongBiDanWei}}</span>
              </p>
            </div>
            <div>
              <p>{{item.zengFuName}}</p>
              <p>
                <span class="white24">{{item.zengFuNum}}{{item.zengFuDanWei}}</span>
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="down">
          <div class="downUp">
            <img src="../../assets/img/diamond.png" alt />
            <span>大兴部分</span>
            <span class="yellow34 DINAlternate-Bold">204.18</span>
            <span>亿元</span>
          </div>
          <div class="downBot">
            <div>
              <p>同步增长</p>
              <p>
                <span class="white24">-22.73</span>
                <span>亿元</span>
              </p>
            </div>
            <div>
              <p>同比增幅</p>
              <p>
                <span class="white24">4.17%</span>
              </p>
            </div>
          </div>
        </div>
        <div class="down">
          <div class="downUp">
            <img src="../../assets/img/diamond.png" alt />
            <span>台马部分</span>
            <span class="yellow34 DINAlternate-Bold">119.07</span>
            <span>亿元</span>
          </div>
          <div class="downBot">
            <div>
              <p>同步增长</p>
              <p>
                <span class="white24">141.12</span>
                <span>亿元</span>
              </p>
            </div>
            <div>
              <p>同比增幅</p>
              <p>
                <span class="white24">4.17%</span>
              </p>
            </div>
          </div>
        </div>-->
      </div>
      <div class="mainBot">
        <div class="chartWrap">
          <div class="chartTitleWrap">
            <div class="line"></div>
            <div class="chartTitle">{{titleLeft}}</div>
            <div class="lineReserve"></div>
          </div>
          <div id="areaChart" class="midTopChart">
            <!-- 总产值增速区域对比 -->
          </div>
        </div>
        <div class="chartWrap">
          <div class="chartTitleWrap">
            <div class="line"></div>
            <div class="chartTitle">{{titleRight}}</div>
            <div class="lineReserve"></div>
          </div>
          <div id="yearChart" class="midTopChart">
            <!-- 经开区本年度产值与增速 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "@/utils/api.js";
export default {
  name: "midTop",
  data() {
    return {
      title: "",
      time: "2020年1-8月",
      yAxisData: [],
      xAxisData: [],
      url:request.midTopTitleDirector,


      //   产值 / 增速
      xAxisMonth: [
        "1-2月",
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
      // 核心区
      hxBarData: [],
      hxLineData: [],
      // 大兴区
      dxBarData: [],
      dxLineData: [],
      // 台马区
      tmBarData: [],
      tmLineData: [],

      outValSumData: [],
      outValData: [],
      IncreaseData: [],
      outValIncreaseMonthData: [],
      titleLeft: "",
      titleRight: "",
      yBarMax: "",
      yBarMin: "",
      yLineMax: "",
      yLineMin: "",
    };
  },
  mounted() {
    this.getEconomicsSituationV2();
    // this.initYearChart();
  },
  methods: {
    async getEconomicsSituationV2() {
      let res = await this.$get(request.economicsSituationV2, {});
      // this.dataArr = res.data.data || [];
      this.time = res.data.date || "";
      this.title = res.data.title || "";
      this.outValSumData = res.data.data.outValSumData || []; //经开区 经开区产值
      let arr = res.data.data.outValData || []; // 核心区 大兴部分 台马部分 产值数据

      this.outValData = this.subArr(arr);

      let IncreaseData = res.data.data.IncreaseData || []; //leftC "总产值增速区域对比"
      this.titleLeft = IncreaseData.title;
      let data = IncreaseData.data;
      let objLeft = this.subChart(data);
      this.yAxisData = objLeft.legendArr;
      this.xAxisData = objLeft.dataArr;
      this.initAreaChart();

      let outValIncreaseMonthData = res.data.data.outValIncreaseMonthData || []; //rightC "经开区本年度产值与增速"
      this.titleRight = outValIncreaseMonthData.title;
      let dataRight = outValIncreaseMonthData.data;
      this.subChartRight(dataRight);
      this.initYearChart();
      // 
      // this.yAxisData = objRight.dataArr;
    },
    // 核心区 同比变化 同比增幅
    subArr(arr) {
      // 过滤数组
      let outValDataArr = [];
      arr.forEach((element) => {
        let brr = element;
        let useObj = {
          chanZhiName: "",
          chanZhiNum: "",
          chanZhiDanWei: "",

          tongBiName: "",
          tongBiNum: "",
          tongBiDanWei: "",

          zengFuName: "",
          zengFuNum: "",
          zengFuDanWei: "",
        };
        brr.forEach((element) => {
          let obj = element;
          if (obj["title"].indexOf("幅") != -1) {
            useObj.zengFuName = obj["title"];
            useObj.zengFuNum = obj["val"];
            useObj.zengFuDanWei = obj["danWei"];
          } else if (obj["title"].indexOf("值") != -1) {
            useObj.tongBiName = obj["title"];
            useObj.tongBiNum = obj["val"];
            useObj.tongBiDanWei = obj["danWei"];
          } else {
            useObj.chanZhiName = obj["title"];
            useObj.chanZhiNum = obj["val"];
            useObj.chanZhiDanWei = obj["danWei"];
          }
        });
        outValDataArr.push(useObj);
      });
      return outValDataArr;
    },
    subChart(arr) {
      let legendArr = [];
      let dataArr = [];
      arr.forEach((v) => {
        legendArr.push(v.name);
        dataArr.push(v.val);
      });
      return {
        legendArr,
        dataArr,
      };
    },
    subChartRight(arr) {
      let legendArr = [];
      let outValDataArr = [];
      let increaseDataArr = [];
      arr.forEach((v) => {
        if (v.name === "核心区") {
          this.hxBarData = v.outValData;
          this.hxLineData = v.increaseData;
        } else if (v.name == "大兴地区") {
          this.dxBarData = v.outValData;
          this.dxLineData = v.increaseData;
        } else if (v.name == "台马地区") {
          this.tmBarData = v.outValData;
          this.tmLineData = v.increaseData;
        }
      });
      // this.subMonthArr();
      this.subMax();
      this.subLineMax();
    },
    subMonthArr() {
      let a = this.hxBarData.length;
      let month = new Date();
      month = month.getMonth();
      let arr = [];
      for (let i = 0; i < a; i++) {
        arr.unshift(month - i + "月");
      }
      this.xAxisMonth = arr;
    },
    subMax() {
      let a = this.hxBarData.concat(this.dxBarData, this.tmBarData);
      this.yBarMax = Math.max(...a);
      this.yBarMin = Math.min(...a);
    },
    subLineMax() {
      let a = this.hxLineData.concat(this.dxLineData, this.tmLineData);
      this.yLineMax = Math.max(...a);
      this.yLineMin = Math.min(...a);
    },
    initAreaChart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("areaChart"));

      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          textStyle: { fontSize: 18 },
          padding: 10,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: "{b}:{c}%",
        },

        grid: {
          left: "13%",
          right: "15%",
          bottom: "9%",
          top: "12%",
          containLabel: true,
        },

        xAxis: [
          {
            type: "value",
            axisLabel: {
              color: "#ffffff",
              fontSize: 16,
              formatter: (value) => {
                if (value < 0) return -value + "%";
                else return value + "%";
              },
            },
            axisTick: {
              alignWithLabel: true,
              show: true,
              inside: "top",
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#3A82CA",
              }, // 样式
            },
          },
        ],
        yAxis: [
          {
            type: "category",
            interval: 0,
            axisTick: {
              alignWithLabel: true,
              show: true,
              lineStyle: {
                color: "#3A82CA",
              },
            },
            boundaryGap: true,
            offset: that.subFont(0.4),
            data: this.yAxisData,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                //改变刻度字体样式
                fontSize: that.subFont(0.16),
                color: "#fff",
              },
            },
            splitLine: {
              interval: 0,
              show: true,
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
            name: "流入",
            type: "bar",
            barWidth: 10,
            stack: "总量",
            barCategoryGap: "20%",

            label: {
              normal: {
                show: true,
                formatter: "{c}%",
                position: "right",
                textStyle: {
                  color: "#ffffff",
                  fontSize: that.subFont(0.14),
                },
              },
            },
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
                    colorList = ["#FFA000", "#CAFF00"];
                  }
                  return new that.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
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
            // data: this.xAxisData,
            data: this.xAxisData.map((item) => {
              return {
                value: item,
                label: {
                  // 设置显示label
                  show: true,
                  // 设置label的位置
                  position: item > 0 ? "right" : "left",
                  // 设置label的文字颜色
                  fontSize: that.subFont(0.2),
                  color: "#ffffff",
                  fontFamily: "DIN Alternate Bold",
                  // 格式化label文字
                  formatter: function (item) {
                    return item.value + "%";
                  },
                },
              };
            }),
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        // 自动渲染echarts
        if (myChart) {
          myChart.setOption(
            {
              tooltip: {
                textStyle: { fontSize: 18 },
                padding: 10,
                trigger: "axis",
                axisPointer: {
                  type: "shadow",
                },
                formatter: "{b}:{c}%",
              },

              grid: {
                left: "13%",
                right: "15%",
                bottom: "9%",
                top: "12%",
                containLabel: true,
              },

              xAxis: [
                {
                  type: "value",
                  axisLabel: {
                    color: "#ffffff",
                    fontSize: 16,
                    formatter: (value) => {
                      if (value < 0) return -value + "%";
                      else return value + "%";
                    },
                  },
                  axisTick: {
                    alignWithLabel: true,
                    show: true,
                    inside: "top",
                  },
                  splitLine: {
                    show: false,
                  },
                  axisLine: {
                    show: true,
                    lineStyle: {
                      color: "#3A82CA",
                    }, // 样式
                  },
                },
              ],
              yAxis: [
                {
                  type: "category",
                  interval: 0,
                  axisTick: {
                    alignWithLabel: true,
                    show: true,
                    lineStyle: {
                      color: "#3A82CA",
                    },
                  },
                  boundaryGap: true,
                  offset: that.subFont(0.4),
                  data: this.yAxisData,
                  axisLabel: {
                    formatter: "{value}",
                    textStyle: {
                      //改变刻度字体样式
                      fontSize: that.subFont(0.16),
                      color: "#fff",
                    },
                  },
                  splitLine: {
                    interval: 0,
                    show: true,
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
                  name: "流入",
                  type: "bar",
                  barWidth: 10,
                  stack: "总量",
                  barCategoryGap: "20%",

                  label: {
                    normal: {
                      show: true,
                      formatter: "{c}%",
                      position: "right",
                      textStyle: {
                        color: "#ffffff",
                        fontSize: that.subFont(0.14),
                      },
                    },
                  },
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
                          colorList = ["#FFA000", "#CAFF00"];
                        }
                        return new that.$echarts.graphic.LinearGradient(
                          1,
                          0,
                          0,
                          0,
                          [
                            {
                              offset: 0,
                              color: colorList[0],
                            },
                            {
                              offset: 1,
                              color: colorList[1],
                            },
                          ]
                        );
                      },
                    },
                  },
                  // data: this.xAxisData,
                  data: this.xAxisData.map((item) => {
                    return {
                      value: item,
                      label: {
                        // 设置显示label
                        show: true,
                        // 设置label的位置
                        position: item > 0 ? "right" : "left",
                        // 设置label的文字颜色
                        fontSize: that.subFont(0.2),
                        color: "#ffffff",
                        fontFamily: "DIN Alternate Bold",
                        // 格式化label文字
                        formatter: function (item) {
                          return item.value + "%";
                        },
                      },
                    };
                  }),
                },
              ],
            },
            true
          );
          myChart.resize();
        }
      });
    },
    initYearChart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("yearChart"));

      // 指定图表的配置项和数据
      let option = {
        color: ["#00FFFD", "#FFE700", "#1890FF"],
        tooltip: {
          textStyle: {
            fontSize: that.subFont(0.18),
          },
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          padding: 10,
          formatter: function (params, ticket, callback) {
            var showHtm = "";
            var month = params[0].name;
            for (var i = 0; i < params.length; i++) {
              let obj = params[i];
              //x轴名称

              var name = obj.name;
              //名称
              var text = obj.seriesName;
              //值
              var value = obj.value;
              if (i > 2) {
                text += "增速";
                value += "%";
              } else {
                text += "产值";
                value += "亿元";
              }
              showHtm += text + ":" + value + "<br/>";
            }
            return month + "<br/>" + showHtm;
          },
        },
        legend: {
          x: "center",
          // y: "bottom",
          bottom: "2%",
          itemWidth: 15,
          itemHeight: 15,
          fontFamily: "PingFangSC-Regular, PingFang SC",
          data: [
            {
              name: "核心区",
              icon: "rect",
              textStyle: {
                fontSize: that.subFont(0.16),
                color: "#A3D5FF", // 图例文字颜色
              },
            },
            {
              name: "大兴区",
              icon: "rect",
              textStyle: {
                fontSize: that.subFont(0.16),
                color: "#A3D5FF", // 图例文字颜色
              },
            },
            {
              name: "台马区",
              icon: "rect",
              textStyle: {
                fontSize: that.subFont(0.16),
                color: "#A3D5FF", // 图例文字颜色
              },
            },
          ],
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "14%",
          top: "17%",
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
            axisLabel: {
              fontSize: that.subFont(0.16),
              color: "#ffffff",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#3A82CA",
              }, // 样式
            },
          },
        ],

        yAxis: [
          {
            type: "value",
            name: "亿元        ",
            nameTextStyle: {
              color: "#06FEF7",
            },
            axisTick: {
              alignWithLabel: true,
              show: false,
            },
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                //改变刻度字体样式
                color: "#fff",
              },
            },
            max: this.yBarMax,
            // min: this.yBarMin,

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
            max: this.yLineMax,
            // min: this.yLineMin,
            interval: 10,
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
            name: "核心区",
            type: "bar",
            data: this.hxBarData,
            barGap: 0,
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
                    colorList = ["#1890FF", "#00FFFD"];
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
            name: "大兴区",
            type: "bar",
            data: this.dxBarData,
            barGap: 0,
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
                    colorList = ["#FF8E00", "#FFE700"];
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
            name: "台马区",
            type: "bar",
            data: this.tmBarData,
            barGap: 0,
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
            name: "核心区",
            type: "line",
            data: this.hxLineData,
            symbolSize: 0,
            yAxisIndex: 1,
            itemStyle: {
              //通常情况下：
              normal: {
                width: 3, //折线宽度
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: "#00FFFD",
              },
            },
          },
          {
            name: "大兴区",
            type: "line",
            data: this.dxLineData,
            symbolSize: 0,
            yAxisIndex: 1,
            itemStyle: {
              //通常情况下：
              normal: {
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: "#FFE700",
              },
            },
          },
          {
            name: "台马区",
            type: "line",
            data: this.tmLineData,
            symbolSize: 0,
            yAxisIndex: 1,
            itemStyle: {
              //通常情况下：
              normal: {
                // barBorderRadius: 8,
                //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                color: "#1890FF",
              },
            },
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        // 自动渲染echarts
        if (myChart) {
          // myChart.clear()
          myChart.setOption({
            legend: {
              x: "center",
              // y: "bottom",
              bottom: "2%",
              itemWidth: 15,
              itemHeight: 15,
              fontFamily: "PingFangSC-Regular, PingFang SC",
              data: [
                {
                  name: "核心区",
                  icon: "rect",
                  textStyle: {
                    fontSize: that.subFont(0.16),
                    color: "#A3D5FF", // 图例文字颜色
                  },
                },
                {
                  name: "大兴区",
                  icon: "rect",
                  textStyle: {
                    fontSize: that.subFont(0.16),
                    color: "#A3D5FF", // 图例文字颜色
                  },
                },
                {
                  name: "台马区",
                  icon: "rect",
                  textStyle: {
                    fontSize: that.subFont(0.16),
                    color: "#A3D5FF", // 图例文字颜色
                  },
                },
              ],
            },
          });
          myChart.resize();
        }
      });
    },
  },
};
</script>

<style scoped>
span {
  /* float: left;
     */
  margin-left: -5px;
}
.midTop {
  width: 924px;
  height: 590px;
  background: url(../../../assets/img/midTop.png);
  background-size: 100% 100%;

  overflow: hidden;
}
.midTopChart {
  width: 100%;
  height: 226px;
}
.main {
  padding: 0 10px 10px;
  box-sizing: border-box;
}
.mainTop {
  height: 241px;
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  background: url(../../../assets/img/midTopBg.png) 11px center no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.mainTop > div {
  width: 290px;
  height: 110px;
  padding: 10px;
  box-sizing: border-box;
}
.up {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.up img {
  width: 50px;
  height: 50px;
}
.up:nth-child(2) {
  width: 310px;
}
.up:nth-child(3) {
  width: 270px;
}
.mr {
}
.mrt {
  height: 40px;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
  white-space: nowrap;
}
.mrb {
  height: 40px;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 40px;
}
.A3D5FF {
  font-weight: 400;
  color: #a3d5ff;
}
.down {
  padding-top: 10px !important;
  box-sizing: border-box;
}
.down:nth-child(5) {
  width: 310px;
}
.down:nth-child(6) {
  width: 270px;
}
.downUp {
  color: #ffffff;
  font-size: 22px;
  text-indent: 22px;
  white-space: nowrap;
  margin-top: 5px;
}
.downUp > img {
  width: 18px;
  height: 18px;
}
.downBot {
  display: flex;
  margin: 5px 0 0 0;
}
.downBot > div {
  width: 100%;
  height: 60px;
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 30px;
  background: url(../../../assets/img/linePoint.png) left center no-repeat;
}
.downBot > div:nth-child(1) {
  margin-left: 45px;
}
.downBot > div > p {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
  text-indent: 18px;
  white-space: nowrap;
}
.downBot > div > p:nth-child(2) {
  /* height: ; */
}
.mainBot {
  height: 267px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.chartWrap {
  width: 445px;
  height: 248px;
  background: url(../../../assets/img/chartBg.png) no-repeat;
  background-size: 100% 100%;

  padding-top: 16px;
}
.chartTitleWrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 25px;
}
.chartTitle {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 25px;
}
</style>