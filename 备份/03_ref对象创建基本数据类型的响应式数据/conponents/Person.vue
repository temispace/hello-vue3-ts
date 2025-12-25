<template>
    <div class="Person">
      <h2>姓名：{{ name }}</h2>
      <h2>年龄：{{ age }}</h2>
      <button @click="changeName">点击修改姓名</button>
      <button @click="changeAge">年龄加1</button>
      <button @click="showTelephone">展示电话</button>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Person'
}
</script>

<script lang="ts" setup>
    import { ref } from 'vue'

    let name = ref('zangsan')
    let age = ref(18)
    let tele = '18232324036'
    
    function changeName() {
        name.value = 'lisi'
    }
    function changeAge() {
        age.value++
    }
    function showTelephone() {
        alert(tele)
    }
</script>
<style scoped>
    .Person {
  max-width: 400px;
  margin: 20px auto;
  padding: 25px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  color: white;
  font-family: 'Arial', sans-serif;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.Person:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.Person h2 {
  margin: 10px 0;
  font-size: 1.4em;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.Person button {
  display: block;
  margin: 15px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.Person button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}
</style>
