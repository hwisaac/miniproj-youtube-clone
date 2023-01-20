/**
 * 영상 상세정보 페이지의 진입점입니다.
 * PrimaryBox : 왼쪽 컬럼 (영상 상세정보 표시)
 * SecondaryBox: 오른쪽 컬럼 (관련 동영상)
 */

import React from 'react';
import styled from 'styled-components';
import PlayerBox from '../../components/video-detail/PlayerBox';
import VideoDetailBox from '../../components/video-detail/VideoDetailBox';
import CommentBox from '../../components/video-detail/CommentBox';
import Recommend from '../../components/Recommend';
import youtube from '../../api/youtubeClass';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const Detail = ({ setToggleSNB }) => {
	// URL주소에서 videoId 가져오기
	const { videoId } = useParams();

	// useQuery: [영상 상세정보] fetching
	const { isLoading: isLoadingVdeoInfoData, data: videoInfoData } = useQuery<IVideo>(['video', videoId], () =>
		youtube.video(videoId)
	);
	// useQuery: [댓글] fetching
	// useQuery(이름, asyncFnt, 옵션)
	const { isLoading: isLoadingComment, data: commentData } = useQuery<IComments>(['comment', videoId], () =>
		youtube.comment(videoId)
	);
	return (
		<Wrapper>
			<PrimaryBox>
				<PlayerBox videoId={videoId} />
				{!isLoadingVdeoInfoData && <VideoDetailBox videoInfoData={videoInfoData} />}
				{!isLoadingVdeoInfoData && !isLoadingComment && (
					<CommentBox
						commentData={commentData}
						videoId={videoId}
						commentCount={videoInfoData.items[0].statistics.commentCount}
					/>
				)}
			</PrimaryBox>
			<SecondaryBox>
				<Recommend videoId={videoId} />
			</SecondaryBox>
		</Wrapper>
	);
};

export default Detail;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	top: 60px;
	margin: 0 20px;
	position: relative;
	background-color: var(--color-dark);
	@media ${(prop) => prop.theme.md} {
		flex-direction: column;
		align-items: center;
	}
	@media ${(prop) => prop.theme.sm} {
	}
`;
const PrimaryBox = styled.div`
	display: flex;
	flex-direction: column;
	background-color: var(--color-dark);
	width: 60vw;
	max-width: 1100px;
	height: auto;
	box-sizing: border-box;
	@media ${(prop) => prop.theme.md} {
		width: 100%;
		padding: 0 10px;
	}
`;
const SecondaryBox = styled.div`
	background-color: #0e0e0e;
	max-width: 500px;
	width: 25vw;
	height: auto;
	@media ${(prop) => prop.theme.md} {
		width: 100%;
	}
`;

const TestBox = styled.div`
	height: 2000px;
`;
