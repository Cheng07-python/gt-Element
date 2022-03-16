import { createApp } from 'vue';
import { store } from './store.js';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElIcons from '@element-plus/icons'
import App from './App.vue';
import router from './router';

//导入scss文件
import "./assets/scss/style.scss";
// import "../public/scss/Index.scss";
// import elementIcons from "./utils/elementIcons";


const app = createApp(App);
for (const name in ElIcons) {
    app.component(name, ElIcons[name])
}
app
    .use(ElementPlus)
    // .use(elementIcons)
    .use(router)
    .use(store)
    .mount('#app');