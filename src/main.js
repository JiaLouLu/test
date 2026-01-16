import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import MyUi from '../packages/index.js';
createApp(App).use(MyUi).mount('#app');
