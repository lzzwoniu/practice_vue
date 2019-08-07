<template>
  <div>
    <p>num1:<input type="text" v-model = "num1"></p>
    <p>num2:<input type="text" v-model = "num2"></p>
    <p>总数：{{count}}</p>
    <button @click = "add">+</button>
    <button @click = "reduction">-</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num1: 1,
      num2: 2,
    }
  },
  computed: {
    count(){
      console.log("1")
      return this.num1 + this.num2
    }
  },
  methods: {
    add: function(){
      this.num1 ++
      this.num2 ++
    },
    reduction: function(){
      this.num1 --
      this.num2 --
    },
  },
}
</script>
<style>
  input,button{
    border: 1px solid #333;
    display: inline-block;
  }
  button{
    width: 80px;
    height: 30px;
    background: #fff;
    font-size: 20px;
  }
</style>

