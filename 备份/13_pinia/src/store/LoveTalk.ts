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
     },
     updateLoveTalk(content: string){
       const newItem = {id: nanoid(), content: content};
       this.loveTalkList.unshift(newItem);
     }
    },
    state(){
        return{
            loveTalkList:JSON.parse(localStorage.getItem('talkListLocal') as string) || []
        }
    },
    getters:{
        
    }
})

// export default useLoveTalkStore;