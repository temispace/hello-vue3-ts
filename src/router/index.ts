// 创建一个路由器，并暴露出去

// 第一步，引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'
import Home from "@/views/Home.vue"
import News from "@/views/News.vue"
import About from "@/views/About.vue"
import Detail from '@/conponents/Detail.vue'
import Image from '@/conponents/Image.vue'
// 第二步，创建路由器
const router =  createRouter({
    history:createWebHistory(),           // history模式
    // history:createWebHashHistory()     // hash模式
    routes:[ //一个一个的路由规则
        {
            name:"menghu",
            path:"/home",
            component:Home,
            children:[
                {
                    name:"tupian",
                    path:"image/:name/:path",
                    component:Image,
                    props:true  // 如果RouterLink使用的params传递参数，只能用name，同时需要path进行占位
                }
            ]
        },
        {   
            name:"xinwen",
            path:"/news",
            component:News,
            children:[
                {
                    name:"xiangqing",
                    path:"detail",
                    component:Detail,
                    // props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件
                    // props:{a:1,b:2,c:3}
                    
                    // props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件
                    // props:true
                    
                    // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件
                    // 如果RouterLink使用的是query,name或者path都可以使用，不需要路由path占位
                    props(route){
                        return route.query
                    }
                }
            ]
        }, 
        {   
            name:"guanyu",
            path:"/about",
            component:About
        },
        {
            path:'/',
            redirect:'/about'
        }
    ]
})

// 创建路由器
const routerTest = createRouter({
    history:createWebHashHistory(),
    routes:[
         
    ]
}
)

export {router};