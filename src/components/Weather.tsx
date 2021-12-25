import React from 'react';
import { 
  Sun, 
  SunBehindTheCloud,
  SnowCloud,
  RainCloud,
  Cloud,
} from '../components';
import { WeatherState } from '../common'

type WeatherProps = {
  weatherState: WeatherState,
}

export const Weather: React.FC<WeatherProps> = ({
  weatherState
}) => {
  const cloudPosition = [{
      scale: 0.7,
      rotate: 160,
      translateX: 460,
      translateY: -560
    },{
      scale: 0.45,
      translateX: -430,
      translateY: -470,
    },{
      scale: 0.45,
      translateX: -350,
      translateY: -120,
    },{
      scale: 0.7,
      translateX: 570,
      translateY: 20,
    },{
      scale: 1.4,
      rotate: -10,
      translateX: -520,
      translateY: 240,
    },{
      scale: 1.3,
      translateX: 420,
      translateY: 680,
    },{
      scale: 1.3,
      translateX: -320,
      translateY: 880,
    },{
      scale: 0.7,
      translateX: -340,
      translateY: -760
    },{
      scale: 1.3,
      translateX: 350,
      translateY: -960,
    }
  ]

  switch(weatherState){
    case WeatherState.Raining:
    case WeatherState.Thunderstorm:
      return(
        <>
          <RainCloud 
            translateX={0}
            translateY={-600}
            withThunder={weatherState == WeatherState.Thunderstorm}
          />
          {cloudPosition.map((position, index) => (
            <RainCloud 
              key={index}
              {...position}
            />
          ))}
        </>
      )
    case WeatherState.Snowing:
      return(
        <>
          <SnowCloud 
            translateX={0}
            translateY={-600}
          />
          {cloudPosition.map((position, index) => (
            <SnowCloud 
              key={index}
              {...position}
            />
          ))}
        </>
      )
    case WeatherState.Cloudy:
      return(
        <>
          <SunBehindTheCloud 
            translateX={0}
            translateY={-600}
          />
          {cloudPosition.map((position, index) => (
            <Cloud 
              key={index}
              {...position}
            />
          ))}
        </>
      )
    case WeatherState.Sunny:
      return(
        <>
          <Sun
            translateX={0}
            translateY={-600}
          />
          {cloudPosition.map((position, index) => (
            <Cloud 
              key={index}
              {...position}
            />
          ))}
        </>
      )
    default:
      return null
  }
}