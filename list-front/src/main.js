import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'


import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import { villus } from './modules/villus'
import App from './App.vue'
import "./style.css"

createApp(App)
    .use(Quasar, { 
        plugins: {},
        lang: quasarLang,
    })
    .use(villus)
    .mount('#app')
