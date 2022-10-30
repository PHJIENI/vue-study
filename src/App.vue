<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-link to="/route">路由教程</router-link>
  <tr></tr>
  <router-link to="/templeSyntax">模板语法</router-link>
  <tr></tr>
  <router-link to="/request">请求语法</router-link>
  <tr></tr>
  <router-link to="/basic">组件基础</router-link>
  <h1>路由页面内的内容</h1>
  <tr></tr>
  <router-view></router-view>
  <!-- <TempleSyntax  msg="Welcome to Your Vue.js App"/>
  <BasicComponent :title = "msg" @onEvent="getDataHandle" />
  <RequestComponent/> -->

</template>

<script>
import TempleSyntax from './components/TempleSyntax.vue';
import BasicComponent from './components/BasicComponent.vue';
import RequestComponent from './components/RequestComponent.vue';
import router from './route';

export default {
  name: 'App',
  data(){
    return{
      msg:"首页传过来的"
    }

  },
  methods:{
    getDataHandle(data){
      console.log(data)
    }

  },
   components: {
    TempleSyntax,
    BasicComponent,
    RequestComponent,
    router
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
