<template>
    <div class="table">
        <table class="table">
            <th>country</th>
            <th>flag</th>
            <tr v-for="(country, key) in countries" :key="key">
            <td>{{country.name.common}}</td>
            <td>
                <img v-bind:src="country.flags.png"/>
            </td>
            </tr>
        </table>
    </div>
</template>


<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const countries=ref()

onMounted(()=>{
    fetchCountries()
})


const fetchCountries=()=>{
    axios('https://restcountries.com/v3.1/all?fields=name,flags',{
        method: 'Get',
    })
    .then((res)=>{
        countries.value=res.data
    })

}
</script>


<style>
</style>