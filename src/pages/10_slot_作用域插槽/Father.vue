<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
        <Games>
          <template #s1="params">
            <ul>
              <li v-for="g in params.games" :key="g.id">{{ g.name }}</li>
            </ul>
            <h4>{{ params.a }} | {{ params.x }}</h4>
          </template>
          <template #s2>
              <h4>123123</h4>
          </template>
        </Games>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
import Games from './Games.vue';

</script>

<style scoped>
    .father{
        background: skyblue;
        padding: 20px;
		border-radius: 10px;
        box-shadow: 0 0 10px gray;
    }
    .content{
        display: flex;
        justify-content: space-evenly;
    }
    img,video {
    width: 100%;
  }
</style>