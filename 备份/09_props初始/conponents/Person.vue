<template>
  <div class="Person">
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }} -- {{ person.age }}</li>
    </ul>
  </div>
</template>


<script lang="ts" setup name="Person">
  
import {type Persons} from '@/types'

// 仅接收
// const props = defineProps(['personList']);

// 接收 + 限制类型
// const props = defineProps<{personList:Persons}>()

// 第三种写法：接收+限制类型+指定默认值+限制必要性
/* let props = withDefaults(defineProps<{personList?:Persons}>(),{
  personList:()=>[{id:1,name:'小猪佩奇',age:18}]
}) */

/* withDefaults(defineProps<{personList?:Persons}>(),{
  personList:()=>[{id:2,name:'佩奇',age:18}]
}) */
withDefaults(defineProps<{personList?:Persons}>(),{
  personList:()=>[{id:2,name:'佩奇',age:18}]
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
