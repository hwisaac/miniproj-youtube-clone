import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: orange;
	height: 400px;
`;

const PlayerBox = () => {
	return (
		<Wrapper>
			<iframe
				title={'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'}
				id="player"
				width="640"
				height="360"
				src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
				itemType="text/html"
			></iframe>
		</Wrapper>
	);
};

export default PlayerBox;
