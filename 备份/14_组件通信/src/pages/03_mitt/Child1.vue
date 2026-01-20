<template>
  <div class="child">
    <h2>子组件1</h2>
    <hr>
    <button @click="sendToyToCHild2">点击传递子组件1的toy给子组件2</button>
    <h4 v-show="toy1">我的玩具：{{ toy1 }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child1">
  import {ref,onUnmounted} from 'vue'
  import {emitter} from '@/utils/emitter'
  
  let toy1 = ref('奥特曼')

  // 提供数据的组件，触发事件
  function sendToyToCHild2(){
    emitter.emit('send-toy',toy1.value)
  }

  emitter.on('new-toy2-child1',(value)=>{
    toy1.value = value
  })

  onUnmounted(()=>{
    emitter.off('new-toy2-child1')
  })

</script>

<style scoped>
    .child{
        background-color: skyblue;
        padding: 20px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>