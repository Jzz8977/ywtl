<template>
  <div class="rightWrap">
    <headerTit :title="title" :time="time" :url="url"></headerTit>
    <div class="main">
      <div class="serBox">
        <span class="selTit l130">选择时段：</span>
        <el-date-picker
          class="selSty2"
          v-model="date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <span class="selTit l35">指标类型：</span>
        <el-select class="selSty" v-model="type" placeholder="请选择">
          <el-option
            v-for="item in zbOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span class="selTit l38">指数周期：</span>
        <el-select class="selSty" v-model="index" placeholder="请选择">
          <el-option
            v-for="item in zsOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>

        <div class="btnSer l55"></div>
      </div>
      <div class="mainTop">
        <div class="mainTit">
          <div class="line"></div>
          <div class="chartTitle">{{revenueTitle}}</div>

          <div class="lineReserve"></div>
        </div>
        <div class="chartWrap" id="earnChart"></div>
      </div>
      <div class="mainBot">
        <div class="mainTit">
          <div class="line"></div>
          <div class="chartTitle">{{top10Title}}</div>

          <div class="lineReserve"></div>
        </div>
        <div class="tabWrap">
          <table class="tabCon">
            <thead class="tabTit">
              <tr>
                <th>排名</th>
                <th>企业名称</th>
                <th>公司地址</th>
                <th>所属产业</th>
                <th>营收</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,i) in top10Arr">
                <td>{{i+1}}</td>
                <td>{{item.qymc}}</td>
                <td>{{item.qydz}}</td>
                <td>{{item.sscy}}</td>
                <td>{{item.ys}}亿</td>
              </tr>
              <!-- <tr>
                <td>1</td>
                <td>XXXX投资开发股份有限公司</td>
                <td>北京市经济技术开发区同济中路7号</td>
                <td>大数据</td>
                <td>197亿</td>
              </tr>
              <tr>
                <td>2</td>
                <td>XXXX投资开发股份有限公司</td>
                <td>北京市经济技术开发区同济中路7号</td>
                <td>新一代信息技术</td>
                <td>197亿</td>
              </tr>
              <tr>
                <td>3</td>
                <td>XXXX投资开发股份有限公司</td>
                <td>北京市经济技术开发区同济中路7号</td>
                <td>大数据</td>
                <td>197亿</td>
              </tr>
              <tr>
                <td>4</td>
                <td>XXXX投资开发股份有限公司</td>
                <td>北京市经济技术开发区同济中路7号</td>
                <td>新一代信息技术</td>
                <td>197亿</td>
              </tr>
              <tr>
                <td>5</td>
                <td>XXXX投资开发股份有限公司</td>
                <td>北京市经济技术开发区同济中路7号</td>
                <td>大数据</td>
                <td>197亿</td>
              </tr>
              <tr>
                <td>6</td>
                <td>XXXX投资开发股份有限公司</td>
                <td>北京市经济技术开发区同济中路7号</td>
                <td>新一代信息技术</td>
                <td>197亿</td>
              </tr>-->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "@/utils/api.js";

