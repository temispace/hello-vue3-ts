<template>
  <div class="child">
    <h2>子组件1</h2>
    <h4>我有{{ toy }}一个</h4>
    <h4>我有{{ book }}本书</h4>
  </div>
</template>

<script setup lang="ts" name="Child1">
    import {ref} from 'vue'
    let toy = ref('奥特曼')
    let book = ref(5)

    defineExpose({toy,book})

</script>

<style scoped>
    .child{
        background-color: skyblue;
        padding: 20px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
    }
</style>