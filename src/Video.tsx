import React, { useState, useEffect } from 'react';
import { Composition, continueRender, delayRender } from 'remotion'
import { 
	IsItRaining,
	fetchWeatherDataForCity 
} from './components'
import { VIDEO_CONFIG, APP_CONFIG } from './config';
import { WeatherState } from './common';
import './reset.css'

export const RemotionVideo: React.FC = () => {
	const [temperature, setTemperature] = useState<number>()
	const [weatherState, setWeatherState] = useState<WeatherState>()
	const [handle] = useState(() => delayRender())
	const [isReadyToRender, setIsReadyToRender] = useState<boolean>(false)
	const { 
		FPS, 
		VIDEO_DURATION_IN_FRAMES,
		VIDEO_WIDTH,
		VIDEO_HEIGHT,
		VIDEO_ID	
	} = VIDEO_CONFIG
	const { CITY } = APP_CONFIG

	const fetchWeatherData = async () => {
		const { temperature, weatherState } = await fetchWeatherDataForCity(CITY)

		setTemperature(temperature)
		setWeatherState(weatherState)
		setIsReadyToRender(true)
		continueRender(handle)
	}

	useEffect(() => {
		fetchWeatherData()
	}, [])

	return isReadyToRender ? (
		<Composition
			id={VIDEO_ID}
			component={IsItRaining}
			durationInFrames={VIDEO_DURATION_IN_FRAMES}
			fps={FPS}
			width={VIDEO_WIDTH}
			height={VIDEO_HEIGHT}
			defaultProps={{
				temperature: temperature as number,
				weatherState: weatherState as WeatherState,
			}}
		/>
	) : null
}