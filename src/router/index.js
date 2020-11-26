import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login,
  },
  {
    path: '/registro',
    name: 'Registro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "registrarse" */ '../views/Registro.vue'),
  },
  {
    path: '/verificacion-codigo',
    name: 'VerificacionCodigo',
    
    component: () =>
      import('../views/VerificacionCodigo'),
  },
  {
    path: '/dashboard-cliente',
    name: 'DashboardCliente',
    
    component: () =>
      import('../views/DashboardCliente'),
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
