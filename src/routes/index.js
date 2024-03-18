import HomeView from '@/views/HomeView.vue';
import TodoList from '@/views/TodoList.vue';
import { createRouter, createWebHistory } from 'vue-router'

const CountryView= ()=>import('@/views/CountryView.vue');
const AboutView= ()=>import('@/views/AboutView.vue');

const routes= [
  { path: '/', component: HomeView },
  { path: '/country', component: CountryView },
  { path: '/about', component: AboutView },
  { path: '/todo', component: TodoList },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 
