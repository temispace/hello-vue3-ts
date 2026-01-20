<template>
   <div class="category">
     <slot name="s2"></slot>
     <slot :games="games" a="哈哈" v-bind="{x:100,y:200}" name="s1"></slot>
   </div>
</template>

<script setup lang="ts" name="Games">
    import {reactive,ref} from 'vue'
    
    let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
   ])
</script>

<style scoped>
    .category {
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>