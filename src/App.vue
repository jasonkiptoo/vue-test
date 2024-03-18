<!-- <template>
Home





  
  <input type="text" name="item" v-model="itemName"/>
  <button type="submit" v-on:click="addItem()">add</button>


<ol>
  <li v-on:click="onCheck(item)" :class="!item.status ? 'not-done' : 'done'" v-for="(item, index) in itemsList" :key="index" >{{ item.name }}</li>
</ol>










<router-view></router-view>
</template> -->


<template>
  <div>
   
    <nav-bar /> <!-- Include your navbar component here -->
    <router-view /> <!-- This is where your routed components will be rendered -->
  </div>
</template>

<script setup>


import navBar from './components/navBar/navBar.vue';

// import navBar from './components/navBar/navBar.vue';



</script>

<style>
html,body { margin: 0 !important;}
#app {
}

.done{
  text-decoration: line-through;
  color: green;
}
.not-done{
color: red;
  text-decoration:none;
}

</style>
