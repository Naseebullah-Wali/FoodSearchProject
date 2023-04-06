import {createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import MailList from '../views/MailList.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByletter.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import Ingredients from '../views/Ingredients.vue'
import MealDetails from '../views/MealDetails.vue'

const routes = [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/by-name/:name?",
          name: "byName",
          component: MealsByName,
        },
        {
          path: "/by-letter/:letter?",
          name: "byLetter",
          component: MealsByLetter,
        },
        {
          path: "/ingredients",
          name: "ingredients",
          component: Ingredients,
        },
        {
          path: "/by-ingredient/:ingredient?",
          name: "byIngredient",
          component: MealsByIngredient,
        },
        {
          path: '/meal/:id?',
          name: 'mealDetails',
          component: MealDetails
        }
      ]
    },
    {
      path: '/guest',
      component: GuestLayout
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;