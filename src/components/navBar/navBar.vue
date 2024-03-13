<template
>
<div class="navbar">
    <ul class="nav">
        <li>Home</li>
        <li>flags</li>
        <li>About</li>
    </ul>
</div>

</template>


<script setup>


</script>

<style scoped>

.navbar{
    width: 100%;
    background-color: grey;
    display: flex;
    justify-content: center;
    
}
.nav{
    list-style: none;
    display: flex;
    cursor: pointer;
    justify-items: center;
    margin: 10px;
    /* display: flex;
    flex-direction: row;
   justify-content: space-between;
    float: right;
    background-color: rebeccapurple;
    list-style: none; */

text-decoration: none;
}
.nav li{
    padding: 10px;
}
.nav li:hover{
    color: white;
}
</style>