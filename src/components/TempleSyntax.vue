<template>
  <div class="templeSyntax">
    <h1>模板语法<button @click="m1Handle" >第一章</button></h1>
      <div v-if="m1flag">
        <h2>双括号</h2>
        <p>{{message}}</p>
        <h2> v-html </h2>
          <p>v-html：先在data中定义一个html的字符串(rawhtml)然后再用v-html的形式展现出来</p>
          <div v-html="rawhtml"></div>
        <h2> v-bind </h2>
          <p>v-bind:现在data中声明一个作为元素属性的id</p>
          <div v-bind:id="dynamicid">好了我就是那个被定义可变属性的元素，我的id=19</div>
        <h2> 支持条件表达式:num>1?num:5 </h2>
          <p> num：{{num>1?num:5}}</p>
      </div>
    <h1>条件渲染 v-if和v-show之间的区别在于是否需要销毁元素</h1>
      <div>
        <h2>v-if：显示与否取决于值是true or false，每一个v-if后面都会接一个v-else</h2>
          <p v-if="flag">如果是真的那么显示我</p>
          <p v-else>如果是假的那么显示我</p>
        <h2>v-show：用法和v-if一样，不过没有else</h2>
            <p v-show="flag">如果是真的那么显示我</p>
      </div>
    <h1>列表渲染</h1>
      <div>
        <p>v-for</p>
        <li v-for = "item in myList" :key="item.id">{{item.title}}</li>
      </div>
    <h1>事件处理</h1>
      <button @click="clickHandle">我是一个按钮</button>
    <h1>表单输入</h1>
      <div class = "input">
          <p>username:<input type="text" v-model.lazy = "username"></p>
          <p>password:<input type="text" v-model  ="password"></p>
          <p>username:{{username}}</p>
          <p>password:{{password}}</p>
          <button @click="handleusername">按钮</button>         
      </div>
  </div>
</template>

<script>
export default {
  name: 'TempleSyntax',
  data() {
    return {
      dynamicid : 19,
      rawhtml:"<a href='http://localhost:8080/'>链接在这里</a>",
      message: "双括号中的消息",
      num:2,
      flag:true,
      m1flag:false,
      myList:[
        {id:0,title:"第一个元素"},
        {id:1,title:"第二个元素"},
        {id:1,title:"第二个元素"}
      ],
      username:"",
      password:""
    }
  },
  methods:{

    clickHandle(event){
      console.log(event)

      if(this.flag == true){
          this.flag = false
      }
      else{
        this.flag = true
      }
    },
    m1Handle(event){
      console.log(event)

      if(this.m1flag == true){
          this.m1flag = false
      }
      else{
        this.m1flag = true
      }
    },
    handleusername(){
      console.log(this.username)
    }
  }
}
</script>