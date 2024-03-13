import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import countryTable from './components/tables/countryTable.vue'
import navBar from './components/navBar/navBar.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: navBar, 
      children: [{ path: '/country', component: countryTable}]},







      { path: '/country', component: countryTable },
    //   { path: '/about', component: About }
    ]
  })
createApp(App).use(router).mount('#app')

