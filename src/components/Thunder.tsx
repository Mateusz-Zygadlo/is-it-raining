import React from 'react'
import { Img, useCurrentFrame, interpolate } from 'remotion'
import styled from 'styled-components'
import { Images } from '../assets'

type ThunderProps = {
  scale?: number,
  bottom: number,
  left: number,
}

export const Thunder: React.FC<ThunderProps> = ({
  scale = 1,
  bottom,
  left,
}) => {
  const frame = useCurrentFrame()
  const animatedBottom = interpolate(
    frame,
    [0, 15],
    [-30, bottom],
    {
      extrapolateRight: 'clamp'
    }
  )
  const animatedOpacity = interpolate(
    frame,
    [0, 15, 45],
    [1, 1, 0]
  )
  const animatedLeft = interpolate(
    frame,
    [0, 15],
    [left, left - 6]
  )

  return(
    <BaseThunder 
      src={Images.IThunder} 
      style={{
        bottom: animatedBottom,
        left: animatedLeft,
        opacity: animatedOpacity,
        transform: `scale(${scale})`
      }}
    />
  )
}

const BaseThunder = styled(Img)`
  width: 106px;
  height: 262px;
  position: absolute;
  z-index: -1;
  background-color: black;
`