<template>
  <div class="leftWrap">
    <headerTit :title="title" :time="time" ></headerTit>
    <div class="main">
      <div class="mainBody">
        <div class="mainSon1">
          <div class="borderTop"></div>
          <div class="AllLegend">
            <div class="legendWrap">
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
            </div>
          </div>
        </div>
        <div class="mainSon2">
          <div class="borderTop"></div>

          <div class="AllLegendWrap">
            <div class="legendWrap50">
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
                <p class="legendTitle">园区性质</p>
                <p>工业园区</p>
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
                <p class="legendTitle">园区级别</p>
                <p>一级</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mainSon3">
          <div class="borderTop"></div>
          <div class="AllPWrap">
            <div class="AllP">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicLeft",
  data() {
    return {
      title: "园区基本信息",
      time: "",
    };
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
  background: url(../../../../assets/parkImg/rightBorderBg.png) right center
    no-repeat;
  /* background-size: 100% 100%; */
}
.mainSon1 {
  width: 100%;
  height: 360px;
}
.AllLegend {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.legendWrap {
  margin: 15px 0;
  display: flex;
  justify-content: start;
  align-items: center;
}
.legendWrap > div:nth-child(1) {
  width: 62px;
  height: 62px;
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
  width: 100%;
  height: 253px;
  padding: 0 20px;
}

.AllLegendWrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

.legendWrap50 {
  margin: 10px 0 0 0;
  display: flex;
  justify-content: start;
  align-items: center;
}
.legendWrap50 > div:nth-child(1) {
  width: 62px;
  height: 62px;
}
.legendWrap50 > div:nth-child(1) img {
  width: 100%;
  height: 100%;
}

.legendWrap50 > div:nth-child(2) {
  padding-left: 6px;
  width: 140px;
}
.legendWrap50 > div:nth-child(2) p {
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 30px;
}
.marginL10 {
  margin-left: 10px;
}
.mainSon3 {
  width: 100%;
  height: 228px;
  padding: 0 20px;
  box-sizing: border-box;
}
.borderTop {
  width: 100%;
  height: 11px;
  background: url(../../../../assets/parkImg/basicBorderTopBg.png) left center
    no-repeat;
  background-size: 95% 100%;
}

.AllPWrap{
  padding: 10px 0;
  overflow: hidden;

}
.AllP {
  width: 437px;
  display: flex;
  justify-content: start;
  margin-bottom: 14px;
  margin: 15px 0;
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