<template>
  <div class="child">
    <h2>孙组件</h2>
    <h4>资产：{{ sonMoney }}</h4>
    <h4>车：{{ car }}</h4>
    <button @click="updateMoney(1)">点我爷爷Money加1</button>
    <button @click="updateFatherMoney">点我孙+1，爷爷-1</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
import { inject } from 'vue';
import { emitter } from '@/utils/emitter';
import {ref} from 'vue'

// 注入数据
let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(x:number)=>{}})
let car = inject('car')
let sonMoney = ref(0)

function updateFatherMoney(){
  emitter.emit('update-father-money',1)
  sonMoney.value += 1
   
}
</script>

<style scoped>
    .child{
        background-color: rgba(118, 180, 31, 0.673);
        padding: 20px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>