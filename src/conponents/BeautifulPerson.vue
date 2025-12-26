<template>
    <div class="person-container">
      <div class="form-group">
        <label for="firstName" class="input-label">First Name:</label>
        <input 
          type="text" 
          id="firstName" 
          v-model="firstName" 
          class="input-field"
          placeholder="Enter first name"
        >
      </div>
      
      <div class="form-group">
        <label for="lastName" class="input-label">Last Name:</label>
        <input 
          type="text" 
          id="lastName" 
          v-model="lastName" 
          class="input-field"
          placeholder="Enter last name"
        >
      </div>
      
      <div class="result-section">
        <h2 class="full-name-display">Full Name: {{fullName}}</h2>
      </div>
      
      <div class="button-group">
        <button @click="changeNameToLisi" class="action-button">
          Change Name to Lisi
        </button>
      </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Person'
}
</script>

<script lang="ts" setup>
   import {ref,computed} from 'vue'
   let firstName = ref('zhang')
   let lastName = ref('san')
   
   // 这样写的计算属性，数据为可读，不能操作修改
   //  let fullName = computed(()=>{
   //    return firstName.value.slice(0,1).toUpperCase() +  firstName.value.slice(1)  + "-" + lastName.value  
   //  })

   // 这样写的计算属性，数据可以操作修改
   // 注意两种计算方式的语法
   let fullName = computed({
     get: () => {
       return firstName.value.slice(0,1).toUpperCase() +  firstName.value.slice(1)  + "-" + lastName.value  
     },
     set: (value) => {
       const [first, last] = safeSplit(value, '-');
       firstName.value = first;
       lastName.value = last;
     }
   })

   function changeNameToLisi(){
    fullName.value = 'li-si'
   }

   // 类型安全的分割函数
   function safeSplit(value: string, separator: string): [string, string] {
     const parts = value.split(separator);
     return [parts[0] ?? '', parts[1] ?? ''];
   }
</script>
<style scoped>
.person-container {
  max-width: 500px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.person-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 20px;
}

.input-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 1.1em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  font-size: 1em;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-field:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5), inset 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.result-section {
  margin: 25px 0;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  text-align: center;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.full-name-display {
  margin: 0;
  font-size: 1.5em;
  font-weight: 600;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  word-break: break-all;
}

.button-group {
  text-align: center;
  margin-top: 20px;
}

.action-button {
  padding: 14px 28px;
  border: none;
  border-radius: 50px;
  background: linear-gradient(to right, #ff9a9e 0%, #fad0c4 100%);
  color: #333;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease, transform 0.2s ease;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.action-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  background: linear-gradient(to right, #fad0c4 0%, #ff9a9e 100%);
}

.action-button:active {
  transform: translateY(1px);
}

.action-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

.action-button:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  100% {
    transform: scale(50, 50);
    opacity: 0;
  }
}

/* 响应式设计 */
@media (max-width: 600px) {
  .person-container {
    margin: 20px auto;
    padding: 20px;
    border-radius: 12px;
  }
  
  .full-name-display {
    font-size: 1.3em;
  }
  
  .input-field {
    padding: 10px 14px;
  }
  
  .action-button {
    padding: 12px 24px;
    font-size: 1em;
  }
}

@media (max-width: 400px) {
  .person-container {
    margin: 15px 10px;
    padding: 18px;
  }
  
  .full-name-display {
    font-size: 1.2em;
  }
}
</style>