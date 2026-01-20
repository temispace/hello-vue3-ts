<template>
  <div class="father">
       <h2>父组件</h2> 
       <hr>
       <h4 v-show="fatherToy">接收到的来自Child2的玩具：{{ fatherToy }}</h4>
       <button @click="newToyToChild1">换一个玩具给Child1</button>
       <Child1/>
       <Child2/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child1 from './Child1.vue';
  import Child2 from './Child2.vue';
  import {emitter} from '@/utils/emitter'
  import {ref,onUnmounted} from 'vue'

  let fatherToy = ref('')

  emitter.on('child2-Toy-To-Father',(value)=>{
    fatherToy.value = value
  })

  onUnmounted(()=>{
    emitter.off('child2-Toy-To-Father')
  })

  function newToyToChild1(){
    fatherToy.value = '高达'
    emitter.emit('new-toy2-child1',fatherToy.value)
  }
  
</script>

<style scoped>
    .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
        box-shadow: 0 0 10px gray;
	}
</style>