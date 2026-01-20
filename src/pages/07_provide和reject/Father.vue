<template>
  <div class="father">
       <h2>父组件</h2>
       <h4>资产：{{ money }}</h4>
       <h4>汽车：{{ car }}</h4>
       <button @click="money += 1">点我金钱+1</button>
       <button @click="car.price += 10">点我车价格+10w</button>
       <Child></Child>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
  import {ref} from 'vue'
  import {reactive} from 'vue'
  import { provide } from 'vue'
  import { emitter } from '@/utils/emitter'

  let money = ref(100)
  let car = reactive({
    brand:'奔驰',
    price:50000
  })

  // 提供数据
  provide('moneyContext',{money,updateMoney})
  provide('car',car)

  // 更新金额方法
  function updateMoney(value:number){
    money.value +=value
  }
  
  emitter.on('update-father-money',(value)=>{
    money.value -= value
  })
 
</script>

<style scoped>
    .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
        box-shadow: 0 0 10px gray;
	}
</style>