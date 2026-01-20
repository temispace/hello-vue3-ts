<template>
  <div class="father">
       <h2>父组件</h2>
       <h4>father用户名：{{ username }}</h4> 
       <Child :a="a" :b="b" :c="c" :d="d" :updateA="updateA" v-bind="{x:'123',y:'123123'}"></Child>
  </div>
</template>

<script setup lang="ts" name="Father">
  import {ref} from 'vue'
  import Child from './Child.vue';

  let a = ref(0)
  let b = ref(1)
  let c = ref(2)
  let d = ref(3)
  let username = ref('zhang3')

  function updateA(value:string){
    username.value = value
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