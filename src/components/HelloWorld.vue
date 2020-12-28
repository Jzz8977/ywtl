<template>
  <div class="wrap">
    <div class="header">
      <div >1</div>
      <div >1</div>
      <div >1</div>
      <div >1</div>

      <div >1</div>
      <div >1</div>
      <div >1</div>
      <div >1</div>
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
import leftTop from './left/leftTop'
import leftBot from './left/leftBot'
import rightTop from './right/rightTop'
import rightBot from './right/rightBot'
import midBot from './mid/midBot'
import midTop from './mid/midTop'
export default {
  name: 'HelloWorld',
  components:{
    leftTop,
    leftBot,
    rightTop,
    rightBot,
    midBot,
    midTop,
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  background: url(../assets/img/bg.png) no-repeat;
}
.header{
  width: 100%;
  height: 70px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mainBody{
  overflow: hidden;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.left,.right{
  width: 478px;
  height: 100%;
  float: left;
}
.mid{
  width: 924px;
  height: 100%;
  float: left;
  margin: 0 10px ;
}

</style>
