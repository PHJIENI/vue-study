<template>
    <div class="basicComponent">
        <h1>{{message}}</h1>
        <h1>props组件交互</h1>
            <p>{{title}}</p>
        <h1>消息的反向传递</h1>
        <button @click="sendClickHandle">消息传到App.vue</button>
    </div>
</template>
  
<script>
import { stringLiteral } from '@babel/types';

export default {
    name:"BasicComponent",
    props:{
        title:{
            type:String,
            default:""
        }

    },
    data(){
        return{
            message:"组件基础：单文件组件",
            msg:"被反向传递的数据"
        }
    },
    methods:{
        sendClickHandle(){
            this.$emit("onEvent",this.msg)
        }

    }
    
}
</script>
<style scoped>
</style>