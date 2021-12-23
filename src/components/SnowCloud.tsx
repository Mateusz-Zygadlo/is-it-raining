import React from 'react'
import { Loop } from 'remotion'
import styled from 'styled-components'
import { 
  Cloud, 
  Snow 
} from '../components'  

type SnowCloudProps = {
  translateX?: number,
  translateY?: number,
  scale?: number,
  rotate?: number,
}

export const SnowCloud: React.FC<SnowCloudProps> = ({
  translateX = 0,
  translateY = 0,
  scale = 1,
  rotate = 0,
}) => {
  const snowPosition = [
    {
      bottom: -60,
      left: 60,
    },
    {
        bottom: -70,
        left: 180,
    },
    {
        bottom: -60,
        left: 300,
    },
    {
        bottom: -170,
        left: 100,
    },
    {
        bottom: -140,
        left: 220,
    },
    {
        bottom: -145,
        left: 350,
    },
    {
        bottom: -225,
        left: 150,
    },
    {
        bottom: -225,
        left: 280,
    }
  ]

  return(
    <Cloud
      translateX={translateX}
      translateY={translateY}
      scale={scale}
      rotate={rotate}
    >
      <Loop
        durationInFrames={45}
        times={Infinity}
      >
        {snowPosition.map((position, index) => (
          <>
            <Snow
              key={`${index}-1`}
              bottom={position.bottom}
              left={position.left}
              opacity={1}
            />
            <Snow
              key={`${index}-2`}
              bottom={position.bottom - 30}
              left={position.left - 70}
              opacity={0.7}
              slower
            />
          </>
        ))}
      </Loop>
    </Cloud>
  )
}