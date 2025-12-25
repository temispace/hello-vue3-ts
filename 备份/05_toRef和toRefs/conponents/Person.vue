<template>
    <div class="Person">
      <h2>车的品牌：{{car.brand}}</h2>
      <h2>车的价格：{{car.price}}w</h2>
      <button @click="changeBrand">修改品牌</button>
      <button @click="changePrice">修改价格</button>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Person'
}
</script>
// 作用：将一个响应式对象中的每一个属性，转换为`ref`对象
// 备注：toRefs与toRef功能一致，但toRefs可以批量转换
<script lang="ts" setup>
   import {reactive,toRefs,toRef} from 'vue'
   let car = reactive({
    brand:'大众',
    price:100
   })
    
   let {brand,price} = toRefs(car)

   function changeBrand(){
     brand.value = 'benz'
   }
   function changePrice(){
    price.value +=10
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
