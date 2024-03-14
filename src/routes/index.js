
import { createRouter, createWebHistory } from 'vue-router'

import countryTable from '@/components/tables/countryTable.vue'

const routes= [
  // { path: '/', component: Home },
  { path: '/country', component: countryTable },
  // { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
  
})
export default router 
