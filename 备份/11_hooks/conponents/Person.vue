<template>
  <div class="Person">
    <h2>当前求和为{{ sum }}</h2>
    <button @click="increment">点我加1</button>
    <button @click="decrement">点我减1</button>
    <hr/>
    <div class="dog-images">
      <img v-for="(u,index) in dogList.urlList" :key="index" :src="(u as string)" alt="随机狗图片">
    </div>
    <span v-if="dogList.isLoading" class="loading">加载中......</span><br>
    <button @click="getDog">再来一只狗</button>
  </div>
</template>


<script lang="ts" setup name="Person">
  import useDog from '@/types/useDog';
  import useSum from '@/types/useSum';

  let {sum,increment,decrement} = useSum()
  let {getDog,dogList} = useDog()
  
</script>



<style scoped>
.Person {
  max-width: 400px;
  margin: 20px auto;
  padding: 30px;
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  color: white;
  font-family: 'Arial', sans-serif;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.Person::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  transform: rotate(30deg);
  z-index: 0;
}

.Person > * {
  position: relative;
  z-index: 1;
}

.Person:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.Person h2 {
  margin: 10px 0 20px;
  font-size: 1.6em;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: 600;
}

.Person button {
  display: block;
  margin: 15px auto;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

.Person button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.Person button:hover::before {
  left: 100%;
}

.Person button:hover {
  background-color: rgba(255, 255, 255, 0.35);
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.Person button:active {
  transform: translateY(0) scale(0.98);
}

.dog-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 15px 0;
}

.dog-images img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.dog-images img:hover {
  transform: scale(1.1);
}

.loading {
  display: block;
  text-align: center;
  margin: 10px 0 15px;
  font-weight: 500;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>
