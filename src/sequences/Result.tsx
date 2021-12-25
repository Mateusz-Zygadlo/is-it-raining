import React from "react"
import { WeatherState } from "../common"
import { useCurrentFrame, interpolate } from 'remotion'
import { 
  Typography, 
  VideoBackground, 
  WeatherBaseImage, 
  Weather,
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
  const frame = useCurrentFrame()
  const animatedOpacity = interpolate(
    frame,
    [0, 30],
    [0, 1]
  )
  
  return(
    <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
      <Container>
        <WeatherBaseImage weatherState={weatherState} />
        <Weather weatherState={weatherState} />
        <TextContainer style={{ opacity: animatedOpacity }}>
          <HeadingWithShadow>
            {temperature}{T.common.celsius}
          </HeadingWithShadow>
          <HeadingWithShadow>
            {stateName}
          </HeadingWithShadow>
        </TextContainer>
      </Container>
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
const HeadingWithShadow = styled(Typography.Heading)`
  text-shadow: 0px 0px 4px rgb(0, 0, 0, 0.5);
  z-index: 100;
`