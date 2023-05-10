
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import our custom CSS
import "./assets/style.scss";
// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
