
// import About from '../views/page_about/about.vue'
import Age from '../../views/page_about/about_router_moduls/age.vue'
import Name from '../../views/page_about/about_router_moduls/name.vue'

export default {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../../views/page_about/About.vue'),
      children: [
        {
          path: '/about', 
          redirect: '/about/name',
        },
        {
          path: '/about/age', 
          component: Age,
        },
        {
          path: '/about/name', 
          component: Name,
        },
      ]

    }
