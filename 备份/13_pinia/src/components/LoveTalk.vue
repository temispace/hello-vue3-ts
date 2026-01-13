<template>
  <div class="talk">
    <button @click="getLoveTalk">获取土味情话</button>
    <button @click="updateLoveTalk">更新土味情话</button>
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
  import { useLoveTalkStore } from '@/store/LoveTalk';
  /* interface LoveTalkInterface{
    id:string,
    content:string
  } */
  const loveTalkState = useLoveTalkStore()

  // 监听State变化
  loveTalkState.$subscribe((mutate,state)=>{
      console.log('LoveTalk',mutate,state)
      localStorage.setItem('talkListLocal',JSON.stringify(state.loveTalkList))
  })
 
 let loveTalkList = reactive(loveTalkState.$state.loveTalkList)

   function getLoveTalk(){
    loveTalkState.getLoveTalk()
  }

  function updateLoveTalk(){
    loveTalkState.updateLoveTalk('放老头')
  }
 
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  .button{
    border: 10px;
  }
</style>