<template>
    <div class="table">
        <table class="table" border="2"> <!-- Add 'border="1"' attribute to add borders -->
            <thead> <!-- Add thead tag for table header -->
                <tr>
                    <th>Country</th>
                    <th>Flag</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(country, key) in countries" :key="key">
                    <td>{{ country.name.common }}</td>
                    <td>
                        <img :src="country.flags.png" alt="Flag of {{ country.name.common }}" />
                    </td>
                </tr>
            </tbody>
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


<style scoped>
.table {
    width: 100%;
}

.table table {
    width: 100%;
    border-collapse: collapse; /* Collapse table borders */
}

.table th, .table td {
    border: 1px solid #dddddd; /* Add borders to table cells */
    padding: 8px; /* Add padding to cells */
    text-align: left; /* Align text to the left */
}

.table th {
    background-color: #f2f2f2; /* Add background color to table header */
}
</style>