<template>
  <div class="child">
    <h2>子组件</h2>
    <hr>
    <button @click="$emit('send-toy',toy)">点我把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
    import {ref} from 'vue'
    
    let toy = ref('奥特曼')

    defineEmits(['send-toy'])
</script>

<style scoped>
    .child{
        background-color: skyblue;
        padding: 20px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>