<template>
  <div class="child">
    <h2>子组件2</h2>
    <hr>
    <h4 v-show="toyForChild1">接收到的来自Child1的玩具：{{ toyForChild1 }}</h4>
    <button @click="child2ToyToFather">传递赋值后的玩具给Father</button>
  </div>
</template>

<script setup lang="ts" name="Child2">
    import {ref,onUnmounted} from 'vue'
    import {emitter} from '@/utils/emitter'

    let toyForChild1 = ref('')

    emitter.on('send-toy',(value)=>{
      toyForChild1.value = value
    })

    function child2ToyToFather(){
      emitter.emit('child2-Toy-To-Father',toyForChild1.value)
    }
    
    onUnmounted(()=>{
      emitter.off('send-toy')
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