<template>
  <div class="leftWrap">
    <headerTit :title="title" :time="time"></headerTit>
    <div class="main">
      <div class="mainBody">
        <div class="mainSon1">
          <div class="borderTop"></div>
          <div class="AllLegend">
            <div class="legendWrap" v-for="(item,i) in topArr" :key='i'>
              <div>
                <img v-if="item.title==='开发商'" src="../../../../assets/parkImg/kaifa.png" alt />
                <img v-if="item.title==='管理单位'" src="../../../../assets/parkImg/guanli.png" alt />
                <img v-if="item.title==='产权属性'" src="../../../../assets/parkImg/chanquan.png" alt />
                <img v-if="item.title==='主导产业'" src="../../../../assets/parkImg/zhudao.png" alt />
              </div>
              <div>
                <p class="legendTitle">{{item.title}}</p>
                <p>{{item.val||'- -'}}</p>
              </div>
            </div>
            <!-- <div class="legendWrap">
              <div>
                <img src="../../../../assets/parkImg/kaifa.png" alt />
              </div>
              <div>
                <p class="legendTitle">开发商</p>
                <p>XXXX投资开发股份有限公司</p>
              </div>
            </div>
            <div class="legendWrap">
              <div>
                <img src="../../../../assets/parkImg/guanli.png" alt />
              </div>
              <div>
                <p class="legendTitle">管理单位</p>
                <p>XXXX管委会</p>
              </div>
            </div>
            <div class="legendWrap">
              <div>
                <img src="../../../../assets/parkImg/chanquan.png" alt />
              </div>
              <div>
                <p class="legendTitle">产权属性</p>
                <p>XXXX</p>
              </div>
            </div>
            <div class="legendWrap">
              <div>
                <img src="../../../../assets/parkImg/zhudao.png" alt />
              </div>
              <div>
                <p class="legendTitle">主导产业</p>
                <p>高端汽车及新能源汽车、机器人和智能制造</p>
              </div>
            </div> -->
          </div>
        </div>
        <div class="mainSon2">
          <div class="borderTop"></div>

          <div class="AllLegendWrap">
            <div :class="{'legendWrap50':true,'marginL10':i%2===1}" v-for="(item,i) in middleArr" :key='i'>
              <div>
                <img v-if="item.title==='占地面积'" src="../../../../assets/parkImg/zhandi.png" alt />
                <img v-if="item.title==='楼宇性质'" src="../../../../assets/parkImg/xingzhi.png" alt />
                <img v-if="item.title==='建筑面积'" src="../../../../assets/parkImg/jianzhu.png" alt />
                <img v-if="item.title==='所属片区'" src="../../../../assets/parkImg/suoshu.png" alt />
                <img v-if="item.title==='可租面积'" src="../../../../assets/parkImg/kezu.png" alt />
                <img v-if="item.title==='楼宇级别'" src="../../../../assets/parkImg/jibie.png" alt />

              </div>
              <div>
                <p class="legendTitle">{{item.title}}</p>
                <p>{{item.val||'- -'}}{{item.dw}}</p>
              </div>
            </div>

            <!-- <div class="legendWrap50">
              <div>
                <img src="../../../../assets/parkImg/zhandi.png" alt />
              </div>
              <div>
                <p class="legendTitle">占地面积</p>
                <p>4.2万㎡</p>
              </div>
            </div>
            <div class="legendWrap50 marginL10">
              <div>
                <img src="../../../../assets/parkImg/xingzhi.png" alt />
              </div>
              <div>
                <p class="legendTitle">楼宇性质</p>
                <p>工业楼宇</p>
              </div>
            </div>
            <div class="legendWrap50">
              <div>
                <img src="../../../../assets/parkImg/jianzhu.png" alt />
              </div>
              <div>
                <p class="legendTitle">建筑面积</p>
                <p>7.2万㎡</p>
              </div>
            </div>
            <div class="legendWrap50 marginL10">
              <div>
                <img src="../../../../assets/parkImg/suoshu.png" alt />
              </div>
              <div>
                <p class="legendTitle">所属片区</p>
                <p>核心区</p>
              </div>
            </div>
            <div class="legendWrap50">
              <div>
                <img src="../../../../assets/parkImg/kezu.png" alt />
              </div>
              <div>
                <p class="legendTitle">可租面积</p>
                <p>6.2万㎡</p>
              </div>
            </div>
            <div class="legendWrap50 marginL10">
              <div>
                <img src="../../../../assets/parkImg/jibie.png" alt />
              </div>
              <div>
                <p class="legendTitle">楼宇级别</p>
                <p>一级</p>
              </div>
            </div> -->
          </div>
        </div>
        <div class="mainSon3">
          <div class="borderTop"></div>
          <div class="AllPWrap">
            <div class="AllP" v-for="(item,i) in bottomArr" :key="i">
              <div class="AllPLeft">{{item.title}}</div>
              <div class="AllPRight">{{item.val||'- -'}}</div>
            </div>
            <!-- <div class="AllP">
              <div class="AllPLeft">租金</div>
              <div class="AllPRight">办公：3.5-4 商业：7-9元/㎡/天</div>
            </div>
            <div class="AllP">
              <div class="AllPLeft">物业费</div>
              <div class="AllPRight">办公：33.46元/月/㎡、商业：36.5元/月/㎡</div>
            </div>
            <div class="AllP">
              <div class="AllPLeft">服务热线</div>
              <div class="AllPRight">010-88187715</div>
            </div>
            <div class="AllP">
              <div class="AllPLeft">企业邮箱</div>
              <div class="AllPRight">xingshengyuan@163.com</div>
            </div>
            <div class="AllP">
              <div class="AllPLeft">公司地址</div>
              <div class="AllPRight">北京市经济技术开发区同济中路7号</div>
            </div>
            <div class="AllP">
              <div class="AllPLeft">楼宇介绍</div>
              <div
                class="AllPRight"
              >服务于五百强企业的区域共建配套综合体，周边云集诺基亚楼宇、富士康楼宇、拜耳、可口可乐、DHL物流园等世界五百强企业。项目占地7375平米，建筑面积22049平米,由7幢8…</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "@/utils/api.js";

