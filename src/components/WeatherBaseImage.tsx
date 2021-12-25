import React from "react";
import { WeatherState } from '../common'
import { 
  Umbrella,
  ChristmasTree,
  Sunbeds,
} from '../components'

type WeatherBaseImageProps = {
  weatherState: WeatherState
}

export const WeatherBaseImage: React.FC<WeatherBaseImageProps> = ({ weatherState }) => {
  switch(weatherState){
    case WeatherState.Raining:
    case WeatherState.Thunderstorm:
      return(
        <Umbrella />
      )
    case WeatherState.Snowing:
      return(
        <ChristmasTree />
      )
    case WeatherState.Cloudy:
    case WeatherState.Sunny:
      return(
        <Sunbeds />
      )
    default:
      return null
  }
}