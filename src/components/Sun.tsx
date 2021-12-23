import React from 'react';
import styled from 'styled-components'
import { Img, useCurrentFrame, interpolate} from 'remotion'
import { Images } from '../assets'

type SunProps = {
  scale?: number,
  className?: string,
  translateX?: number,
  translateY?: number,
}
type isNotCenter = {
  notCenter?: boolean,
}

export const Sun: React.FC<SunProps & isNotCenter> = ({
  scale = 1,
  className,
  translateX = 0,
  translateY = 0,
  notCenter
}) => {
  const frame = useCurrentFrame()
  const animatedRotate = interpolate(
    frame,
    [0, 120],
    [0, 45]
  )

  return(
    <Container
      notCenter={notCenter}
      className={className}
      style={{
        transform: `translate(${translateX}px, (${translateY}px))`,
      }}
    >
      <BaseSun 
        src={Images.Sun} 
        style={{
          transform: `scale(${scale}) rotate(${animatedRotate}deg)`
        }}
      /> 
    </Container>
  )
}

const BaseSun = styled(Img)`
  width: 374px;
  height: 374px;
`

const Container = styled.div<isNotCenter>`
  position: absolute; 
  top: ${props => !props.notCenter ? '300px' : null};
`