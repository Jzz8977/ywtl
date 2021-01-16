<template>
  <div class="iframeWrap" id="iframeBox">
    <iframe
      v-show="isShow"
      style="width:100%;height:100%;position: relative;z-index: 0;"
      ref="mapIfream"
      class="ifream"
      id="ifream"
      :src="url"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <div class="btn pointer" @click="$store.dispatch('setUrl','')">返回</div>
  </div>
</template>

<script>
export default {
  name: "ifream",
  props: ["url"],
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    let iframe = document.querySelector("#ifream");

    iframe.onload = () => {
      // console.log("加载完成"); // 这样每次都会触发
      this.isShow=true
    };

    // this.sendMsg();
  },
  methods: {
    sendMsg() {
      let iframeBox = document.querySelector("#iframeBox");
      let iframe = document.createElement("iframe");
      iframe.onload = () => {
        console.log("加载完成"); // 这样每次都会触发
      };
      iframe.src = this.url;
      iframeBox.appendChild(iframe);
    },
  },
  computed: {},
  beforeDestroy() {},
};
</script>

<style scoped>
.iframeWrap {
  width: 100%;
  height: 100%;
  position: relative;
}
.btn {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
  z-index: 100;
}
</style>
