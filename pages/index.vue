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
    <div v-if="weather" class="mt-6">
      <div class="max-w-md mx-auto bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700/50">
        <h2 class="text-2xl font-bold text-white">{{ weather.location.name }}, {{ weather.location.country }}</h2>
        
        <div class="flex items-center justify-between mt-6">
          <div class="flex items-center">
            <img :src="weather.current.condition.icon" :alt="weather.current.condition.text" class="w-24 h-24" />
            <p class="text-5xl font-bold text-white ml-2">{{ weather.current.temp_c }}°C</p>
          </div>
          <p class="text-white text-lg">{{ weather.current.condition.text }}</p>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-6 text-gray-200">
          <div class="bg-gray-700/30 rounded-lg p-4 flex items-center">
            <span class="text-2xl mr-3">💧</span>
            <div>
              <p class="text-sm text-gray-400">Humidity</p>
              <p class="font-bold">{{ weather.current.humidity }}%</p>
            </div>
          </div>
          <div class="bg-gray-700/30 rounded-lg p-4 flex items-center">
            <span class="text-2xl mr-3">💨</span>
            <div>
              <p class="text-sm text-gray-400">Wind Speed</p>
              <p class="font-bold">{{ weather.current.wind_kph }} km/h</p>
            </div>
          </div>
        </div>
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