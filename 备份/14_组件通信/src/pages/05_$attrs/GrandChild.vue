<template>
  <div class="child">
    <h2>孙组件</h2>
    <h6>a：{{ a }}</h6>
    <h6>b：{{ b }}</h6>
    <h6>c：{{ c }}</h6>
    <h6>d：{{ d }}</h6>
    <h6>x：{{ x }}</h6>
    <h6>y：{{ y }}</h6>
    <button @click="updateA(['123123'])">点我更新a</button>
  </div>
</template>

<script setup lang="ts" name="GrandChild">
    defineProps(['a','b','c','d','updateA','x','y'])
    
    

</script>

<style scoped>
    .child{
        background-color: rgba(118, 180, 31, 0.673);
        padding: 20px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>