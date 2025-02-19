<template>
  <div class="w-full max-w-md p-6 bg-white/40 backdrop-blur-xl py-4 rounded-3xl shadow-lg">
    <!-- поиск -->
    <form @submit.prevent="fetchWeather" class="flex gap-4">
      <input
        v-model="city"
        type="text"
        placeholder="Enter city"
        class="w-full border p-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button class="bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Search</button>
    </form>

    <!-- карточка-->
    <div v-if="weather" class="mt-6 text-center">
      <h2 class="text-2xl font-bold text-white">{{ weather.location.name }}, {{ weather.location.country }}</h2>
      <div class="flex justify-center items-center mt-4">
        <img :src="weather.current.condition.icon" :alt="weather.current.condition.text" class="w-20 h-20" />
      </div>
      <p class="text-4xl font-bold text-white mt-2">{{ weather.current.temp_c }}°C</p>
      <p class="text-white text-lg">{{ weather.current.condition.text }}</p>
      <div class="flex justify-between mt-4 text-white">
        <p>💧 Humidity: <b>{{ weather.current.humidity }}%</b></p>
        <p>💨 Wind: <b>{{ weather.current.wind_kph }} km/h</b></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { api } from '~/assets/api/api';
const weatherApi = api.weather;
const city = ref('');
const weather = ref(null);

const fetchWeather = async () => {
  try {
    const response = await weatherApi.getWeatherByCity(city.value);
    console.log(response);
    weather.value = response;
  } catch (error) {
    alert('City not found');
  }
};
</script>