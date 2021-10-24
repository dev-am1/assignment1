import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css';
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'
const app = createApp(App)
app.component('DatePicker', Vue3PersianDatetimePicker)

app.mount('#app')