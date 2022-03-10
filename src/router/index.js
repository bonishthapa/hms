import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/navbar',
    name: 'Navbar',
    redirect:'/',
    component: () =>import('../components/Navbar.vue'),
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/doctor',
        name: 'DoctorList',
        component: () =>import('../components/addDoctor/DoctorList.vue'),
      },
      {
        path: '/doctor/add',
        name: 'AddDoctor',
        component: () =>import('../components/addDoctor/AddDoctor.vue'),
      },
      {
        path: '/patient',
        name: 'PatientList',
        component: () =>import('../components/addDoctor/DoctorList.vue'),
      },
      {
        path: '/patient/add',
        name: 'AddPatient',
        component: () =>import('../components/addDoctor/AddDoctor.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
