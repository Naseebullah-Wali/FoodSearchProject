import {createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import MailList from '../views/MailList.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: MailList
    },
    


];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;