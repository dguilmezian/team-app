import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vuex from 'vuex'

const app = createApp(App)
const store = new Vuex.Store({
  state: {
    filter: ''
  },
  mutations: {
    setFilter(state, filter) {
      state.filter = filter;
    }
  }
})

app.use(store)
app.use(createPinia())
app.use(router)
app.use(Vuex)

app.mount('#app')
