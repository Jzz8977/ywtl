<template>
  <div class="leftTop">
    <headerTit :title="title" :time="time"></headerTit>

    <div class="main">
      <div class="card" v-for=" item in 4">
        <div class="cardTop">
          <div class="leftDiv">工业总产值</div>
          <div class="midDiv">
            <div class="midDivP">
              <span>已完成</span>
              <span class="yellow DINAlternate-Bold">3177.81</span>
              <span>亿元</span>
            </div>
            <div class="midDivP2">
              <span>全年目标</span>
              <span class="white DINAlternate-Bold">4188</span>
              <span>亿元</span>
            </div>
          </div>
          <div class="rightDiv">
            <div
              :class="{'rightDivP':true, 'red':item>=2,'green':item<2,'DINAlternate-Bold':true}"
            >+4.21%</div>
            <div class="rightDivP2">同比增强</div>
          </div>
        </div>
        <div class="barWrap">
          <div class="bar">
            <div class="barContent" :style="{'width': 4.38*50+'px'}"></div>
          </div>
          <div class="barNum">100%</div>
        </div>
      </div>
      <!-- <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "leftTop",

  data() {
    return {
      title: "核心区经济指标完成情况",
      time: "2020年1-8月",
    };
  },
};
</script>

<style scoped>
.leftTop {
  width: 100%;
  height: 590px;
  background: url(../../assets/img/leftTop.png) no-repeat;
  overflow: hidden;
}
.main {
  height: 524px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.card {
  width: 100%;
  height: 120px;
  margin-bottom: 10px;

  background: url(../../assets/img/leftTopBgDiv.png) no-repeat;
  border-radius: 4px;
}
.card:nth-child(even) {
  background: url(../../assets/img/leftTopBgDiv2.png) no-repeat;
}

.cardTop {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  height: 70px;
}
.leftDiv {
  width: 128px;
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 28px;
  color: #ffffff;
  background: url(../../assets/img/line.png) right center no-repeat;
}
.midDiv {
  width: 221px;
  height: 100%;
  color: #ffffff;
  padding: 0 10px;
  font-size: 16px;
  background: url(../../assets/img/line.png) right center no-repeat;
  position: relative;
}
.rightDiv {
  width: 85px;
  text-align: left;
  padding: 0 10px;
}
.barWrap {
  width: 100%;
  height: 17px;
  /* background: rgba(25,131,239,0.5); */
  margin-top: 18px;
  padding: 0 10px;
  box-sizing: border-box;
  position: relative;
}
.bar {
  width: 100%;
  height: 100%;
  background: rgba(25, 131, 239, 0.5);
}
.barContent {
  /* background: url(../../assets/img/barSq.png) left center no-repeat; */
  background: linear-gradient(
    270deg,
    #25d3e7 0%,
    rgba(34, 120, 255, 0.75) 100%
  );
  height: 100%;
  position: relative;
}
.barContent::after {
  content: ".";
  /* width: 9px; */
  /* height: 17px; */
  position: absolute;
  right: -9px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 17px solid #25d3e7;
  border-right: 9px solid transparent;
}

.barNum {
  /* color: ; */
  font-size: 30px;
  font-family: ;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  left: 25px;
  bottom: 0;
}
.midDivP {
  position: absolute;
  height: 40px;
  top: -10px;
}
.midDivP2 {
  position: absolute;
  height: 30px;
  bottom: 0px;
}

.rightDivP {
  font-size: 26px;
}
.rightDivP2 {
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
}


</style>