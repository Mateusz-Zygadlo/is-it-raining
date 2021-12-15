import React from 'react'
import styled from 'styled-components'
import { Img } from 'remotion'
import { Images } from '../assets';

type CloudProps = {
  translateX?: number,
  translateY?: number,
  scale?: number,
  rotate?: number,
}

export const Cloud: React.FC<CloudProps> = ({
  translateX = 0,
  translateY = 0,
  scale = 1,
  rotate = 0,
}) => {
  return <BaseCloud 
    src={Images.Cloud} 
    style={{
      transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`
    }}
    />
}

export const BaseCloud = styled(Img)`
  width: '457px';
  height: '295px';
`;