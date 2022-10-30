import { createRouter,createWebHashHistory } from "vue-router"
import RouteComponent from "../components/RouteComponent"
import TempleSyntax from "../components/TempleSyntax"
import RequestComponent from "../components/RequestComponent"
import BasicComponent from "../components/BasicComponent"
import RouterDetail from "../components/RouterDetail"

// 配置信息中需要页面的相关配置

const routes =[
    {
        path:"/route",
        component:RouteComponent
    },
    {
        path:"/templeSyntax",
        component:TempleSyntax
    },
    {
        path:"/request",
        component:RequestComponent
    },
    {
        path:"/basic",
        component:BasicComponent
    },
    {
        path:"/routerDetails/:name",
        name:"routerDetails",
        component:RouterDetail
    },
]

const router = createRouter({
    //
    history:createWebHashHistory(),
    routes
})

export default router;