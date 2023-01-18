import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: var(--color-dark);
	height: 500px;
`;

const PlayerBox = () => {
	return (
		<Wrapper>
			<iframe
				title={'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'}
				id="player"
				width="100%"
				height="100%"
				src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
				itemType="text/html"
			></iframe>
		</Wrapper>
	);
};

export default PlayerBox;
