<template>
  <div class="leftWrap">
    <headerTit :title="title" :time="time" :url="url"></headerTit>
    <div class="main">
      <div class="dataBox" v-for="(item,i) in leftArr">
        <div class="dataImg">
          <img v-show='i===0' src="../../../../assets/parkImg/icon1.png" alt />
          <img v-show='i===1' src="../../../../assets/parkImg/icon2.png" alt />
          <img v-show='i===2' src="../../../../assets/parkImg/icon3.png" alt />
          <img v-show='i===3' src="../../../../assets/parkImg/icon4.png" alt />
          <img v-show='i===4' src="../../../../assets/parkImg/icon5.png" alt />
          <img v-show='i===5' src="../../../../assets/parkImg/icon6.png" alt />
          <img v-show='i===6' src="../../../../assets/parkImg/icon7.png" alt />
          <!-- <img v-show='i===7' src="../../../../assets/parkImg/icon8.png" alt /> -->
        </div>
        <div class="dataDeta">
          <div class="dataName white24">{{item.title}}</div>
          <div class="dataNum">
            <span class="num yellow40 DINAlternate-Bold">{{item.val||'0'}}</span>
            <span class="unit">{{item.dw}}</span>
          </div>
          <!-- <div class="botLine"></div> -->
        </div>
      </div>
      <!-- <div class="dataBox">
        <div class="dataImg">
          <img src="../../../../assets/parkImg/icon2.png" alt />
        </div>
        <div class="dataDeta">
          <div class="dataName white24">营业收入</div>
          <div class="dataNum">
            <span class="num yellow40 DINAlternate-Bold">197</span>
            <span class="unit">亿</span>
          </div>
          <div class="botLine"></div>
        </div>
      </div>
      <div class="dataBox">
        <div class="dataImg">
          <img src="../../../../assets/parkImg/icon3.png" alt />
        </div>
        <div class="dataDeta">
          <div class="dataName white24">利润总额</div>
          <div class="dataNum">
            <span class="num yellow40 DINAlternate-Bold">45</span>
            <span class="unit">亿</span>
          </div>
          <div class="botLine"></div>
        </div>
      </div>
      <div class="dataBox">
        <div class="dataImg">
          <img src="../../../../assets/parkImg/icon4.png" alt />
        </div>
        <div class="dataDeta">
          <div class="dataName white24">用工人数</div>
          <div class="dataNum">
            <span class="num yellow40 DINAlternate-Bold">10097</span>
            <span class="unit">人</span>
          </div>
          <div class="botLine"></div>
        </div>
      </div>
      <div class="dataBox">
        <div class="dataImg">
          <img src="../../../../assets/parkImg/icon5.png" alt />
        </div>
        <div class="dataDeta">
          <div class="dataName white24">引入项目</div>
          <div class="dataNum">
            <span class="num yellow40 DINAlternate-Bold">197</span>
            <span class="unit">家</span>
          </div>
          <div class="botLine"></div>
        </div>
      </div>
      <div class="dataBox">
        <div class="dataImg">
          <img src="../../../../assets/parkImg/icon6.png" alt />
        </div>
        <div class="dataDeta">
          <div class="dataName white24">退出项目</div>
          <div class="dataNum">
            <span class="num yellow40 DINAlternate-Bold">32</span>
            <span class="unit">家</span>
          </div>
          <div class="botLine"></div>
        </div>
      </div>
      <div class="dataBox">
        <div class="dataImg">
          <img src="../../../../assets/parkImg/icon7.png" alt />
        </div>
        <div class="dataDeta">
          <div class="dataName white24">能耗</div>
          <div class="dataNum">
            <span class="num yellow40 DINAlternate-Bold">10</span>
            <span class="unit">万煤</span>
          </div>
          <div class="botLine"></div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { request } from "@/utils/api.js";

export default {
  name: "infoLeft",
  data() {
    return {
      title: "",
      time: "",
      url: "",
      parkId: "BJJK006",
      leftArr:[]
    };
  },
  mounted() {
    this.parkId = (this.$route.query && this.$route.query.parkId) || "BJJK006";
    this.getEmphasisData();
  },
  methods: {
    async getEmphasisData() {
      let result = await this.$get(request.getEmphasisData, {
        id: this.parkId,
      });
      let res = result.data || {};
      if (res && res.data) {
        let resArr = res.data || [];
        this.title = res.title;
        this.leftArr = this.subArr(resArr);
        console.log(this.leftArr)
      }
    },
    subArr(arr) {
        let i = arr.findIndex(v=>v.title==="能耗")
        let obj = arr[i]
        arr.splice(i,1)
        arr.push(obj)
        return arr
    },
  },
};
</script>

<style scoped>
.leftWrap {
  width: 100%;
  height: 100%;
  padding: 0 45px 17px 0;
  box-sizing: border-box;
}
.main {
  box-sizing: border-box;
  padding: 57px 0 52px 47px;
  width: 100%;
  height: calc(100% - 42px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.dataBox {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space- between;
}
.dataImg {
  width: 70px;
  height: 70px;
}
.dataDeta {
  width: 304.4px;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 12px;
  justify-content: space-between;
  align-items: center;
  background: url(../../../../assets/parkImg/Line.png) right bottom no-repeat;
}
.dataName {
  font-weight: 500;
  font-family: PingFangSC-Regular;
}
.dataImg img {
  height: 100%;
  width: 100%;
}
.dataNum {
  margin-right: 23px;
}
.dataNum .unit {
  font-size: 22px;
  font-weight: bold;
  color: #ffec00;
  margin-left: -6px;
}
.botLine {
  width: 100%;
  height: 0;
  background: url(../../../../assets/parkImg/Line.png) no-repeat center;
}
</style>