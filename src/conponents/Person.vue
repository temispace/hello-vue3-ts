<template>
  <div class="Person">
    <input type="text" v-model="firstName"></input></br>
    <input type="text" v-model="lastName"></input></br>
    <h2>全名：{{ fullName }}</h2>
    <button @click="changeNameToLisi">点击修改名字为Lisi</button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Person'
}
</script>

<script lang="ts" setup>
import { ref, computed } from 'vue'
let firstName = ref('zhang')
let lastName = ref('san')

// 这样写的计算属性，参数传入了一个get箭头函数，数据为可读，不能操作修改
/* let fullName = computed(()=>{
  return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + "-" + lastName.value
}) */


// 这样写的计算属性，传入一个对象，对象有get set两个箭头函数吗，数据可以操作修改
// 注意两种计算方式的语法
/*   let fullName = computed({
    get: () => {
      return firstName.value.slice(0,1).toUpperCase() +  firstName.value.slice(1)  + "-" + lastName.value  
    },
    set: (value) => {
      firstName.value = value.split('-')[0]
      lastName.value = value.split('-')[1]
    }
  }) */
//  再次编写一次不是只读的计算属性
let fullName = computed({
  get:()=>{
    return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + "-" + lastName.value
  },
  set:(value)=>{
    firstName.value = value.split('-')[0]
    lastName.value = value.split('-')[1]
  }
})

function changeNameToLisi() {
  fullName.value = 'li-si'
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
