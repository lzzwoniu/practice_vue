<template>
  <div>
    <p>{{this.$store.state.count}}</p>
    <p>{{this.$store.getters.getStateCount}}</p>
    <h3>count的值：{{this.$store.state.count}}</h3>
    <button @click="addFun">+</button>
    <button @click="reductionFun">-</button>
    <p :class = "{active : isactive}">{{count1}}</p>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from 'vuex';
export default {
  data() {
    return {
      isactive: true
    }
  },
  methods: {
    ...mapActions({
      addFun: 'addFun',
      reductionFun: "reductionFun"
    })
    // addFun: function(){
    //   // this.$store.commit("add")  //commit提交mutations
    //   this.$store.dispatch("addFun")  //dispatch提交actions
    // },
    // reductionFun: function(){
    //   // this.$store.commit("reduction")
    //   this.$store.dispatch("reductionFun", n)
    // }
  },
  computed: {
    ...mapState({
      count1: state=> state.count
    })
  },
}
</script>
<style scoped>
.active{
  color: red;
}
</style>

