<template>
  <div class="leftBot">
    <!-- 11 -->
    <headerTit :title="title" :time="time"></headerTit>
    <div class="main">
      <div class="mainChildDiv" v-for="item in 6">
        <div class="barName">
          <div :class="{'city':true,'yellow20':item==5}">广州经开区</div>
          <div class="money">
            <span :class="{'white':true,'yellow26':item===5}">3572.95</span>
            <span class>亿元</span>
          </div>
          <div class="compare">
            同比
            <span :class="{'white':true,'red22':item==5}" style="font-size:22px">-4.03%</span>
          </div>
        </div>
        <div class="bar">
          <div :class="{'barContent':item!=5,'barContent50':item==5}" :style="{'width': 4.38*(10*item)+'px'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftBot",
  data() {
    return {
      title: "国家级经济开发区工业总产值排名",
      time: "2020年1-8月",
    };
  },
};
</script>

<style scoped>
.leftBot {
  margin-top: 10px;
  width: 100%;
  height: 385px;
  background: url(../../assets/img/leftBot.png) no-repeat;
  overflow: hidden;
}
.main {
  width: 100%;
  height: calc(385px - 41px);
  padding: 20px;
  box-sizing: border-box;
}
.mainChildDiv {
  width: 100%;
  height: 48px;
  margin-top: 12px;
}
.mainChildDiv:nth-child(1) {
  margin-top: 0;
}
.barName {
  overflow: hidden;
  font-size: 20px;
  color: #ffffff;
  line-height: 28px;
  display: flex;
}
.barName > div {
}
.city {
  width: 180px;
  flex: 1;
}
.money {
  width: 150px;
  font-size: 16px;
  color: #ffffff;
  line-height: 22px;
  word-break: keep-all;
}
.compare {
  display: flex;
  align-items: baseline;
  width: 125px;
  font-size: 16px;
  color: #ffffff;
  line-height: 22px;
  word-break: keep-all;
}
.bar {
  height: 17px;
  margin-top: 3px;
}
.barContent {
  background: linear-gradient(
    270deg,
    #25d3e7 0%,
    rgba(34, 120, 255, 0.75) 100%
  );
  height: 100%;
  position: relative;
  opacity: 0.6;

}
.barContent::after {
  content: ".";
  position: absolute;
  right: -9px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 17px solid #25d3e7;
  border-right: 9px solid transparent;
}
.barContent50 {

background: linear-gradient(270deg, #CAFF00 0%, #FFA000 100%);
  height: 100%;
  position: relative;

}
.barContent50::after {
  content: ".";
  position: absolute;
  right: -9px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 17px solid #CAFF00;
  border-right: 9px solid transparent;
}
</style>