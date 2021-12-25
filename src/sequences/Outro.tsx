import React from 'react'
import styled from 'styled-components'
import { 
  VideoBackground,
  Typography,
  Codemask,
 } from '../components'
 import { COMPOSITION_CONFIG, APP_CONFIG } from '../config'
 import { Images } from '../assets'
 import { Img, useCurrentFrame, interpolate} from 'remotion'
 import { useTranslations } from '../hooks'

export const Outro: React.FC = () => {
  const { VIDEO } = COMPOSITION_CONFIG
  const { PERSONAL_PAGE_URL } = APP_CONFIG
  const T = useTranslations()
  const frame = useCurrentFrame()
  const animatedBorderOpacity = interpolate(
    frame,
    [0, 15],
    [0, 1]
  )
  const animatedContentOpacity = interpolate(
    frame,
    [0, 15, 30],
    [0, 0, 1]
  )
  
  return(
    <VideoBackground backgroundColor={VIDEO.OUTRO_BACKGROUND_COLOR}>
      <Border style={{ opacity: animatedBorderOpacity }}>
        <Container style={{ opacity: animatedContentOpacity }}>
          <Codemask />
          <Section>
            <Typography.Regular>
              {T.outro.question}
            </Typography.Regular>
            <DiscordContainer>
              <Discord src={Images.Discord} />
            </DiscordContainer>
            <Typography.Regular>
              {T.outro.github}
            </Typography.Regular>
            <Typography.Regular>
              {PERSONAL_PAGE_URL}
            </Typography.Regular>
          </Section>
          <Typography.Note>
            {T.outro.note}
          </Typography.Note>
        </Container>
      </Border>
    </VideoBackground>
  )
}

const Border = styled.div`
  position: absolute;
  border: 9px solid white;
  top: 70px;
  bottom: 70px;
  left: 70px;
  right: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Discord = styled(Img)`
  width: 133px;
  height: 101px;  
`

const Container = styled.div`
  max-width: 630px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 200px 0;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`

const DiscordContainer = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
`