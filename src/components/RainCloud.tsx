import React, { Fragment } from 'react';
import { Cloud } from './Cloud'
import { Rain } from './Rain'
import { Loop } from 'remotion'
import { Thunder } from '../components';

type RainCloudProps = {
  translateX?: number,
  translateY?: number,
  scale?: number,
  rotate?: number,
  withThunder?: boolean,
}

export const RainCloud: React.FC<RainCloudProps> = ({
  translateX = 0,
  translateY = 0,
  scale = 1,
  rotate = 0,
  withThunder,
}) => {
  const rainPosition = [
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
        durationInFrames={30}
        times={Infinity}
      >
        {rainPosition.map((position, index) => (
          <Fragment>
            <Rain
              key={`${index}-1`}
              bottom={position.bottom}
              left={position.left}
              opacity={1}
            />
            <Rain
              key={`${index}-2`}
              bottom={position.bottom - 30}
              left={position.left - 70}
              opacity={0.7}
              slower
            />
          </Fragment>
        ))}
      </Loop>
      {withThunder && (
        <Loop
          durationInFrames={60}
          times={Infinity}
        >
          <Thunder
            bottom={-150}
            left={200}
          />
          <Thunder 
            bottom={-120}
            left={80}
            scale={0.7}
          />
        </Loop>
      )}
    </Cloud>
  )
}