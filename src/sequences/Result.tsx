import React from "react"
import { WeatherState } from "../common"
import { 
  Typography, 
  VideoBackground, 
  WeatherBaseImage, 
  Cloud, 
  RainCloud,
  SnowCloud, 
  Sun,
  SunBehindTheCloud 
} from "../components"
import { COMPOSITION_CONFIG } from '../config'
import { useTranslations, useWeatherStateName } from '../hooks'
import styled from 'styled-components'

type ResultProps = {
  weatherState: WeatherState,
  temperature: number,
}

export const Result: React.FC<ResultProps> = ({ weatherState, temperature }) => {
  const { VIDEO } = COMPOSITION_CONFIG
  const T = useTranslations()
  const stateName = useWeatherStateName(weatherState)
  
  return(
    <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
      <Container>
        <WeatherBaseImage weatherState={weatherState} />
        <TextContainer>
          <Typography.Heading>
            {temperature}{T.common.celsius}
          </Typography.Heading>
          <Typography.Heading>
            {stateName}
          </Typography.Heading>
        </TextContainer>
      </Container>
      <SnowCloud
        scale={0.7}
        translateX={-340}
        translateY={-760}
      />
      <SnowCloud
          scale={1.3}
          translateX={350}
          translateY={-960}
      />
      <Sun 
        translateX={0}
        translateY={-600}
      />
      <SnowCloud
          scale={0.7}
          rotate={160}
          translateX={460}
          translateY={-560}
      />
      <SnowCloud
          scale={0.45}
          translateX={-430}
          translateY={-470}
      />
      <SnowCloud
          scale={0.45}
          translateX={-350}
          translateY={-120}
      />
      <SnowCloud
          scale={0.7}
          translateX={570}
          translateY={20}
      />
      <SnowCloud
          scale={1.4}
          rotate={-10}
          translateX={-520}
          translateY={240}
      />
      <SnowCloud
          scale={1.3}
          translateX={420}
          translateY={680}
      />
      <SnowCloud
          scale={1.3}
          translateX={-320}
          translateY={880}
      />
    </VideoBackground>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`