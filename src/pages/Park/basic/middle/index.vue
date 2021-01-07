<template>
  <div class="middleWrap">
    <div class="topWrap">
      <div class="topCard">
        <img src="../../../../assets/parkImg/qiye.png" alt />
        <div class="cardWord">
          <p class="yellowNum">
            300
            <span style="font-size:18px">家</span>
          </p>
          <p>
            <span>入驻企业</span>
          </p>
        </div>
      </div>
      <div class="topCard">
        <img src="../../../../assets/parkImg/shouru.png" alt />
        <div class="cardWord">
          <p class="yellowNum">
            300
            <span style="font-size:18px">亿</span>
          </p>
          <p>
            <span>税收收入</span>
          </p>
        </div>
      </div>
      <div class="topCard">
        <img src="../../../../assets/parkImg/kongzhi.png" alt />
        <div class="cardWord">
          <p class="yellowNum">
            0.8%
            <span style="font-size:18px"></span>
          </p>
          <p>
            <span>空置率</span>
          </p>
        </div>
      </div>
      <div class="topCard">
        <img src="../../../../assets/parkImg/guimo.png" alt />
        <div class="cardWord">
          <p class="yellowNum">
            300
            <span style="font-size:18px">亿</span>
          </p>
          <p>
            <span>产业规模</span>
          </p>
        </div>
      </div>
    </div>
    <div class="mainWrap">
      <div class="imgWrap">
        <div class="imgBR">
          <img src="../../../../assets/parkImg/cirImg.png" alt />
        </div>
      </div>
    </div>
    <div class="botWrap">
      <div class="botCard">
        <img src="../../../../assets/parkImg/yongshui.png" alt />
        <div class="botCardWord">
          <p>
            <span>用水</span>
          </p>
          <p class="yellowBot marinTopBotCard">
            300
            <span style="font-size:18px">立方/天</span>
          </p>
          <p>
            <span>环比 <span style="font-size:16px">3%</span></span>
          </p>
        </div>
      </div>
      <div class="botCard">
        <img src="../../../../assets/parkImg/yongdian.png" alt />
        <div class="botCardWord">
          <p>
            <span>用电</span>
          </p>
          <p class="yellowBot marinTopBotCard">
            300
            <span style="font-size:18px">kw/h/天</span>
          </p>
          <p>
            <span>环比 <span style="font-size:16px">-5%</span></span>
          </p>
        </div>
      </div>
      <div class="botCard">
        <img src="../../../../assets/parkImg/yongqi.png" alt />
        <div class="botCardWord">
          <p>
            <span>用气</span>
          </p>
          <p class="yellowBot marinTopBotCard">
            300
            <span style="font-size:18px">立方/天</span>
          </p>
          <p>
            <span>环比 <span style="font-size:16px">3%</span></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basicMiddle",
};
</script>

<style  scoped>
.middleWrap {
  width: 100%;
  height: 100%;
}
.topWrap {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
  box-sizing: border-box;
}
.topCard {
  width: 162px;
  height: 73px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.topCard img {
  width: 64px;
  height: 64px;
}

.cardWord {
  width: 90px;
  font-size: 22px;
  font-family: PingFangSC-Regular;
  font-weight: 500;
  color: #ffffff;
  line-height: 30px;
  margin-left: 10px;
}
.yellowNum {
  height: 45px;
  font-size: 39px;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: bold;
  color: #fdec16;
  line-height: 45px;
}
.yellowNum span{
  margin-left:-5px;
  font-family: PingFangSC-Regular;
}
.yellowBot span{
  margin-left: -5px;
  font-family: PingFangSC-Regular;
}
.mainWrap {
  width: 100%;
  height: 714px;
  padding: 40px;
  box-sizing: border-box;
  position: relative;
}
.imgWrap {
  width: 709px;
  height: 634px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url(../../../../assets/parkImg/cirBg.png) left center no-repeat;
  background-size: 100% 100%;
}
.imgBR {
  width: 562px;
  height: 563px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.imgBR img {
  width: 100%;
  height: 100%;
}
.botWrap {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
  box-sizing: border-box;
}
.botCard {
  width: 225px;
  height: 83px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.botCard > img {
  width: 83px;
  height: 83px;
}
.botCardWord {
  width: 180px;
  font-size: 22px;
  font-family: PingFangSC-Regular;
  font-weight: 500;
  color: #ffffff;
  line-height: 30px;
  margin-left: 10px;
  position: relative;
}
.botCardWord > p {
  width: 100%;
}
.botCardWord > p:nth-child(1) {
  position: absolute;
  top: -20px;
}
.marinTop {
  margin-top: 10px;
}
.yellowBot {
  width: 132px;
  height: 40px;
  font-size: 38px;
  font-family: DINAlternate-Bold;
  font-weight: bold;
  color: #fdec16;
  line-height: 40px;
}
.marinTopBotCard {
  margin-top: 10px;
}
</style>