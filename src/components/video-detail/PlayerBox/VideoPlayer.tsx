import React from 'react';
import YouTube from 'react-youtube';

type VideoPlayerProps = {
	videoId: string;
};

function VideoPlayer({ videoId }: VideoPlayerProps) {
	const opts = {
		width: '100%',
		height: '600',
		playerVars: {
			// 플레이어 매개변수 설정
			autoplay: 1,
		},
	};

	return <YouTube videoId={videoId} opts={opts} />;
}

export default VideoPlayer;
