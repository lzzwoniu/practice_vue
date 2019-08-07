<template>
  <header>
    <div class="inputbox">
      <input class="input" type="text" v-model = "searchString" placeholder = "请输入搜索关键词...">
    </div>
    <ul class="ulbox">
      <li v-for = "item in searchNewArr" :key = 'item.id'>
        <a :href="item.url"><img :src="item.image" alt=""></a>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  props:['searchSonArr'],
  data() {
    return {
      searchString: '',
    }
  },
  computed: {
    searchNewArr: function(){
      var articles_array = this.searchSonArr,
          searchString = this.searchString;
      if(!searchString){
        return articles_array;
      }
      searchString = searchString.trim().toLowerCase();
      articles_array = articles_array.filter(function(item){
        if(item.title.toLowerCase().indexOf(searchString) !== -1){
          return item
        }
      })
      return articles_array;
    }
  },
}
</script>
<style scoped>
  .input{
    border: 1px solid #ccc;
    width: 250px;
    height: 25px;
  }
  .ulbox{
    list-style: none;
    padding: 0;
  }
  .ulbox p{
    display: inline-block;
    width: 226px;
  }
</style>

