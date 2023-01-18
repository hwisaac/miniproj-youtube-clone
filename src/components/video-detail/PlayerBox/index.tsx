/**
 * 동영상을 재생하는 컴포넌트 입니다.
 */
import React from 'react';
import styled from 'styled-components';

const PlayerBox = ({ videoId }) => {
	console.log('playBox 에 들어온 비디오아이디', videoId);
	return (
		<Wrapper>
			<iframe
				title={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
				id="player"
				width="100%"
				height="100%"
				src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
				itemType="text/html"
			></iframe>
		</Wrapper>
	);
};

export default PlayerBox;

const Wrapper = styled.div`
	background-color: var(--color-dark);
	height: 500px;
	margin: 20px 0;
`;