export default {
  name: "basicLeft",
  data() {
    return {
      title: "楼宇基本信息",
      time: "",
      url: "",
      // buildingId: "JK01007",
      topArr: [],
      middleArr: [],
      bottomArr: [],
    };
  },
  props:['buildingId'],

  mounted() {
   console.log(this.buildingId,'bu ba le')
    this.getEssentialInformationLy();
  },
  methods: {
    async getEssentialInformationLy() {
      let result = await this.$get(request.getEssentialInformationLy, {
        id: this.buildingId,
      });
      let res = result.data || {};
      if (res && res.data) {
        let resArr = res.data || [];
        this.topArr = this.subTopArr(resArr);
        this.middleArr = this.subMidArr(resArr);
        this.bottomArr = this.subBotArr(resArr);
        console.log(this.topArr);
      }
    },
    subTopArr(arr) {
      let useArr = [];
      let obj1 = arr.find((v) => v.title === "开发商");
      useArr.push(obj1);
      let obj2 = arr.find((v) => v.title === "管理单位");
      useArr.push(obj2);
      let obj3 = arr.find((v) => v.title === "产权属性");
      useArr.push(obj3);
      let obj4 = arr.find((v) => v.title === "主导产业");
      useArr.push(obj4);
      return useArr;
    },
    subMidArr(arr) {
      let useArr = [];
      let obj1 = arr.find((v) => v.title === "占地面积");
      useArr.push(obj1);
      let obj2 = arr.find((v) => v.title === "楼宇性质");
      useArr.push(obj2);
      let obj3 = arr.find((v) => v.title === "建筑面积");
      useArr.push(obj3);
      let obj4 = arr.find((v) => v.title === "所属片区");
      useArr.push(obj4);
      let obj5 = arr.find((v) => v.title === "可租面积");
      useArr.push(obj5);
      let obj6 = arr.find((v) => v.title === "楼宇级别");
      useArr.push(obj6);
      return useArr;
    },
    subBotArr(arr) {
      let useArr = [];
      let obj1 = arr.find((v) => v.title === "租金");
      useArr.push(obj1);
      let obj2 = arr.find((v) => v.title === "物业管费");
      obj2.title = "物业费";
      useArr.push(obj2);
      let obj3 = arr.find((v) => v.title === "电话");
      obj3.title = "服务热线";
      useArr.push(obj3);
      let obj4 = arr.find((v) => v.title === "邮箱");
      obj4.title = "企业邮箱";
      useArr.push(obj4);
      let obj5 = arr.find((v) => v.title === "公司地址");
      useArr.push(obj5);
      let obj6 = arr.find((v) => v.title === "楼宇介绍");
      useArr.push(obj6);
      return useArr;
    },
  },
};
</script>

