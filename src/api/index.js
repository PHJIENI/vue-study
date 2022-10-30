import axios from '../utils/requests'
import path from "./path"

const api = {
    //获取列表
    getList(){
        return axios.get(path.baseUrl +path.getList)
    }
}
export default api;