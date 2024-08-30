import './assets/main.css'

import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const defaults = {
  VCard: {
    VTextField: { variant: 'outlined' }
  }
}
const vuetify = createVuetify({
  components,
  directives,
  defaults
})

const app = createApp(App).use(vuetify)

app.use(createPinia())

app.mount('#app')