export default {
  name: "infoRight",
  data() {
    return {
      title: "楼宇经营大数据分析",
      time: "",
      url: "",
      date: "",
      revenueTitle: "",
      xAxisMonth: [
        "",
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
        "",
      ],
      series: [],

      buildingId: "JK01007",
      top10Title: "",
      top10Arr: [],

      index: "1",
      zsOption: [
        {
          value: "0",
          label: "年指数",
        },
        {
          value: "1",
          label: "月指数",
        },
      ],
      type: "0",
      zbOption: [
        {
          value: "0",
          label: "产值",
        },
        {
          value: "1",
          label: "营业收入",
        },
        {
          value: "2",
          label: "利润总额",
        },
        {
          value: "3",
          label: "用工人数",
        },
        {
          value: "4",
          label: "能耗",
        },
      ],
    };
  },
  mounted() {
    this.buildingId =
      (this.$route.query && this.$route.query.parkId) || "JK01007";
    this.moveEnterprisesLy();
  },
  methods: {
    async moveEnterprisesLy() {
      let result = await this.$get(request.moveEnterprisesLy, {
        id: this.buildingId,
        beginDate: "",
        beginEnd: "",
        type: this.type, //指标类型 0 产值 1 营业收入 2 利润总额3 用工人数4 能耗
        index: this.index, //指数周期  0 年指数  1 月指数
      });
      debugger
      let res = result.data || {};
      if (res) {
        this.title = res.title;
        let top10 = res.top10;
        this.top10Title = top10.title || "园区十佳企业";
        this.top10Arr = top10.data || [];

        let revenue = (this.revenue = res.revenue);
        this.revenueTitle = revenue.title || "营收收入走势";

        if (this.index == 0) {
          this.xAxisMonth = revenue.xAxisdata || [];
          let dataArr = revenue.data;

          this.initBarChart();
        } else if (this.index == 1) {
          this.xAxisMonth = revenue.month || [];
          let dataArr = revenue.data;
          let series = [];
          dataArr.forEach((v) => {
            let obj = {
              name: v.name,
              type: "line",
              symbolSize: 0,
              data: v.data,
              // color:"#a5a5a5",
              label: {
                normal: {
                  show: false,
                },
              },
            };
            series.push(obj);
          });
          this.series = series;
          console.log(series);
          this.initEarnChart();
        }
      }
    },
    initEarnChart() {
      let that = this;
      var myChart = this.$echarts.init(document.getElementById("earnChart"));
      let option = {
        color: ["#FFE700", "#93FDFF", "#318BFF"],
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
        },
        legend: [
          {
            x: "center",
            // y: "bottom",
            bottom: "4%",
            // align:'center',
            width: 1000,
            itemWidth: 15,
            itemHeight: 15,
            itemGap: 30,
            icon: "rect",
            textStyle: {
              // fontSize: 16,
              fontSize: that.subFont(0.22),
              color: "#3A82CA",
              fontWeight: "500",
            },
            // data: this.legendArr,
          },
        ],
        grid: {
          left: "14%",
          right: "14%",
          bottom: "14%",
          top: "8%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: that.xAxisMonth,
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
              fontSize: that.subFont(0.22),
              // formatter: function (value) {
              //     return value.length > 5 ? value.substring(0, 5) + "..." : value;
              // },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            nameTextStyle: {
              color: "#06FEF7",
            },
            axisTick: {
              alignWithLabel: true,
              show: false,
            },
            // data: this.yAxisData,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                //改变刻度字体样式
                color: "#fff",
              },
              fontSize: that.subFont(0.22),
              fontWeight: "500",
            },
            splitLine: {
              show: true,
              lineStyle: {
                // 使用深浅的间隔色
                color: "#3A82CA",

                type: "solid",
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
            name: "",
            nameTextStyle: {
              color: "#06FEF7",
            },
            axisTick: {
              alignWithLabel: true,
              show: false,
            },
            // data: this.yAxisData,
            splitLine: {
              show: true,
              lineStyle: {
                // 使用深浅的间隔色
                color: "#3A82CA",

                type: "solid",
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

      myChart.setOption(option);
      window.onresize = function () {
        setTimeout(() => {
          if (myChart) myChart.resize();
        }, 100);
      };
    },
    initBarChart() {
      var myChart = this.$echarts.init(document.getElementById("earnChart"));

      let option = {
        xAxis: {
          type: "category",
          data: [
            "2020年企业经营收入",
            "2019年企业经营收入",
            "企业经营收入预测",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)",
            },
          },
        ],
      };

      myChart.setOption(option, true);
      window.onresize = function () {
        setTimeout(() => {
          if (myChart) myChart.resize();
        }, 100);
      };
    },
  },
};
</script>

