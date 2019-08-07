<template>
  <div>
    <h3>{{message}}</h3>
    <!-- <input v-model = 'msg' type="text"> -->
  </div>
</template>
<script>
export default {
  props:['message'],
  data(){
    return{
        msg: 123,
    }
  }
}
</script>
