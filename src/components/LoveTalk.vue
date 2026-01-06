<template>
  <div class="talk">
    <button @click="getLoveTalk">获取土味情话</button>
  <ul>
    <li v-for="love in loveTalkList" :key="love.id">
      {{ love.content }}
    </li>
  </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import { reactive } from 'vue';
  import { nanoid } from 'nanoid';
  import axios from 'axios';
  interface LoveTalkInterface{
    id:string,
    content:string
  }

  let loveTalkList = reactive<LoveTalkInterface[]>([
    {id:nanoid(),content:"罗尼哦"},
    {id:nanoid(),content:"著迷也"},
    {id:nanoid(),content:"放老头"},
  ])
  async function getLoveTalk(){
    // 发请求，下面这行的写法是：连续解构赋值+重命名
     let {data:{data:{content:title}}} = await axios.get("https://v2.alapi.cn/api/qinghua?token=LwExDtUWhF3rH5ib");
     let obj = {id:nanoid(),content:title}
     loveTalkList.unshift(obj)
  }
 
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>