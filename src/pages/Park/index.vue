<template>
  <div class="bgWrap">
    <div class="wrap" id="wrap">
      <div class="header">
        <div class="parkName">
          <span>{{parkName}}</span>
          <div class="returnBtn pointer " @click="$router.go(-1)">
            <img src="../../assets/parkImg/returnBtn.png" alt />
            <span >返回</span>
          </div>
        </div>
        <div :class="{'pointer':true,'tabBtn':true,'basicLeft':true,'activeTabBtnBasic':activeBaic}" @click="tabBtn='basic'">基本信息</div>
        <div :class="{'pointer':true,'tabBtn':true,'basicRight':true,'activeTabBtnInfo':activeInfo}" @click="tabBtn='info'">经营信息</div>
      </div>

      <div class="mainBody">
        <Basic :parkId='parkId' v-if="activeBaic"/>
        <Info  :parkId='parkId' v-if="activeInfo"/>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "@/utils/api.js";
import { autoFix } from "@/mixins";
import Basic from './basic'
import Info from './info'

export default {
  name: "Park",
  mixins: [autoFix],
  components:{
    Info,
    Basic
  },
  data() {
    return {
      tabBtn:'basic',
      parkId:'',
      parkName:'',
    };
  },
  mounted(){
    // this.getEssentialInformation();
  },
  created(){
    this.parkId = sessionStorage.getItem('industrialId')||'';
    this.parkName = sessionStorage.getItem('industrialName')||'';
  },
  methods:{
    async getEssentialInformation(){
      let result = await this.$get(request.getEssentialInformation,{
        id:this.parkId
      })
      
    }
  },
  computed:{
    activeBaic(){
      return this.tabBtn==='basic'
    },
     activeInfo(){
      return this.tabBtn==='info'
    }
  }
};
</script>

<style scoped>
.bgWrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  /* background: url(../../assets/parkImg/BG.png) no-repeat; */
  background: url(../../assets/img/bg.png) no-repeat;

  background-size: 100% 100%;
}
.wrap {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  background: url(../../assets/parkImg/BG.png) no-repeat;
  background-size: 100% 100%;
  top: 50%;
  left: 50%;
}
.header {
  width: 100%;
  height: 122px;
  background: url(../../assets/parkImg/headerBg.png) left top no-repeat;
  background-size: 100% 100%;
  border: 1px solid transparent;
  position: relative;
}

.parkName {
  width: 100%;
  margin-top: 20px;
  height: 41px;
  font-size: 34px;
  font-family: FZZCHJW--GB1-0, FZZCHJW--GB1;
  font-weight: normal;
  color: #ffffff;
  line-height: 41px;
  letter-spacing: 4px;
  text-shadow: 0px 0px 18px rgba(201, 190, 255, 0.66);
  text-align: center;
  position: relative;
}
.returnBtn {
  position: absolute;
  right: 36px;
  top: -15px;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a4d7ff;
  letter-spacing: 1px;
}
.returnBtn img {
  width: 31px;
  height: 25px;
  line-height: 20px;
}
.returnBtn span {
  margin-top: 8px;
}
.tabBtn {
  /* width: 100%; */
  position: absolute;
  bottom: 0;
  font-size: 22px;
  width: 180px;
  height: 54px;
  font-family: PingFangSC-Regular;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 1px;
  text-align: center;
  line-height: 54px;
}
.activeTabBtnBasic {
  font-family: PingFangSC-Regular;
  color: #ffffff;
  letter-spacing: 1px;
  background: url(../../assets/parkImg/activeBtnBasic.png) left top no-repeat;
  background-size: 100% 100%;
}
.activeTabBtnInfo{
  font-family: PingFangSC-Regular;
  color: #ffffff;
  letter-spacing: 1px;
  background: url(../../assets/parkImg/activeBtnInfo.png) left top no-repeat;
  background-size: 100% 100%;
}
.basicLeft{
  left:  435px;
}
.basicRight{
  right:  435px;
}
.mainBody{
  margin-top: 10px;
  width: 100%;
  height: 938px;
}
</style>
