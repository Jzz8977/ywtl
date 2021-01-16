<template>
  <div class="infoWrap">
    <div class="left">
      <Left :parkId='parkId' />
    </div>
    <div class="right">
      <Right :parkId='parkId'/>
    </div>
  </div>
</template>

<script>
import Left from "./left";
import Right from "./right";
export default {
  components: {
    Left,
    Right
  },
  name: "info",
  props:['parkId']
};
</script>

<style  scoped>
.infoWrap{
  width: 100%;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.left{
  width: 478px;
  height: 100%;
  /* background: url(../../../assets/parkImg/basicLeftBg.png) no-repeat; */
  background: rgba(18,91,190, 0.27);
  border-radius: 10px;
}
.right{
  width: 1412px;
  height: 100%;
  background: url(../../../assets/parkImg/infobigBg.png) no-repeat;
  background-size: 100% 100%;

}
</style>