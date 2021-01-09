<template>
  <div class="iframeWrap">
    <iframe
      v-show="isShow"
      style="width:100%;height:100%"
      ref="mapIfream"
      class="ifream"
      :src="url"
      frameborder="0"
    ></iframe>
    <div class="btn" @click="$store.dispatch('setUrl','')">返回</div>
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
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = true;
      }, 300);
    });
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
}
</style>