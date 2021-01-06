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
   
    // result = this.res;
    // let menu = result.result.menu;
    // console.log(menu);
    // let result = await this.$post(request.getUserPermissionByToken,{
    //   token:request.token,
    //   type:1
    // });
  }
}
</script>

<style>
@import url(./assets/css/style.css);
@import url(./assets/css/autoFix.css);
</style>
