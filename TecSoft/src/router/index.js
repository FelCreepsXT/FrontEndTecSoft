import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dealer',
    name: 'AppDealer',
    component: () => import('../views/AppDealer'),
    children: [
      {
        path: 'home',
        name: 'HomeDealer',
        component: () => import('../views/HomeDealer')
      }
    ]
  },
  ////////////////////////////////////////////////////////////
  // Customer
  ////////////////////////////////////////////////////////////
  {
    path: '/customer',
    name: 'AppCustomer',
    component: () => import('../views/AppCustomer'),
    children:[
      {
        path: 'home',
        name: 'HomeCustomer',
        component: () => import('../views/HomeCustomer')
      },
      {
        path: 'findCompany',
        name: 'FindCompany',
        component: () => import('../components/FindCompanies')
      },
      {
        path: 'state',
        name: 'StatePackage',
        component: () => import('../components/PackageState')
      }
    ]
  },
  {
    path: '/dispatcher',
    name: 'AppDispatcher',
    component: () => import('../views/AppDispatcher'),
    children: [
      {
        path: 'packages',
        name: 'TravelPackage',
        component: () => import('../components/TravelPackage'),
        children: [
          {
            path: '1',
            name: 'DState1',
            component: () => import('../components/StatePackage/PackageState1')
          },
          {
            path: '2',
            name: 'DState2',
            component: () => import('../components/StatePackage/PackageState2')
          },
          {
            path: '3',
            name: 'DState3',
            component: () => import('../components/StatePackage/PackageState3')
          },
          {
            path: '4',
            name: 'DState4',
            component: () => import('../components/StatePackage/PackageState4')
          }
        ]
      },
      {
        path: 'home',
        name: 'HomeDispatcher',
        component: () => import('../views/HomeDispatcher')
      }

    ]
  },
  {
    path: '/company/:id',
    name: 'HomeCompany',
    component: () => import('../views/AppCompany')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
