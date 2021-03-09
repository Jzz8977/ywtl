<template>
  <div class="bgWrap">
    <div class="wrap" id="wrap" ref="wrap">
      <div class="header">
        <div class="navWrap1">
          <div
            class="headerLeft pointer"
            v-for="(item, i) in menu1"
            :key="i"
            @click="toPath(item)"
          >
            {{ item.meta.title }}
          </div>
          <!-- <div class="headerLeft">产业集群</div>
        <div class="headerLeft">园区楼宇</div>
          <div class="headerLeft">产业链分析</div>-->
        </div>
        <div class="navWrap2">
          <div
            class="headerRight pointer"
            :style="{ 'font-size:16px': item2.meta.title.length > 5 }"
            v-for="(item2, i) in menu2"
            :key="i"
            @click="toPath(item2)"
          >
            {{ item2.meta.title }}
          </div>
          <!-- <div class="headerRight">企业群落</div>
        <div class="headerRight">风险预警</div>
          <div class="headerRight">经济AI</div>-->
        </div>
        <div class="headerAntherBg"></div>
        <div class="logoClick pointer" @click="logoClick"></div>
        <div class="pointer searchIcon" @click="dialogTableVisible = true">
          <img src="../../assets/img/searchIcon.png" alt="" />
        </div>
      </div>
      <div class="mainBody" v-if="isShow === 0">
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
      <div class="mainBody" v-else-if="isShow === 1">
        <Iframe :url="$store.state.url" v-if="$store.state.url" />
      </div>
      <div class="mainBody" v-else>
        <IframeHX :url="$store.state.HXurl" v-if="$store.state.HXurl" />
      </div>
    </div>
    <el-dialog
      width="1398px"
      :visible.sync="dialogTableVisible"
      custom-class="searchDia"
      :show-close="false"
    >
      <div slot="title" class="header-title">
        <span></span>
              <span class="title-age">智能搜索</span>
        <img
          class="pointer"
          @click="dialogTableVisible = false"
          src="../../assets/img/closeIcon.png"
          alt=""
        />
      </div>
      <div style="height: 700px; overflow: auto">
        <div class="diaBody">
          <div class="typeChange">
            <div class="type">
              <div
                :class="{ activeType: typeHover === 1, pointer: true }"
                @click="typeHoverChange(1)"
              >
                企业
              </div>
              <span style="width: 76px"></span>
              <div
                :class="{ activeType: typeHover === 2, pointer: true }"
                @click="typeHoverChange(2)"
              >
                园区楼宇
              </div>
            </div>
            <div class="typeSearchInput">
              <div>
                <el-input
                  class="typeInput"
                  v-model="input"
                  :placeholder="
                    typeHover === 1 ? '请输入企业名称' : '请输入园区或楼宇名称'
                  "
                >
                </el-input>
              </div>
              <el-button class="searchBtnWrap">
                <img
                  src="../../assets/img/searchIcon.png"
                  width="18px"
                  height="18px"
                  alt=""
                />
              </el-button>
            </div>
          </div>
          <div v-if="typeHover === 1" class="">
            <table class="tabCon">
              <thead class="tabTit">
                <tr>
                  <th>序号</th>
                  <th>企业名称</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in qyData" :key="item.id">
                  <td>{{ i + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td class="pointer" @click="openQy">查看详情</td>
                </tr>
              </tbody>
            </table>
            <div class="block">
              <el-pagination
                :page-size="10"
                :page-count="7"
                :current-page="currentPage"
                layout="prev, pager, next"
                :total="total"
              >
              </el-pagination>
            </div>
          </div>
          <div v-else>
            <table class="tabCon">
              <thead class="tabTit">
                <tr>
                  <th>序号</th>
                  <th>园区楼宇名称</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in lyData" :key="item.id">
                  <td>{{ i + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td class="pointer" @click="openLy">查看详情</td>
                </tr>
              </tbody>
            </table>
            <div class="block">
              <el-pagination
                :page-size="10"
                :page-count="7"
                :current-page="currentPage"
                layout="prev, pager, next"
                :total="total"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
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
import { autoFix } from "@/mixins";
import Iframe from "../../components/iframe";
import IframeHX from "../../components/IframeHX";
export default {
  name: "index",
  mixins: [autoFix],
  components: {
    leftTop,
    leftBot,
    rightTop,
    rightBot,
    midBot,
    midTop,
    Iframe,
    IframeHX,
  },
  data() {
    return {
      menu1: [],
      menu2: [],
      dialogTableVisible: false,
      input: "",
      typeHover: 1,
      currentPage: 1,
      total: 100,
      qyData: [
        { name: "XXXX投资开发股份有限公司", id: 1 },
        { name: "XXXX投资开发股份有限公司", id: 2 },
        { name: "XXXX投资开发股份有限公司", id: 3 },
        { name: "XXXX投资开发股份有限公司", id: 4 },
        { name: "XXXX投资开发股份有限公司", id: 5 },
        { name: "XXXX投资开发股份有限公司", id: 6 },
        { name: "XXXX投资开发股份有限公司", id: 7 },
        { name: "XXXX投资开发股份有限公司", id: 8 },
        { name: "XXXX投资开发股份有限公司", id: 9 },
        { name: "XXXX投资开发股份有限公司", id: 10 },
      ],
      lyData: [
        { name: "XXXX投资开发", id: 1 },
        { name: "XXXX投资开发", id: 2 },
        { name: "XXXX投资开发股份有限公司", id: 3 },
        { name: "XXXX投资开发股份有限公司", id: 4 },
        { name: "XXXX投资开发股份有限公司", id: 5 },
        { name: "XXXX投资开发股份有限公司", id: 6 },
        { name: "XXXX投资开发股份有限公司", id: 7 },
        { name: "XXXX投资开发股份有限公司", id: 8 },
        { name: "XXXX投资开发股份有限公司", id: 9 },
        { name: "XXXX投资开发股份有限公司", id: 10 },
      ],
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
  mounted() {
    window.addEventListener("message", this.handleMessage);
  },
  methods: {
    handleMessage(event) {
      const data = event.data;
      console.log(data);
      if (data.cmd === "back") {
        this.$store.state.HXurl = "";
        this.dialogTableVisible = true;
      }
    },
    toPath(item) {
      location.href = request.lineURL + item.path;
    },
    logoClick() {
      this.$store.dispatch("setUrl", "");
    },
    typeHoverChange(V) {
      this.typeHover = V;
    },
    openQy() {
      this.dialogTableVisible = false;
      sessionStorage.setItem("industrialId", "BJJK006");
      sessionStorage.setItem("industrialName", "BJJK006Test");
      sessionStorage.setItem("openiframe", "true");
      this.$store.state.HXurl = location.origin + location.pathname + "#/park";
      console.log(location, this.$store.state.HXurl);
    },
    openLy() {
      this.dialogTableVisible = false;
      sessionStorage.setItem("louyuId", "JK01007");
      sessionStorage.setItem("louyuName", "JK01007Test");
      sessionStorage.setItem("openiframe", "true");
      this.$store.state.HXurl =
        location.origin + location.pathname + "#/building";
    },
  },
  beforeDestroy() {
    this.$store.dispatch("setUrl", "");
  },
  computed: {
    isShow() {
      if (this.$store.state.url) {
        return 1;
      } else if (this.$store.state.HXurl) {
        return 2;
      } else {
        return 0;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgWrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: url(../../assets/img/bg.png) no-repeat;
  background-size: 100% 100%;
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
.logoClick {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 540px;
  height: 70px;
}
.headerAntherBg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/headerAntherBg.png) no-repeat;
  background-size: 100% 100%;

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
  background-size: 100% 100%;

  margin-left: -33px;
}
.headerRight {
  background: url(../../assets/img/navBtnRight.png) no-repeat;
  background-size: 100% 100%;

  margin-left: -33px;
}
.mainBody {
  clear: both;
  /* overflow: auto; */
  width: 100%;
  /* height: calc(100% - 75px); */
  height: 1000px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.left,
.right {
  width: 478px;
  height: 100%;
  /* float: left; */
}
.mid {
  width: 924px;
  height: 100%;
  /* float: left; */
  margin: 0 10px;
}
.searchIcon {
  position: absolute;
  right: 10px;
  width: 21px;
  height: 21px;
  top: 22px;
}
.searchIcon img {
  width: 100%;
  height: 100%;
}

/* dia */
.diaBody {
  height: 700px;
}

.typeChange {
  height: 38px;
  margin-bottom: 30px;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}
.activeType {
  color: #00ffff;
  border-bottom: 2px solid #00ffff;
  border-radius: 2px;
}
.typeSearchInput {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.typeInput /deep/ > .el-input__inner {
  width: 230px !important;
  border-radius: 0px !important;
  background-color: rgba(0, 103, 206, 0.45) !important;
  box-shadow: 0px 0px 5px 0px rgba(138, 206, 255, 0.5) inset;

  border: 0 !important;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
}
.searchBtnWrap {
  width: 39px;
  height: 39px;
  background: linear-gradient(360deg, #0e1cb7 0%, #1477c0 100%);
  box-shadow: 0px 0px 10px 0px rgba(138, 206, 255, 0.5);
  padding: 0px;
  border-radius: 0 !important;
  border: 1px solid #00e9ff;
}
.header-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-title img {
  height: 24px;
  width: 24px;
}

.tabCon {
  width: 100%;
  border-collapse: collapse;
}
.tabCon tr {
  width: 100%;
  height: 50px;
  border-top: 2px solid #3a82ca;
  border-bottom: 2px solid #3a82ca;
  border-radius: 2px;
}

.tabCon .tabTit tr {
  border-top: none;
  border-bottom: 4px solid #3a82ca!important;

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
.tabTit th:nth-child(2) {
  text-align: left;
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
  height: 43px;
}
.tabCon td:first-child {
  color: #00ffff;
}
.tabCon td:nth-child(2) {
  text-align: left;
}
tbody tr:hover {
  background: url(../../assets/img/tableLineHover.png);
  background-size: 100% 100%;
}
.block {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
.block >>> button,
.block >>> .el-pager li {
  background-color: transparent !important;
  color: white !important;
  font-weight: normal !important;
  font-size: 20px;
}
.block >>> button {
  color: #00e9ff !important;
}
.block >>> button i {
  font-size: 20px !important;
}
.block >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
  background: url(../../assets/img/pageHover.png) !important;
}
/* dia */
</style>
