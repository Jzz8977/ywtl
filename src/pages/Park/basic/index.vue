<template>
  <div class="basiceWrap">
    <div class="left">
      <Left />
    </div>
    <div class="middle">
      <Middle />
    </div>
    <div class="right">
      <Right />
    </div>
  </div>
</template>

<script>
import Left from "./left";
import Middle from "./middle";
import Right from "./right";
export default {
  components: {
    Left,
    Middle,
    Right,
  },
  name: "basic",
};
</script>

<style  scoped>
.basiceWrap {
  width: 100%;
  height: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 510px;
  height: 100%;
  /* background: url(../../../assets/parkImg/basicLeftBg.png) no-repeat; */
  background: rgba(18,91,190, 0.27);
  border-radius: 10px;

}
.middle {
  width: 880px;
}
.right {
  width: 510px;
  height: 100%;
  background: url(../../../assets/parkImg/basicLeftBg.png) no-repeat;
}
</style>