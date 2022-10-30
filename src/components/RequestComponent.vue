<template>
    <div class="RequestComponent">
        <h1>Get请求</h1>
        <p>{{ message }}</p>
        <h2>以列表形式展示</h2>
        <li v-for="item in message" :key="item.index">{{ item.title }}+{{ item.body }}</li>
        <h1>Post请求</h1>
        <div class="input1">
            <p>title:<input type="text" v-model.lazy="title"></p>
            <p>body:<input type="text" v-model.lazy="body"></p>
            <p>title:{{ title }}</p>
            <p>body:{{ body }}</p>
            <p>response:{{ response1 }}</p>
            <button @click="submit">按钮</button>
        </div>


    </div>
</template>
  
<script>
import axios from 'axios';
import querystring from 'querystring';
import api from "../api/index"

export default {
    name: "RequestComponent",
    data() {
        return {
            message: {},
            title: "",
            body: "",
            response1: {},
        }
    },
    mounted() {
        // axios({
        //     method: "get",
        //     url: "http://127.0.0.1:8000/post_list/getlist"
        // }).then(res => {
        //     this.message = res.data
        //     console.log(res)
        // })
        api.getList().then(
            res=>{
                this.message = res.data
                console.log(res)
            }
        )
    },
    methods: {
        submit() {
            axios.post("http://127.0.0.1:8000/post_list/getlist", querystring.stringify({
                title: this.title,
                body: this.body,
            })).then(res => {
                this.response1 = res.data
                console.log(this.response1)

            })

        }

    }

}
</script>
<style scoped>

</style>