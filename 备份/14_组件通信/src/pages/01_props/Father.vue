<template>
  <div class="father">
       <h2>父组件</h2> 
       <hr>
       <h4>儿子传递的玩具：{{ toy }}</h4>
       <Child :car="car" :getToy="getToy"></Child>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue';
  import {ref} from 'vue'

  let toy = ref('')
  let car = ref('宝马')

  function getToy(value:string){
    toy.value = value
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