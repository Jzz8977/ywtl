<template>
  <div class="leftBot">
    <!-- 11 -->
    <headerTit :title="title" :time="time" :url="url"></headerTit>
    <div class="main">
      <div class="mainChildDiv" v-for="(item,i) in dataArr">
        <div class="barName">
          <div :class="{'city':true,'yellow20':item.name=='北京经开区'}">{{item.name}}</div>
          <div class="money">
            <span
              :class="{'DINAlternate-Bold':true,'white':true,'yellow26':item.name=='北京经开区'}"
            >{{item.value}}</span>
            <span class>亿元</span>
          </div>
          <div class="compare">
            同比
            <span
              :class="{'DINAlternate-Bold':true,'white':true,'red26':item.name=='北京经开区'&&item.percentages>0,'green26':item.name=='北京经开区'&&item.percentages<0,}"
              style="margin-left:5px"
            >{{item.percentages}}%</span>
          </div>
        </div>
        <div class="bar">
          <div
            :class="{'barContent':i!=4,'barContent50':i==4}"
            :style="{'width': (item.value/max*100)+'%'}"
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
      title: "",
      time: "",
      dataArr: [],
      max: 0,
      url: request.LeftBotTitleDirector,
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
      this.max = Math.max.apply(
        Math,
        this.dataArr.map(function (o) {
          return o.value;
        })
      );
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
  background-size: 100% 100%;

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
  /* overflow: hidden; */
  font-size: 20px;
  color: #ffffff;
  line-height: 28px;
  display: flex;
  width: 100%;
}
.barName > div {
}
.city {
  width: 180px;
  word-break: keep-all
  
}
.money {
  width: 150px;
  font-size: 16px;
  color: #ffffff;
  line-height: 22px;
  /* word-break: keep-all; */
  white-space: nowrap;
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
  content: " ";
  position: absolute;
  right: -8px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 18px solid #25d3e7;
  border-right: 9px solid transparent;
}
.barContent50 {
  background: linear-gradient(270deg, #caff00 0%, #ffa000 100%);
  height: 100%;
  position: relative;
}
.barContent50::after {
  content: " ";
  position: absolute;
  right: -8px;
  top: 0;
  width: 0;
  height: 0;
  border-top: 18px solid #caff00;
  border-right: 9px solid transparent;
}
</style>