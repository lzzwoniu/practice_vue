<template>
  <div class="box">
    <div class="tab" :class="active">
      <p :class="item.id == isactive ? 'active':''" v-for="item in newobj" :key="item.id" @click="makeActive(item.id)">{{item.name}}</p>
      <h3>您选择的是：<span>{{active}}</span></h3>
    </div>
  </div>
</template>
<script>
export default {
  // props: {
  //   objTab: Array
  // },
  props: ["objTab"],
  data() {
    return {
      active: this.objTab[0].name,
      newobj: this.objTab,
      isactive: 1
    }
  },
  methods: {
    makeActive: function(item){
      this.isactive = item
      this.active = this.objTab[item - 1].name
    }
  },
}
</script>
<style scoped>
   p {
    background: #389dc1;
    color: #fff;
    padding: 10px 10px;
    display: inline-block;
  } 
  .tab .active{
		background-color:#e35885;
	}
</style>

