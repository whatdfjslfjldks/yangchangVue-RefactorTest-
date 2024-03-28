import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import B from './components/B.vue'
import test2 from './components/test2.vue'
import App from './App.vue'

const router=createRouter(
    {
        history:createWebHashHistory(),
        routes:[
            {
                path:'/',
                component:B
            },
            {
                path:'/test2',
                component:test2
            }
        ]
    }
)

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