<style  scoped>
.leftWrap {
  width: 100%;
  height: 100%;
  padding: 0 25px 17px 0;
  box-sizing: border-box;
}
.main {
  /* width: calc(100% - 41px); */
  /* height: calc(100% - 32px); */
  padding-left: 16px;
}
.mainBody {
  width: 467px;
  height: 858px;
  /* background: url(../../../../assets/parkImg/rightBorderBg.png) right center
    no-repeat; */
  overflow: auto;
  /* background-size: 100% 100%; */
}
.mainBody::-webkit-scrollbar {
  width: 2px;
}
.mainBody::-webkit-scrollbar-track {
  background-color: #1f4076;
}
.mainBody::-webkit-scrollbar-thumb {
  background-color: #009dd8;
}
.mainSon1 {
  /* width: 100%; */
  /* height: 360px; */
  padding: 0 20px 0 20px;
  padding-top: 20px;
  position: relative;
}
.AllLegend {
  width: 100%;
  padding: 0 20px 0 0;
  box-sizing: border-box;
  position: relative;
}
.legendWrap {
  margin: 15px 0;
  display: flex;
  justify-content: start;
  /* align-items: center; */
}
.legendWrap > div:nth-child(1) {
  width: 62px;
  height: 55px;
}
.legendWrap > div:nth-child(1) img {
  width: 100%;
  height: 100%;
}

.legendWrap > div:nth-child(2) {
  width: 380px;
  padding-left: 6px;
}
.legendWrap > div:nth-child(2) p {
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;
}
.legendTitle {
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #06fef7 !important;
  line-height: 30px;
}
.mainSon2 {
  /* width: 100%; */
  height: 253px;
  padding: 0 20px;
  padding-top: 20px;

  position: relative;
}

.AllLegendWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

.legendWrap50 {
  margin: 15px 0 0 0;
  display: flex;
  justify-content: start;
  align-items: center;
}
.legendWrap50 > div:nth-child(1) {
  width: 60px;
  height: 60px;
}
.legendWrap50 > div:nth-child(1) img {
  width: 100%;
  height: 100%;
}

.legendWrap50 > div:nth-child(2) {
  padding-left: 6px;
  width: 140px;
  white-space: nowrap;
}
.legendWrap50 > div:nth-child(2) p {
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;
  white-space: nowrap;

}
.marginL10 {
  margin-left: 10px;
}
.mainSon3 {
  width: 100%;
  height: 328px;
  padding: 0 20px;
  padding-top: 20px;
  box-sizing: border-box;
  position: relative;
}
.borderTop {
  width: 445px;
  height: 25px;
  background: url(../../../../assets/parkImg/basicBorderTopBg.png) 0px 1px
    no-repeat;
  background-size: contain;
  position: absolute;
  left: 0px;
  top: 0;
}

.AllPWrap {
  padding: 10px 0;
  overflow: hidden;
}
.AllP {
  width: 437px;
  display: flex;
  justify-content: start;
  margin-bottom: 14px;
}
.AllPLeft {
  width: 82px;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #06fef7;
  line-height: 28px;
  text-align: left;
}
.AllPRight {
  width: 334px;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 28px;
  text-align: left;
  margin-left: 15px;
}
</style>
