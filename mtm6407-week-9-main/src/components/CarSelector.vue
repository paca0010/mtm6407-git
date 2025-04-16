<script setup>

import { ref, computed, watch } from 'vue';

const make = ref('')

// array of cars
const cars = [
    {
        make: 'Honda',
        model: 'Civic',
        img: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2025/civic-sedan/non-VLP/10-Family/MY25_Civic_Family_Card_Jelly_2x.png?sc_lang=en',
        year: 2025,
    },
    {
        make: 'Toyota',
        model: 'Corolla',
        img: 'https://static.vecteezy.com/system/resources/thumbnails/029/946/422/small_2x/white-modern-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png',
        year: 2019,
    },
    {
        make: 'Ford',
        model: 'F-150',
        img: 'https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-Ford-F-150-White-Platinum.png',
        year: 2020,
    }
];

const selectedCar = () => cars.find(car => car.make === make.value)

const carMakeAndModel = computed(() => `${selectedCar()?.make} - ${selectedCar()?.model} (${selectedCar()?.year})`);

watch(make, (newValue, oldValue) => {
    console.log(`Make changed from ${oldValue} to ${newValue}`);
})


</script>

<template>

    <div class="car-selector">
        <select v-model="make">
            <option value="">Please choose a vehicle make</option>
            <option v-for="carMake in cars.map(car => car.make)" :key="carMake" :value="carMake">
                {{ carMake }}
            </option>
        </select>

        <div class="car-img" v-if="selectedCar()">
            <h2>{{ carMakeAndModel }}</h2>
            <img :src="selectedCar().img" :alt="carMakeAndModel" width="400"/>
        </div>
    </div>

</template>