import React, { Fragment } from "react"
import { Sequence, useVideoConfig } from "remotion"
import { WeatherState } from "../common";
import { Intro, Result } from "../sequences";

export const IsItRaining = () => {
  const { fps } = useVideoConfig();

  return(
    <Fragment>
      <Sequence
        from={0}
        durationInFrames={3 * fps}
        name="Intro"
      >
        <Intro />
      </Sequence>
      <Sequence
        from={3 * fps}
        durationInFrames={4 * fps}
        name="Result"
      >
        <Result 
          temperature={-10}
          weatherState={WeatherState.Raining}
        />
      </Sequence>
    </Fragment>
  )
}