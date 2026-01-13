import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    // action 动作
    actions:{
      increment(value:number){
          this.sum += value
      },
      decrement(value:number){
       this.sum -= value
      }
    },
    // state 状态
    state:()=>{
    return{
           sum:20,
           adress:'atguigu',
           street:'北京·中国'
        }
    },

    // getter 计算
    getters:{
        bigSum():number{
            return this.sum*10;
        },
        upperAddress():string{
            return this.adress.toUpperCase() 
        }
    }
})

// export default useCountStore