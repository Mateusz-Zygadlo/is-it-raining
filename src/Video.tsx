import { Composition } from 'remotion'
import { IsItRaining } from './components'
import { VIDEO_CONFIG } from './config';
import './reset.css'

export const RemotionVideo: React.FC = () => {
	const { 
		FPS, 
		VIDEO_DURATION_IN_FRAMES,
		VIDEO_WIDTH,
		VIDEO_HEIGHT,
		VIDEO_ID	
	} = VIDEO_CONFIG

	return (
		<Composition
			id={VIDEO_ID}
			component={IsItRaining}
			durationInFrames={VIDEO_DURATION_IN_FRAMES}
			fps={FPS}
			width={VIDEO_WIDTH}
			height={VIDEO_HEIGHT}
		/>
	)
}