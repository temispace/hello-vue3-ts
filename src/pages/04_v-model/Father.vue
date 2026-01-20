<template>
  <div class="father">
       <SSINPUT :abc="username" @update:abc="username = $event" :xyz="password" @update:xyz="password = $event"></SSINPUT>
  </div>
  <!--普通便签上的v-model-->
  <!-- <input type="text" v-model="username"> -->
  <!--上面v-model写法等同于下面这种写法-->
  <!-- <input 
    type="text"
   :value="username"
    @input="username=(<HTMLInputElement>$event.target).value"
  > -->
  <br>
  <!-- 组件标签上使用v-model指令 -->
  <!-- <SSINPUT v-model="username"></SSINPUT> -->
  <!-- 组件标签上v-model的本质 -->
  <!-- <SSINPUT :model-value="username" @update:model-value="username = $event"></SSINPUT> -->

   <!-- 也可以更换value，例如改成abc-->
   <!-- <SSINPUT v-model:abc="username"></SSINPUT>  -->
</template>

<script setup lang="ts" name="Father">
  import {ref} from 'vue'
  import SSINPUT from './SSINPUT.vue';
  
  let username = ref('zhangsan')
  let password = ref('')
</script>

<style scoped>
  .father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
        box-shadow: 0 0 10px gray;
	}
</style>