<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
        <Cathgory title="热门游戏列表">
            <template v-slot:s1>
              <ul>
                <li v-for="g in games" :key="g.id">
                    {{ g.name }}
                </li>
            </ul>      
            </template>
            <template #s2>
                 <h4>手游区：</h4>   
            </template>
        </Cathgory>
        <Cathgory title="今日美食城市">
            <img :src="imgUrl" alt="">
        </Cathgory>
        <Cathgory title="今日影视推荐">
            <video :src="videoUrl" controls></video>
        </Cathgory>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
   import {ref} from 'vue'
   import {reactive} from 'vue'
   import Cathgory from './Cathgory.vue'

   let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
   ])

   let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
   let videoUrl = ref('https://www.bilibili.com/video/BV1Za4y1r7KE?p=67&vd_source=c11b2313c1cf374d8e9e22d23ec66183')
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