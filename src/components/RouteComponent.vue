<template>
    <router-link to="/routerDetails/上海">上海</router-link>
    <tr></tr>
    <router-link to="/routerDetails/北京">北京</router-link>
    <tr></tr>
    <router-link to="/routerDetails/广州">广州</router-link>
    <router-view></router-view>
</template>
  
  <script>
  import router from '../route';
  export default {
    components:{
      router
    }

  }
  </script>