<template>
  <div class="image-detail">
    <div class="image-header">
      <h2>图片详情</h2>
    </div>
    <div v-if="name" class="image-content">
      <div class="image-meta">
        <p class="meta-item"><span class="label">图片名称:</span> {{ name }}</p>
        <p class="meta-item"><span class="label">图片路径:</span> {{ path }}</p>
      </div>
      <div class="image-preview">
        <img :src="path" :alt="name" />
      </div>
    </div>
    <div v-else class="no-selection">
      <p>请选择一张图片查看</p>
    </div>
  </div>
</template>

<script setup lang="ts">


interface Props {
  name?: string
  path?: string
}

withDefaults(defineProps<Props>(), {
  name: '',
  path: ''
})
</script>

<style scoped>
.image-detail {
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.image-header {
  text-align: center;
  margin-bottom: 25px;
}

.image-header h2 {
  color: #2c3e50;
  font-weight: 600;
  font-size: 28px;
  margin: 0;
}

.image-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.image-meta {
  width: 100%;
  max-width: 600px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.meta-item {
  margin: 10px 0;
  font-size: 16px;
  color: #34495e;
  display: flex;
  align-items: flex-start;
}

.label {
  font-weight: 600;
  color: #2c3e50;
  min-width: 80px;
  margin-right: 15px;
}

.image-preview {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-preview img {
  max-width: 100%;
  max-height: 500px;
  border-radius: 10px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  object-fit: contain;
}

.no-selection {
  text-align: center;
  padding: 40px 20px;
  color: #7f8c8d;
  font-size: 18px;
}
</style>