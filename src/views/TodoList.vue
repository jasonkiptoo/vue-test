<template>

    <div class="container">
        
        <div class="todo">
    To Do List


            <div class="card">
            <input type="text" name="item" v-model="itemName"/>
            <button type="submit" v-on:click="addItem()">add</button>
            </div>
    
    <div class="item-list">
        <ol>
          <li v-on:click="onCheck(item)" :class="!item.status ? 'not-done' : 'done'" v-for="(item, index) in itemsList" :key="index" >{{ item.name }}</li>
        </ol>
    </div>
        </div>


    </div>
</template>

<script setup
>
import { ref } from 'vue';


const itemName=ref('')
const itemsList=ref([{
  name: "new item",
  status: true,
}])


function addItem(){


// if()\


 
 let name= itemsList.value.map((el)=>{
    return el.name
})
console.log(name, "thi is the array of items");
if(name.includes(itemName)){
    itemsList.value.push({
    name:itemName.value,
    status:false,

  })
 console.log("Good");
}

else{
    console.log("dsdsd");
    window.alert("error")
  }
console.log(name, "name");
}
  const onCheck =(item)=>{

    item.status = !item.status
    // itemsList.pop()

console.log(item, "dsjhhghjdjh");

}

</script>


<style scoped>
.container{
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    
}

.todo{
    background-color: wheat;
    width: 450px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 20px;

}
.item-list{
    
}
.card{
    display: flex;
    justify-content: center;
}


</style>
