import { createRouter, createWebHistory } from 'vue-router';
import FirstPage from '@/components/FirstPage.vue';
import AuthForm from '@/components/AuthForm.vue';
import Cart from '@/components/Cart.vue';
import Shop from '@/components/Shop.vue';  // Імпортуємо компонент Shop
import Features from '@/components/Features.vue';  // Імпортуємо компонент Features

const routes = [
  {
    path: '/',
    name: 'Home',
    component: FirstPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: AuthForm,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,  // Додаємо маршрут для Shop
  },
  {
    path: '/features',
    name: 'Features',
    component: Features,  // Додаємо маршрут для Features
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
