<template>
  <div class="father">
       <h2>父组件</h2> 
       <hr>
       <Child @get-toy="toy = $event"></Child>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue';
  import {ref} from 'vue'

  let toy = ref()
</script>

<style scoped>
    .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
        box-shadow: 0 0 10px gray;
	}
</style>