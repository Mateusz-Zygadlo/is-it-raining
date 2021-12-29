import { APP_CONFIG } from '../config'
import { toWeatherModel } from '../untils'

export const fetchWeatherDataForCity = async (city: string) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q='
    .concat(city)
    .concat(`&appid=${APP_CONFIG.WEATHER_API_KEY}`)
    .concat(`&units=metric`)
  
  const { weatherState, temperature } = await fetch(url, {
    method: 'GET'
  })
    .then((res) => res.json())
    .then((data) => toWeatherModel(data))
    .catch(() => {
      throw new Error(`api key: ${APP_CONFIG.WEATHER_API_KEY}`)
    })

  return{
    weatherState,
    temperature
  }
}