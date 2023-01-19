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

const Detail = () => {
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
		<Layout>
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
				<Recommend />
			</SecondaryBox>
		</Layout>
	);
};

export default Detail;

const Layout = styled.div`
	display: flex;
	top: 60px;
	width: 100%;
	height: auto;
	border: 3px solid black;
	position: relative;
	left: 100px;
	background-color: var(--color-dark);
`;
const PrimaryBox = styled.div`
	background-color: var(--color-dark);
	width: 80vw;
	height: auto;
`;
const SecondaryBox = styled.div`
	background-color: #0e0e0e;
	width: 30vw;
	height: auto;
`;
