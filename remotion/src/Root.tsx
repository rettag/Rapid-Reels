import {Composition} from 'remotion';
import {PumpItUpTemplate} from './PumpItUp-Template';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="PumpItUpTemplate"
				component={PumpItUpTemplate}
				durationInFrames={220}
				fps={30}
				width={390}
				height={844}
			/>
		</>
	);
};
