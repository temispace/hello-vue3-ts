<template> 
  <div class="count">
    <h2>当前求和为：{{sumState.sum}}</h2>
    <h2>地址为：{{sumState.adress}}</h2>
  <select v-model.number="n">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <button @click="add">
    加
  </button>
  <button @click="minus">
    减
  </button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref,toRefs } from 'vue';
  import { useCountStore } from '@/store/Count';
  let n = ref(0)
  const sumState = useCountStore()

  // 批量修改sumState中的数据
  /* sumState.$patch({
    sum:999,
    adress:"尚硅谷"
  }) */
  
  function add(){
    sumState.increment(n.value)
  }

  function minus(){
    sumState.decrement(n.value)
  }
</script>

<style scoped>
    .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>