import {spring} from 'remotion';
import { staticFile } from "remotion";
import React from 'react';
import { COLORS } from '../public/Colors';
//import { loadFont } from "@remotion/google-fonts/Roboto";

import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	Video,
	Series,
	Audio,
	Img,
} from 'remotion';

//const { fontFamily } = loadFont();

export const PumpItUpTemplate: React.FC = () => {

	const video1= staticFile(`video-1.mp4`);
	const video2= staticFile(`video-2.mp4`);
	const video3= staticFile(`video-3.mp4`);

	const dealDog = staticFile('dealdogicon.png');
	const music = staticFile('pumpitup.mp3');

	const orange = `rgb(${237}, ${148}, ${66})`
	const red = `rgb(${255}, ${102}, ${115})`

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	
	// Bass Effect
	const scale = spring({
	frame: frame,
	fps: fps,
	config: {
		mass: 0.5,
		damping: 0
	},
	from: 1,
	to: 1.5,
	});

	// Fast, Safe, Fun Style
	const textStyle = {
		background: `linear-gradient(to right, ${COLORS.color1}, ${COLORS.color2})`,
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '10vmin',
	}

	return (
		<>
			<AbsoluteFill style={{fontWeight: 'bold', color: 'white'}}> {/* //fontFamily: fontFamily */}
				{/* AUDIO */}
				<Audio src={music} />

				<Series>
					{/* FAST */}
					<Series.Sequence durationInFrames={20}>
						<div style={textStyle}>
							<div style={{transform: `scale(${scale})`}}>FAST</div>
						</div>
					</Series.Sequence>

					{/* VIDEO FAST */}
					<Series.Sequence durationInFrames={20}>
						<Video src={video1} startFrom={100} endAt={150}/>
					</Series.Sequence>

					{/* SAFE */}
					<Series.Sequence durationInFrames={20}>
						<div style={textStyle}>
							<div style={{transform: `scale(${scale})`}}>SAFE</div>
						</div>
					</Series.Sequence>

					{/* VIDEO SAFE */}
					<Series.Sequence durationInFrames={20}>
						<Video src={video2} startFrom={170} endAt={300}/>
					</Series.Sequence>
					
					{/* FUN */}
					<Series.Sequence durationInFrames={20}>
						<div style={textStyle}>
							<div style={{transform: `scale(${scale})`}}>FUN</div>
						</div>
					</Series.Sequence>

					{/* VIDEO FUN */}
					<Series.Sequence durationInFrames={20}>
						<Video src={video3} startFrom={0} endAt={300}/>
					</Series.Sequence>

					{/* NEED TICKETS? */}
					<Series.Sequence durationInFrames={20}>
						<div
							style={{
								background: `linear-gradient(to right, ${COLORS.color1}, ${COLORS.color2})`,
								height: '100%',
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								textAlign: 'center',
								fontSize: '10vmin',
							}}
						>
							NEED TICKETS?
						</div>
					</Series.Sequence>
					
					{/* DEALDOG LOGO */}
					<Series.Sequence durationInFrames={80}>
						<div
							style={{
								background: `linear-gradient(to right, ${COLORS.color1}, ${COLORS.color2})`,
								height: '100%',
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '5vmin',
							}}
						>
							<Img src={dealDog} style={{transform: `scale(${scale})`, width: '40%', height: '20%'}} />
						</div>
					</Series.Sequence>
				</Series>

			</AbsoluteFill>
		</>
	);
};
