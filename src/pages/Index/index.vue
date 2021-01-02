<template>
  <div class="wrap">
    <div class="header">
      <div class="navWrap1">
        <div class="headerLeft" v-for="(item) in menu1" @click="toPath(item)">{{item.meta.title}}</div>
        <!-- <div class="headerLeft">产业集群</div>
        <div class="headerLeft">园区楼宇</div>
        <div class="headerLeft">产业链分析</div>-->
      </div>
      <div class="navWrap2">
        <div
          class="headerRight"
          :style="{'font-size:16px':item2.meta.title.length>5}"
          v-for="(item2) in menu2"
          @click="toPath(item2)"
        >{{item2.meta.title}}</div>
        <!-- <div class="headerRight">企业群落</div>
        <div class="headerRight">风险预警</div>
        <div class="headerRight">经济AI</div>-->
      </div>
      <div class="headerAntherBg"></div>
    </div>
    <div class="mainBody">
      <div class="left">
        <leftTop></leftTop>
        <leftBot></leftBot>
      </div>
      <div class="mid">
        <midTop></midTop>
        <midBot></midBot>
      </div>
      <div class="right">
        <rightTop></rightTop>
        <rightBot></rightBot>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "@/utils/api.js";
import leftTop from "./left/leftTop";
import leftBot from "./left/leftBot";
import rightTop from "./right/rightTop";
import rightBot from "./right/rightBot";
import midBot from "./mid/midBot";
import midTop from "./mid/midTop";
export default {
  name: "HelloWorld",
  components: {
    leftTop,
    leftBot,
    rightTop,
    rightBot,
    midBot,
    midTop,
  },
  data() {
    return {
      menu1: [],
      menu2: [],
    };
  },
  async created() {
    let result = await this.$get(
      request.getUserPermissionByToken + "?token=" + request.token + "&type=1"
    );
    let menu = result.data.result.menu;
    menu.shift();
    menu.shift();
    let menu1 = [];
    let menu2 = [];
    menu.forEach((v, i) => {
      if (i < 4) {
        menu1.push(v);
      } else {
        menu2.push(v);
      }
    });
    this.menu1 = menu1;
    this.menu2 = menu2;
  },
  methods: {
    toPath(item) {
      location.href =request.lineURL+ item.path;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: url(../../assets/img/bg.png) no-repeat;
}
.header {
  width: 100%;
  height: 75px;
  background: #000;
  display: flex;
  background: url(../../assets/img/headerBg.png) no-repeat;
  background-size: 100% 100%;
  justify-content: space-between;
  /* align-items: center; */
  position: relative;
}
.headerAntherBg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/headerAntherBg.png) no-repeat;
  z-index: -1;
  /* background: red; */
}
.header > div > div {
  float: left;
  width: 181px;
  height: 40px;
  background-size: 100% 100%;
  margin-top: 16px;
  text-align: center;
  line-height: 40px;

  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 22px;
  color: #ffffff;
}
.navWrap1 {
  margin-left: 102px;
  clear: both;
}
.navWrap2 {
  margin-right: 70px;
  clear: both;
}
.headerLeft {
  background: url(../../assets/img/navBtnLeft.png) no-repeat;
  margin-left: -33px;
}
.headerRight {
  background: url(../../assets/img/navBtnRight.png) no-repeat;
  margin-left: -33px;
}
.mainBody {
  clear: both;
  overflow: hidden;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.left,
.right {
  width: 478px;
  height: 100%;
  float: left;
}
.mid {
  width: 924px;
  height: 100%;
  float: left;
  margin: 0 10px;
}
</style>
