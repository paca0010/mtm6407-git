<script setup>

import { ref } from 'vue';

const make = ref('');

// Array of car
const cars = [
  {
    make: 'Mitubishi',
    model: 'Lancer Evolution',
    img: 'https://www.jdmbuysell.com/wp-content/uploads/2020/05/mitsubishi-evo-II.png'
  },
  {
    make: 'Toyota',
    model: 'Supra',
    img: 'https://i.pinimg.com/736x/e9/07/78/e90778e5980edad7879ecc072856e543.jpg' 
  },
  {
    make: 'Nissan',
    model: 'Skyline GT-R',
    img: 'https://i.ebayimg.com/images/g/OUAAAOSw28RmspeN/s-l1200.jpg' 
  }
];

const selectedCar = () => cars.find(car => car.make === make.value)

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
        <h2>{{ selectedCar().make }} - {{ selectedCar().model }}</h2>
        <img :src="selectedCar().img" :alt="`${selectedCar().make} ${selectedCar().model}`" width="700"/>
    </div>
</div>

</template>

<!-- <style scoped>

/* img {
    width: 700px;
    height: auto;
}

</style> */ -->