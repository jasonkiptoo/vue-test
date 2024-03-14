
import { createRouter, createWebHistory } from 'vue-router'
// import countryTable from '@/components/tables/countryTable.vue'
// import navBar from '@/components/navBar/navBar.vue'
// import HomeView from '@/views/HomeView.vue';
// import AboutView from '@/views/AboutView.vue';
// import CountryView from '@/views/CountryView.vue';


const CountryView= ()=>import('@/views/CountryView.vue');
const HomeView= ()=>import('@/views/HomeView.vue');
const AboutView= ()=>import('@/views/AboutView.vue');

const routes= [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/country', component: CountryView },
  // { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
  
})
export default router 
