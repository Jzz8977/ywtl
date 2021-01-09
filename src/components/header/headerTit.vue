<template>
  <div class="title">
    <div class="word" :class="{'pointer':url}" @click="toDetail">{{title}}</div>
    <div class="time">{{time}}</div>
  </div>
</template>

<script>
export default {
  name: "headerTitle",
  props: ["title", "time", "url"],
  methods: {
    toDetail() {
      if (this.url) {
        this.$store.dispatch('setUrl',this.url)
      }
    },
  },
};
</script>

<style  scoped>
.title {
  box-sizing: border-box;
  margin: 13px 0 12px 0;
  height: 41px;
  line-height: 41px;
  /* display: flex;
    justify-content: space-between;
    align-items: center; */
  border: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  word-break: keep-all;

}
.word {
  min-width: 258px;
  height: 41px;
  padding-left: 21px;
  box-sizing: border-box;
  background: url(../../assets/img/headerTitleBg.png) -10px center no-repeat;
  background-size: 100% 100%;
  font-size: 20px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  word-break: keep-all;
}
.time {
  font-size: 18px;
  padding: 0 21px 0 0;
  height: 41px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #a3d5ff;
  line-height: 41px;
}

</style>