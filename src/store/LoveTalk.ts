import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import axios from "axios";

export const useLoveTalkStore = defineStore('loveTalk',{
    actions:{
    async getLoveTalk(){
    // 发请求，下面这行的写法是：连续解构赋值+重命名
     let {data:{data:{content:title}}} = await axios.get("https://v2.alapi.cn/api/qinghua?token=LwExDtUWhF3rH5ib");
     let obj = {id:nanoid(),content:title}
     this.loveTalkList.unshift(obj) 
     }
    },
    state(){
        return{
            loveTalkList:[
            {id:'yuysada01',content:'你今天有点怪，哪里怪？怪好看的！'},
     		{id:'yuysada02',content:'草莓、蓝莓、蔓越莓，你想我了没？'},
            {id:'yuysada03',content:'心里给你留了一块地，我的死心塌地'}
            ]
        }
    }
})

// export default useLoveTalkStore;