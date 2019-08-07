<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Index dba = "Welcome to index.vue"/>
    <Tab :objTab = "objTab"/>
    <!-- <h2>{{this.$store.state.count}}</h2> -->
    <Vuex />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/views/page_home/home_moduls/HelloWorld.vue'
import Index from '@/views/page_home/home_moduls/index.vue'
import Vuex from '@/views/page_home/home_moduls/vuex_home.vue'

import Tab from '@/components/tab.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Index,
    Tab,
    Vuex
  },
  data() {
    return {
      objTab: [
        {
          "id": 1,
          "name": "home"
        },
        {
          "id": 2,
          "name": "projects"
        },
        {
          "id": 3,
          "name": "services"
        },
        {
          "id": 4,
          "name": "contact"
        },
      ],
    }
  },
}
</script>
