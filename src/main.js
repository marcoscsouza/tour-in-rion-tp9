import { createApp } from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import App from './App.vue'
import store from './store'
import router from './router'
// import bootstrap from './bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/assets/css/style.css'



library.add(fas, faTwitter, far)

createApp(App)
.use(router)
.use(store)
// .use(bootstrap)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
