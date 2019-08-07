<template>
  <div id="divCalss">
    <p :class = '{active : isactive}'>
      字符串绑定class
    </p>
    <p :class = 'objcalss'>
      对象绑定class
    </p>
    <p :class = '[arrsty, arrsty1]'>
       数组绑定class
    </p>
     <p :class = '[errorcla, orshow ? showerr : ""]'>
       三元运算符绑定class
    </p>
    <p :style = '{fontSize : fontSize + "px", color : red}'>
      字符串style
    </p>
    <p :style = 'objstyle'>
      对象style
    </p>
    <p :style = '[arrstyle1, arrstyle2]'>
      数组style
    </p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isactive: true,
      objcalss:{
        "active": true,
        "secactive" :true
      },
      arrsty: "active1",
      arrsty1: "active2",
      orshow: false,
      errorcla: 'active3',
      showerr: "active4",
      fontSize: 30,
      red: "red",
      objstyle: {
        color: "skyblue",
        fontSize: "25px"
      },
      arrstyle1: {
        color: "pink",
        "font-size": "30px"
      },
      arrstyle2: {
        "font-weight": "bold"
      }

    }
  }
}
</script>
<style scoped>
p{
  display: inline-block;
}
.active{
  width: 100px;
  height: 100px;
  background: skyblue;
}
.secactive{
  background: pink;
}
.active1{
  width: 60px;
  height: 100px;
  background: slategray;
}
.active2{
  width: 60px;
  height: 100px;
  background: sienna;
}
.active3{
  width: 60px;
  height: 100px;
  background: seagreen;
}
.active3{
  width: 60px;
  height: 100px;
  background: sandybrown;
}
</style>

