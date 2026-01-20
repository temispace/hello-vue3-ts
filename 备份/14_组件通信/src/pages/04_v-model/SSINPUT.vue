<template>
  <div class="box">
   
  <!--将接收的value值赋给input元素的value属性，目的是：为了呈现数据-->
  <!--给input元素绑定原生input事件，触发input事件时，进而触发update:model-value事件-->
    <input  type="text" :value="abc" @input="emit('update:abc',(<HTMLInputElement>$event.target).value)">
    <input  type="text" :value="xyz" @input="emit('update:xyz',(<HTMLInputElement>$event.target).value)">
  </div>

  
</input>

</template>

<script setup lang="ts" name="SSINPUT">
    // 接收props
    defineProps(['abc','xyz'])
    // 声明事件
    const emit = defineEmits(['update:abc','update:xyz'])

</script>

<style scoped>
  .box{
    box-shadow: 0cap;
    box-sizing: border-box;
  }
  .input{
    color: red;
    font-size: medium;
  }
</style>