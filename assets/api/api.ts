import axios from 'axios';
import { type AxiosInstance } from 'axios';
import * as controller from './index';

class Api {
  private instance: AxiosInstance;

  constructor() {
    const currentLanguage = useCookie('currentLanguage');

    this.instance = axios.create({
      baseURL: getBaseUrl(),
    });

    this.instance.interceptors.request.use(request => {
      request.baseURL = getBaseUrl();
      request.params = {
        ...request.params,
      };
      request.headers.Language = currentLanguage.value ? currentLanguage.value : 'RUS';
      return request;
    });
    this.services = new controller.services.ServiceApi(this.instance);
    this.weather = new controller.weather.WeatherApi(this.instance);
  }
  services: controller.services.ServiceApi;
  weather: controller.weather.WeatherApi;

}

export const api = new Api();

export function getBaseUrl() {
  return 'https://api.weatherapi.com/v1/';
}

