// 引入createApp创建应用实例
import {createApp} from 'vue';
// 引入根组件App
import App from './App.vue';
// 引入路由器
import {router} from '@/router'
// 创建应用实例
const app = createApp(App);
// 使用路由器
app.use(router)
// 挂载app实例
app.mount('#app');
