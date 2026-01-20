<template>
  <div class="father">
       <h2>父组件</h2>
       <h4>父亲有：{{ house }}套房产</h4>
       <button @click="changeC1Toy">点我修改玩具名字</button>
       <button @click="changeC2Computer">点我修改电脑名字</button>
       <button @click="addAllChildBook($refs)">所有孩子书增加</button>
       <Child1 ref="c1"></Child1>
       <Child2 ref="c2"></Child2>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child1 from './Child1.vue';
  import Child2 from './Child2.vue';
  import {ref} from 'vue'

  let c1 = ref()
  let c2 = ref()

  let house = ref(4)

  function changeC1Toy(){
    c1.value.toy = 'little pig'
  }

  function changeC2Computer(){
    c2.value.computer = ' HP惠普'
  }

  function addAllChildBook(refs:any){
    for(let key in refs){
      refs[key].book +=3
    }
  }

  defineExpose({house})

  
 
</script>

<style scoped>
    .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
        box-shadow: 0 0 10px gray;
	}
</style>