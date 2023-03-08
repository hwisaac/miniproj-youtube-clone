import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import { getDuration } from '../../util/getDuration';

const VideoThumbnail = ({ videoBrief }) => {
	return (
		<Wrap className="video-thumbnail">
			<img className="thumbnail" src={videoBrief.thumbnail} alt={videoBrief.title} />
			<div className="duration">
				<span>{videoBrief.duration}</span>
			</div>
		</Wrap>
	);
};

const Wrap = styled.div`
	width: 100%;
	max-height: 62%;
	overflow: hidden;
	object-position: bottom;
	position: relative;

	img {
		width: 100%;
		height: 100%;
	}
	.duration {
		padding: 3px 4px;
		background-color: #000c;
		position: absolute;
		bottom: 2px;
		right: 2px;
		font-weight: 600;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default VideoThumbnail;
