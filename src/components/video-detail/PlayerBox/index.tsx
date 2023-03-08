/**
 * 동영상을 재생하는 컴포넌트 입니다.
 */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const PlayerBox = ({ videoId }) => {
	return (
		<Wrapper>
			<VideoPlyer
				title={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
				id="player"
				width="100%"
				height="100%"
				src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
				itemType="text/html"
			></VideoPlyer>
		</Wrapper>
	);
};

export default PlayerBox;

const Wrapper = styled.div`
	background-color: var(--color-dark);
	height: 450px;
	margin: 20px 0;

	@media ${(props) => props.theme.lg} {
		height: 400px;
	}
	@media ${(props) => props.theme.md} {
		height: 400px;
	}
	@media ${(props) => props.theme.sm} {
		height: 300px;
	}
`;

const VideoPlyer = styled.iframe``;
