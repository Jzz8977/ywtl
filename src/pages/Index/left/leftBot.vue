<template>
  <div class="leftBot">
    <!-- 11 -->
    <headerTit :title="title" :time="time"></headerTit>
    <div class="main">
      <div class="mainChildDiv" v-for="(item,i) in dataArr">
        <div class="barName">
          <div :class="{'city':true,'yellow20':item.name=='北京经开区'}">{{item.name}}</div>
          <div class="money">
            <span :class="{'DINAlternate-Bold':true,'white':true,'yellow26':item.name=='北京经开区'}">{{item.value}}</span>
            <span class>亿元</span>
          </div>
          <div class="compare">
            同比
            <span
              :class="{'DINAlternate-Bold':true,'white':true,'red22':item.name=='北京经开区'&&item.percentages>0,'green':item.name=='北京经开区'&&item.percentages<0,}"
              style="font-size:22px;margin-left:5px"
            >{{item.percentages}}%</span>
          </div>
        </div>
        <div class="bar">
          <div
            :class="{'barContent':i!=4,'barContent50':i==4}"
            :style="{'width': 4.38*(item.value/max*100)+'px'}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "@/utils/api.js";
export default {
  name: "leftBot",
  data() {
    return {
      title: "国家级经济开发区工业总产值排名",
      time: "2020年1-8月",
      dataArr:[],
      max:0,
    };
  },
  mounted() {
    this.getTop10SituationV2();
  },
  methods: {
    async getTop10SituationV2() {
      let res = await this.$get(request.top10SituationV2, {});
      this.dataArr = res.data.data || [];
      this.time = res.data.date || "";
      this.title = res.data.titel || "";
     this.max = Math.max.apply(Math, this.dataArr.map(function(o) {return o.value}))
    },
  },
};
</script>

<style scoped>
.leftBot {
  margin-top: 10px;
  width: 100%;
  height: 385px;
  background: url(../../../assets/img/leftBot.png) no-repeat;
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
  width: 200px;
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
  width: 110px;
  font-size: 16px;
  color: #ffffff;
  line-height: 22px;
  word-break: keep-all;
  text-align: right;
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
  background: linear-gradient(270deg, #caff00 0%, #ffa000 100%);
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
  border-top: 17px solid #caff00;
  border-right: 9px solid transparent;
}
</style>