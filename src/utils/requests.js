import axios from "axios";
import querystring from "querystring";

const instance = axios.create({timeout:5000})

instance.interceptors.request.use(
    config =>{
        if(config.methods == "post"){
            config.data = querystring.stringify(conf.data)
        }else{
            console.log("成功进入")
        }
        return config;
    },
    error =>{
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response =>{
        return response.status === 200? Promise.resolve(response):Promise.reject(response)
    },
    error =>{
        const { response } = error;
    }

)
export default instance;