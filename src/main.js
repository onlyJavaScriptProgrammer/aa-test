import { createApp } from 'vue';
import App from './App.vue';
import MyInput from './components/UI/MyInput.vue';
import MyButton from './components/UI/MyButton.vue';
import MySelect from './components/UI/MySelect.vue';
import store from './store';
import './assets/main.css';

const app = createApp(App);

app.component('MyInput', MyInput);
app.component('MyButton', MyButton);
app.component('MySelect', MySelect);

app.use(store);
app.mount('#app');
