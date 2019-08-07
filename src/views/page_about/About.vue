<template>
  <div class="about">
    <AboutMsg />
    <router-link class="age" to = "/about/age">age</router-link>
    <router-link to = "/about/name">name</router-link>
    <router-view></router-view>
    <Tab :objTab = 'objTab'/>
    <AboutComputed  />
  </div>
</template>
<script>
import AboutMsg from '@/views/page_about/about_moduls/about.vue';
import AboutComputed from '@/views/page_about/about_moduls/about_computed.vue';
import Tab from '@/components/tab.vue';
export default {
  components: {
    AboutMsg,
    Tab,
    AboutComputed
  },
  data() {
    var obj = [
      {
          "id": 1,
          "name": "ahome",
          "cont": "home",
        },
        {
          "id": 2,
          "name": "aprojects",
          "cont": "projects",
        },
        {
          "id": 3,
          "name": "aservices",
          "cont": "services",
        },
        {
          "id": 4,
          "name": "acontact",
          "cont": "contact",
        },
    ]
    return {
      objTab: obj
    }
  },
}
</script>
<style lang = "scss">
.age{
  color: palevioletred;
}
a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>

