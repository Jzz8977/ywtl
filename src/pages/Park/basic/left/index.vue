<template>
  <div class="leftWrap">
    <headerTit :title="title" :time="time" :url="url"></headerTit>
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
                <img src="../../../../assets/parkImg/kaifa.png" alt />
              </div>
              <div>
                <p class="legendTitle">管理单位</p>
                <p>XXXX管委会</p>
              </div>
            </div>
             <div class="legendWrap">
              <div>
                <img src="../../../../assets/parkImg/kaifa.png" alt />
              </div>
              <div>
                <p class="legendTitle">产权属性</p>
                <p>XXXX</p>
              </div>
            </div>
             <div class="legendWrap">
              <div>
                <img src="../../../../assets/parkImg/kaifa.png" alt />
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
        </div>
        <div class="mainSon3">
          <div class="borderTop"></div>
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
}
.mainSon3 {
  width: 100%;
  height: 228px;
}
.borderTop {
  width: 100%;
  height: 11px;
  background: url(../../../../assets/parkImg/basicBorderTopBg.png) left center
    no-repeat;
  background-size: 95% 100%;
}
</style>