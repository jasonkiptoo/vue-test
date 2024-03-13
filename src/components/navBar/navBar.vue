<template>
    <div class="navbar">
      <ul class="nav">
        <li>
          <!-- Use router-link directly -->
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <!-- Use router-link directly -->
          <router-link to="/country">Country</router-link>
        </li>
        <li>
          <!-- Use router-link directly -->
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <routerr-view></routerr-view>
  </template>
  
  
  <script setup>
//   import { useRouter } from 'vue-router'
  
//   const router = useRouter()


// function goHome(){
//     router.push('/country')

// }

  </script>
  
  <style scoped>
  .navbar {
    width: 100%;
    background-color: grey;
    display: flex;
    justify-content: center;
  }
  
  .nav {
    list-style: none;
    display: flex;
    cursor: pointer;
    justify-items: center;
    margin: 10px;
  }
  
  .nav li {
    padding: 10px;
  }
  
  .nav li:hover {
    color: white;
  }
  </style>
  