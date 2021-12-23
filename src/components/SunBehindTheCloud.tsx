import React from "react";
import styled from "styled-components";
import { Sun, Cloud } from '../components'

type SunBehindTheCloudProps = {
  translateX?: number,
  translateY?: number,
}

export const SunBehindTheCloud: React.FC<SunBehindTheCloudProps> = ({
  translateX = 0,
  translateY = 0,
}) => {
  return(
    <Cloud
      translateX={translateX}
      translateY={translateY}
    >
      <PositionSun 
        scale={0.8} 
        notCenter
      />
    </Cloud>
  )
}

const PositionSun = styled(Sun)`
  right: -90px;
  bottom: 0;
  z-index: -1;
`