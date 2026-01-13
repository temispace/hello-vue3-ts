// 引入createApp创建应用实例
import {createApp} from 'vue';
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css';
// 引入根组件App
import App from './App.vue';
// 引入router路由器
import { defaultRouter } from './router'
// 引入pinia
import {createPinia} from 'pinia';

// 创建应用实例
const app = createApp(App);
// 创建pinia实例
const pinia = createPinia();
// 使用pinia
app.use(pinia)
// 使用router
app.use(defaultRouter)
// 挂载app实例
app.mount('#app');
