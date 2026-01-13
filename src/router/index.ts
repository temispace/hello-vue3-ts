// 引入路由
import { createRouter,createWebHistory } from "vue-router";
import Props from "@/pages/01_props/Father.vue";
import Custom from "@/pages/02_自定义事件/Father.vue"

// 编写路由
export const defaultRouter =  createRouter({
    history:createWebHistory(),
    routes:[
        {
            name:"props",
            path:"/props",
            component:Props
        },
        {
            name:"custom",
            path:"/custom",
            component:Custom
        }    
    ]
})