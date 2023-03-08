/*
 *	연관 동영상 렌더링
 * 연관 동영상 API를 호출 후, map을 사용하여 VideoItem 컴포넌트를 렌더링합니다.
 */

import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import youtube from '../../api/youtubeClass';
import VideoItem from './VideoItem';
import { useMutation } from '@tanstack/react-query';

const Recommend = ({ videoId }) => {
	// 패칭된 데이터의 items 를 저장한다.
	const [items, setItems] = useState<IRelatedVideosItem[]>([]);
	const queryClient = useQueryClient();
	const queryData = queryClient.getQueryData<IRelatedVideos>(['related', videoId]);

	useEffect(() => {
		if (queryData) setItems(queryData.items);
	}, [queryData]);

	/**
	 * 데이터를 패칭해옴. 쿼리키['related', videoId] 로 캐싱
	 * isLoading: 패칭하는 동안 true 아니면 false
	 * 옵션{ onSuccess }: 패칭이 성공하면 실행하는 함수
	 */
	const { isLoading } = useQuery<IRelatedVideos>(['related', videoId], () => youtube.related(videoId), {
		onSuccess: (data) => setItems([...data.items]),
	});

	return (
		<Container>
			<VideosUl>
				{!isLoading &&
					items.map((item, index) => {
						return <VideoItem key={item.id.videoId} item={item} />;
					})}
			</VideosUl>
		</Container>
	);
};

export default Recommend;

const Container = styled.div`
	padding: 20px 0px 0px 40px;
`;

const VideosUl = styled.ul``;
