<template>
  <div class="child">
    <h2>子组件2</h2>
    <button @click="minusHouse($parent)">点我减一套房子</button>
    <h4>我有{{ computer }}电脑</h4>
    <h4>我有{{ book }}本书</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
    import {ref} from 'vue'
    let computer = ref('华为')
    let book = ref(10)

    function minusHouse(parent:any){
      parent.house-=1
    }

    defineExpose({computer,book})
</script>

<style scoped>
    .child{
        background-color: rgba(118, 180, 31, 0.673);
        padding: 20px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>