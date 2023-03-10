/**
 * 동영상을 재생하는 컴포넌트 입니다.
 */
import styled from 'styled-components';
import VideoPlayer from './VideoPlayer';

const PlayerBox = ({ videoId }) => {
	console.log(videoId);
	return (
		<Wrapper>
			<VideoPlayer videoId={videoId} />
		</Wrapper>
	);
};

export default PlayerBox;

const Wrapper = styled.div`
	background-color: var(--color-dark);
	height: 600px;
	margin: 20px 0;

	@media ${(props) => props.theme.lg} {
		/* height: 400px; */
	}
	@media ${(props) => props.theme.md} {
		/* height: 400px; */
	}
	@media ${(props) => props.theme.sm} {
		/* height: 300px; */
	}
`;

// const VideoPlyer = styled.iframe``;
