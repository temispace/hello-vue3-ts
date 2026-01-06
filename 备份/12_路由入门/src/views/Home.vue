<template>
  <div class="home">
    <h2>图片列表</h2>
    <div>
      <ul>
        <li v-for="image in images" :key="image.name">
          <RouterLink
           :to="{
            name:'tupian',
            params:{
              name:image.name,
              path:image.path
            }
           }"
          >
            <p>{{ image.name }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="image-content">
        <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="Home">
import { ref } from 'vue'
import {RouterLink,RouterView} from 'vue-router'

// 定义图片数据结构
interface ImageInfo {
  name:string,
  path:string
}

// 声明响应式数据
const images = ref<ImageInfo[]>([])

let imageList = [
  {name:"[02].jpg",path:"/statics/images/[02].jpg"},
  {name:"03.jpg",path:"/statics/images/03.jpg"},
  {name:"04.jpg",path:"/statics/images/04.jpg"},
]
images.value = imageList
</script>

<style scoped>
.home {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 28px;
}

.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.image-item {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
  padding: 15px;
}

.image-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.image-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

.image-item p {
  margin: 0;
  font-weight: 500;
  color: #34495e;
  font-size: 15px;
  word-break: break-all;
  line-height: 1.4;
}

RouterLink {
  text-decoration: none;
  color: inherit;
  display: block;
}

.image-content {
  margin-top: 30px;
  padding: 25px;
  background: #f8f9fa;
  border-radius: 12px;
  min-height: 300px;
}
</style>