<style scoped>
.rightWrap {
  width: 100%;
  height: 100%;
  padding: 0 0px 17px 0;
  box-sizing: border-box;
}
.main {
  width: 100%;
  box-sizing: border-box;
  padding: 0 25px 20px 20px;
}
.serBox {
  height: 38px;
  width: 100%;
  /* background: brown; */
}
.mainTop {
  margin-top: 13px;
  width: 100%;
  height: 395px;
  background: url(../../../../assets/img/midBotBg.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.mainBot {
  margin-top: 10px;
  width: 100%;
  height: 395px;
  background: url(../../../../assets/img/midBotBg.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}
.mainTit {
  height: 25px;
  width: 339px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
}
.chartTitle {
  height: 25px;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 25px;
}
.chartWrap {
  width: 100%;
  height: calc(100% - 50px);
}
.lines {
  width: 18px;
  height: 2px;
  display: block;
  background: #a1d3fc;
  margin: 0 10px;
}
.serBox {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
}
.selTit {
  color: #06fef7;
  font-size: 20px;
  font-family: PingFangSC-Medium,  PingFang SC;
  font-weight: 500;
}
.selSty {
  appearance: none;
  appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
  background-image: url(../../../../assets/parkImg/selUp.png),
    url(../../../../assets/parkImg/selBg.png);
  background-repeat: no-repeat, no-repeat;
  background-position: 90% center, center;
  border: none;
  height: 38px;
  width: 129px;
  color: #fff;
  font-family: PingFangSC-Medium,  PingFang SC;
  padding-left: 15px;
  font-size: 18px;
}
.btnSer {
  width: 122px;
  height: 38px;
  background-image: url(../../../../assets/parkImg/btn.png);
  display: inline-block;
  cursor: pointer;
}
.tabWrap {
  width: 1309px;
  height: 321px;
  margin: 0 auto;
  margin-top: 18px;
  padding: 0 30px 0 10px;
  box-sizing: border-box;
  overflow: auto;
}
.tabWrap::-webkit-scrollbar {
  width: 4px;
}
.tabWrap::-webkit-scrollbar-track {
  background-color: #1f4076;
}
.tabWrap::-webkit-scrollbar-thumb {
  background-color: #009dd8;
}
.tabCon {
  width: 100%;
  border-collapse: collapse;
}
.tabCon tr {
  width: 100%;
  height: 50px;
  border-top: 2px solid #033385;
  border-bottom: 2px solid #033385;
}
.tabCon .tabTit tr {
  background: linear-gradient(
    to right,
    rgba(2, 78, 168, 0.5),
    rgba(4, 55, 125, 0.5)
  );
  border-top: none;
}
.tabTit th {
  font-size: 20px;
  color: #06fef7;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  text-align: center;
}

.tabTit th:first-child {
  width: 112px;
}
.tabTit th:last-child {
  width: 180px;
}
.tabCon td {
  text-align: center;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}
tbody tr:nth-child(even) {
  background: linear-gradient(
    to right,
    rgba(2, 78, 168, 0.5),
    rgba(4, 55, 125, 0.5)
  );
}
tbody tr:nth-child(odd) {
  background: linear-gradient(
    to right,
    rgba(2, 63, 140, 0.5),
    rgba(5, 47, 111, 0.5)
  );
}

.selSty >>> .el-input__inner {
  color: #fff;
  font-family: PingFangSC-Medium,  PingFang SC;
  font-size: 18px;
}
>>> .el-input__inner,
>>> .el-range-input {
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
}
.selSty2 {
  /* width: 2; */
  appearance: none;
  appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
  /* background-image: url(../../../../assets/parkImg/selUp.png), */
  /* url(../../../../assets/parkImg/selBg.png); */
  /* background-repeat: no-repeat, no-repeat; */
  /* background-position: 90% center, center; */
  border: none;
  height: 38px;
  width: 260px;
}
.selSty2 >>> .el-range-input {
  color: #fff;
  font-family: PingFangSC-Medium,  PingFang SC;
  font-size: 18px;
  background-image: url(../../../../assets/parkImg/selUp.png),
    url(../../../../assets/parkImg/selBg.png) !important;
  background-repeat: no-repeat, no-repeat !important;
  background-position: 90% center, center !important;
  border: none;
  height: 38px;
  width: 129px;
}
>>> .el-range-separator {
  color: #fff;
  font-family: PingFangSC-Medium,  PingFang SC;
  font-size: 18px;
}
>>> .el-input__icon {
}
>>> .el-range__icon {
  display: none !important;
}
>>> .el-icon-date {
}
</style>