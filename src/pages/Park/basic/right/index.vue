<template>
  <div class="rightWrap">
    <headerTit :title="title" :time="time" :url='url'></headerTit>
  </div>
</template>

<script>
export default {
  name: "basicRight",
  data() {
    return {
      title: "入驻企业情况",
      time: "",
    };
  },
  
};
</script>

<style  scoped>
.rightWrap {
  width: 100%;
  height: 100%;
  padding: 0 25px 17px 0;
  box-sizing: border-box;
}
</style>