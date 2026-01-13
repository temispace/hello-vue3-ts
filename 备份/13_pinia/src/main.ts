// 引入createApp创建应用实例
import {createApp} from 'vue';
// 引入根组件App
import App from './App.vue';
import {createPinia} from 'pinia';
// 创建应用实例
const app = createApp(App);
const pinia = createPinia()
// 使用pinia
app.use(pinia)
// 挂载app实例
app.mount('#app');
