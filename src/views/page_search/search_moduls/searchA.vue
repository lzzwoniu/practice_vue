<template>
  <div>
    <p>{{newmsg}}</p>
    <input v-model = 'newmsg' type="text">
  </div>
</template>
<script>
export default {
  props:["msg"],
  data(){
    return{
      newmsg: this.msg
    }
  }
}
</script>
