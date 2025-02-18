import { type AxiosInstance } from 'axios';

export class WeatherApi {
  private request: AxiosInstance;
  constructor(request: AxiosInstance) {
    this.request = request;
  }
  
  async getWeatherByCity(city: string) {
    const { data } = await this.request({
      method: 'get',
      url: `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_BASE_API}&q=${city}`
    });
    return data;
  }
}