import Vue from 'vue'
import Router from 'vue-router'
import Search from './search_router/search_router'
import Car from './car_router/car_router'
import Home from './home_router/home_router'
import About from './about_router/about_router'

Vue.use(Router)

export default new Router({
  routes: [
    Home,
    About,
    Search,
    Car,
  ]
})
