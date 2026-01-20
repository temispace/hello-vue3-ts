// 引入路由
import { createRouter,createWebHistory } from "vue-router";
import Props from "@/pages/01_props/Father.vue";
import Custom from "@/pages/02_自定义事件/Father.vue"
import Mitt from '@/pages/03_mitt/Father.vue'
import VModel from '@/pages/04_v-model/Father.vue'
import Attrs from '@/pages/05_$attrs/Father.vue'
import RefAndParent from '@/pages/06_$refs和$parent/Father.vue'
import ProvideAndReject from '@/pages/07_provide和reject/Father.vue'
import DefaultSlot from "@/pages/08_slot_默认插槽/Father.vue"
import NamedSlot from "@/pages/09_slot_具名插槽/Father.vue"
import ActionScopeSlot from "@/pages/10_slot_作用域插槽/Father.vue"

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
        },
        {
            name:"mitt",
            path:"/mitt",
            component:Mitt
        },
        {
            name:"vmodel",
            path:"/vmodel",
            component:VModel
        },
        {
            name:"attrs",
            path:"/attrs",
            component:Attrs
        },
        {
            name:"refAndParent",
            path:"/refAndParent",
            component:RefAndParent
        },
        {
            name:"provideAndReject",
            path:"/provideAndReject",
            component:ProvideAndReject
        },
        {
            name:"defaultSlot",
            path:"/defaultSlot",
            component:DefaultSlot
        },
        {
            name:"namedSlot",
            path:"/namedSlot",
            component:NamedSlot
        },
        {
            name:"actionScopeSlot",
            path:"/actionScopeSlot",
            component:ActionScopeSlot
        },
        {
            path:'/',
            redirect:'/props'
        }    
    ]
})