<script setup>

import { ref, computed, watch } from 'vue';

const make = ref('');

// Array of car
const cars = [
  {
    make: 'Mitubishi',
    model: 'Lancer Evolution',
    img: 'https://www.jdmbuysell.com/wp-content/uploads/2020/05/mitsubishi-evo-II.png',
    year: 1992
  },
  {
    make: 'Toyota',
    model: 'Supra',
    img: 'https://i.pinimg.com/736x/e9/07/78/e90778e5980edad7879ecc072856e543.jpg',
    year: 1993 
  },
  {
    make: 'Nissan',
    model: 'Skyline GT-R',
    img: 'https://i.ebayimg.com/images/g/OUAAAOSw28RmspeN/s-l1200.jpg',
    year: 1995 
  }
];

const selectedCar = () => cars.find(car => car.make === make.value)

const carMakeAndModel  = computed(() => `${selectedCar()?.make} - ${selectedCar()?.model} (${selectedCar()?.year})`);

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
        <!-- <h2>{{ selectedCar().make }} - {{ selectedCar().model }}</h2> -->
         <h2>{{ carMakeAndModel }}</h2>
        <img :src="selectedCar().img" :alt="`${selectedCar().make} ${selectedCar().model}`" width="700"/>
    </div>
</div>

</template>

<!-- <style scoped>

/* h2 {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    color: #333;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
} */
 /* img {
    width: 700px;
    height: auto;
} */

</style>  -->