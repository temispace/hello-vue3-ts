<template>
  <div class="child">
    <h2>子组件</h2>
    <hr>
    <h4>子接收的数据:{{ car }}</h4>
    <button @click="getToy(toy)">点击传递玩具给父组件</button>
  </div>
</template>

<script setup lang="ts" name="Child">
  import {ref} from 'vue'

  let toy = ref('乐高')
  
  // props：常用于父-->子 非函数
  defineProps(['getToy','car'])

</script>

<style scoped>
    .child{
        background-color: skyblue;
        padding: 20px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>