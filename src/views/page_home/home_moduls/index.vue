<template>
  <div>
    <p v-for = "item in arr" :key="item.id">{{item.name}}</p>
    <p>{{dba}}</p>
    
  </div>
</template>
<script>
export default {
  props: {
    msg: Array,
    dba: String
  },
  data:function(){
    var arr = [
      {
        id: "01",
        name: "第一页" 
      },
      {
        id: "02",
        name: "第二页" 
      },
    ]
    return {arr};
  }
}
</script>
