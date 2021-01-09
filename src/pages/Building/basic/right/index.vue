<template>
  <div class="rightWrap">
    <headerTit :title="title" :time="time"></headerTit>
    <div class="wrapW">
      <div class="charWrap">
        <div class="chart">
          <div id="pie" class="chart">

          </div>
          <div class="pieWrod">注册资金</div>
        </div>
        <div class="pieRight">
          <p>
            <span class="c-FDEC16">35%</span>
            500万以下
          </p>
          <p class="marginLeft">
            <span class="c-00F19D">25.5%</span>
            500-1000万
          </p>
          <p class="marginTop16">
            <span class="c-2DC5FF">20%</span>
            1000-5000万
          </p>
          <p class="marginLeft marginTop16">
            <span class="c-AC71FF">15%</span>
            5000万以上
          </p>
        </div>
      </div>
      <div class="cardWrap">
        <div class="cardBody">
          <div class="card" v-for="item in 19">
            <div class="cardTitle">
              <img v-show="item%2===1" src="../../../../assets/parkImg/lightPoint.png" alt />
              <b v-show="item%2===0">企业名称</b>
              <span>XXXX科技有限公司</span>
            </div>
            <div class="cardType">
              <b>所属产业</b>
              <span>高端汽车及新能源汽车</span>
            </div>
            <div class="cardSum">
              <div>
                <b>产值</b>
                <span>0.53亿</span>
              </div>
              <div class="marginLeft60">
                <b>营收</b>
                <span>0.53亿</span>
              </div>
              <div class="marginLeft60">
                <b>税收</b>
                <span>0.53亿</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicRight",
  data() {
    return {
      title: "入驻企业情况",
      time: "",
      pieDataArr: [
        {
          name: "Oranges",
          value: 40,
        },
        {
          name: "Pears",
          value: 32,
        },
        {
          name: "Pineapples",
          value: 27,
        },
        {
          name: "Grapes",
          value: 18,
        },
      ],
    };
  },
  mounted() {
    this.initPie();
  },
  methods: {
    initPie() {
      let that = this;
      var myChart = this.$echarts.init(document.getElementById("pie"));
      let option = {
        color: ["#FDEC16", "#00FF8F", "#2DC5FF", "#AC71FF"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        series: [
          {
            name: "姓名",
            type: "pie",
            radius: "85%",
            center: ["50%", "50%"],
            data: that.pieDataArr,
            labelLine: {
              show: false,
            },
            label: {
              show: false,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
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

<style  scoped>
.rightWrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.charWrap {
  width: 480px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 30px;
}
.wrapW {
  padding: 0 15px;
  box-sizing: border-box;
}
.chart {
  width: 200px;
  height: 174px;
  position: relative;
  z-index: 0;
}
.pieWrod {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 84px;
  height: 29px;
  font-size: 21px;
  font-family: PingFangSC-Regular;
  font-weight: bolder;
  color: #00508a;
  line-height: 29px;
  z-index: 1;
}
.pieRight {
  width: 282px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.marginLeft {
  margin-left: 20px;
}
.marginTop16 {
  margin-top: 16px;
}
.pieRight p {
  width: 120px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #44b0ff;
  line-height: 25px;
}
.pieRight p span {
  height: 40px;
  font-size: 34px;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: bold;
  line-height: 40px;
  display: block;
}

.c-FDEC16 {
  color: #fdec16;
}
.c-00F19D {
  color: #00f19d;
}
.c-2DC5FF {
  color: #2dc5ff;
}
.c-AC71FF {
  color: #ac71ff;
}

.cardWrap {
  margin-top: 20px;
  width: 480px;
  height: 650px;
  overflow: auto;
}
.cardBody {
  width: 100%;
}

.cardWrap::-webkit-scrollbar {
  width: 2px;
}
.cardWrap::-webkit-scrollbar-track {
  background-color: #1f4076;
}
.cardWrap::-webkit-scrollbar-thumb {
  background-color: #009dd8;
}

.card {
  width: 476px;
  height: 105px;
  background: url(../../../../assets/parkImg/lightBg.png) left center no-repeat;
  background-size: 100% 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 5px;
}
.card:nth-child(even) {
  background: url(../../../../assets/parkImg/darkBg.png) left center no-repeat;
}
.cardTitle {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.cardTitle img {
  width: 87px;
  height: 21px;
}
.cardTitle b {
  height: 25px;
  width: 83px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #06fef7;
  line-height: 25px;
  font-weight: normal;
}
.cardTitle span {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 25px;
  margin-left: 10px;
}
.cardType {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 7px 0;
}
.cardType b {
  font-weight: normal;
  width: 83px;

  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #06fef7;
  line-height: 25px;
}
.cardType span {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 25px;
  margin-left: 10px;
}

.cardSum {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.cardSum b {
  font-weight: normal;
  width: 83px;

  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #06fef7;
  line-height: 25px;
}
.cardSum span {
  height: 25px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 25px;
  margin-left: 10px;
}
.marginLeft60 {
  margin-left: 60px;
}
</style>