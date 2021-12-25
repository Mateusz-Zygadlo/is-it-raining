import React from 'react'
import styled from 'styled-components'
import { Images } from '../assets'
import { Img, useCurrentFrame, spring, useVideoConfig} from 'remotion'

export const Codemask: React.FC = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const animatedScale = spring({
    frame: frame - 15,
    fps,
    from: 2,
    to: 1,
  })

  return(
    <BaseCodemask 
      src={Images.Codemask} 
      style={{
        transform: `scale(${animatedScale})`
      }}
    />
  )
}

const BaseCodemask = styled(Img)`
  width: 324px;
  height: 251px;
`
