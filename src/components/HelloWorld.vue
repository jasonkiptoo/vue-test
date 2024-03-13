<template>
  <div class="container">

    <navbar></navbar>
    
    <countryTable></countryTable>

  </div>
</template>

<script setup>
// import axios from 'axios';
// import { onMounted, ref } from 'vue';
import countryTable from './tables/countryTable.vue';
import navbar from './navBar/navBar.vue';
// import axios from 'axios';

// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   }
// }
// const jsonData= ref()
// onMounted(()=>{
//   fetchQuotes();
// })

// const  fetchQuotes=()=>{

// axios({
//   url: 'https://restcountries.com/v3.1/all?fields=name,flags',
//   method: 'GET',

// }).then((res)=>{
//   jsonData.value=res.data
// //   for(let i=0;i<res.data.length;i++)
// //   {
// // console.log(res.data[i].flags.png);
// //   }
// //   console.log(res.data);
// })




// }




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
