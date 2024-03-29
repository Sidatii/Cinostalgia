import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "./components/index.css"
import './assets/tailwind.css'
import './axios'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChair } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faChair)


const pinia = createPinia();
pinia.use(({store}) => {
    store.router = markRaw(router);
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
