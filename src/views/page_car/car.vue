<template>
  <div>
    <CarOne />
    <SearchB :message = "message" />
  </div>
</template>
<script>
import CarOne from '@/views/page_car/car_moduls/carone.vue';
import SearchB from '@/components/searchB.vue';

export default {
  components:{
    CarOne,
    SearchB
  },
  data(){
    return{
      message: "绑定样式"
    }
  }
}
</script>
