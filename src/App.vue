<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {request}from '@/utils/api.js'
export default {
  name: 'App',
  async mounted(){
    // let result = await this.$get(request.getUserPermissionByToken+'?token='+request.token+'&type=1');
    // let result = await this.$post(request.getUserPermissionByToken,{
    //   token:request.token,
    //   type:1
    // });
  }
}
</script>

<style>
@import url(./assets/css/style.css);

</style>
