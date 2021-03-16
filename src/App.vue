<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {request}from '@/utils/api.js'
export default {
  name: 'App',
  data(){
    return {
     
    }
  },
  async mounted(){
      this.initElementStateData()
      console.log(this.$store.state.APP_TOKEN)
  },
  methods:{
     initElementStateData(){
      //在页面加载时读取sessionStorage里的状态信息
      if (localStorage.getItem("store")) {
        var that = this;
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("store"))))
        // this.$store.dispatch('addTab', {
        //   title: that.$store.state.layout.isActiveTitle,
        //   path: that.$store.state.layout.isActive
        // })
      }
      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
        localStorage.setItem("store",JSON.stringify(this.$store.state));
      })
    },
  }
}
</script>

<style>
@import url(./assets/css/style.css);
@import url(./assets/css/autoFix.css);
</style>
