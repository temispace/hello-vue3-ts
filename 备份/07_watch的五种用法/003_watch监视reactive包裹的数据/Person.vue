<template>
  <div class="Person">
    <h1>监视reactive定义的【对象类型】数据，且默认开启了深度监视</h1>
    <h2>{{ person.name }}</h2>
    <p>Age: {{ person.age }}</p>
    <p>Obj: {{ obj.a.b.c }}</p>
    
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人员</button>
    <button @click="changeObj">修改对象</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import { ref, watch,reactive } from 'vue'

let person = reactive({
  name: 'Person',
  age: 18
})

let obj = reactive({
  a:{
    b:{
      c:1
    }
  }
})

function changePerson() {
  // reactive定义的对象不能重新赋值，否则会失去响应式
  // person = { name: 'Person2', age: 20 }
  Object.assign(person, { name: 'Person2', age: 20 })
}
function changeName(){
person.name += '~'
}
function changeAge(){
  person.age +=2
}
function changeObj(){
  obj.a.b.c += 2
}

watch(person, (newVal, oldVal) => {
  console.log('person changed', newVal, oldVal)
})
watch(obj, (newVal, oldVal) => {
  console.log('obj changed', newVal, oldVal)
})

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
