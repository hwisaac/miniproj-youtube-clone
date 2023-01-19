/**
 * 댓글창을 랜더링 합니다. 각각의 댓글은 Comment 컴포넌트로 랜더링합니다.
 */

import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components';
import youtube from '../../../api/youtubeClass';
import Comment from './Comment';
import ReactLoading from 'react-loading';

const CommentBox = ({ videoId, commentCount, commentData }) => {
	const [commentsPack, setCommentsPack] = useState(commentData?.items);
	const [nextPageToken, setNextPageToken] = useState<string>(commentData?.nextPageToken);

	// 리패칭 뮤테이션
	const { isLoading, mutate: fetchComments } = useMutation({
		mutationFn: () => youtube.commentByToken({ pageToken: nextPageToken, videoId }),
		onSuccess: (data: IComments) => {
			setNextPageToken(data.nextPageToken);
			setCommentsPack((prev) => [...prev, ...data.items]);
		},
		retry: false,
	});

	const handleMoreBtn = () => {
		if (isLoading) return;
		fetchComments();
	};
	return (
		<Wrapper>
			{isLoading && (
				<Loader>
					<ReactLoading type="spin" color="#fff" />
				</Loader>
			)}
			<Header>
				<TotalComments>댓글 {commentCount}개 </TotalComments>
				<Order>정렬 기준</Order>
			</Header>
			<Body>
				{commentsPack.map((item) => (
					<Comment dataItem={item} key={item.id} />
				))}
				<MoreBtn onClick={handleMoreBtn}>댓글 더 보기</MoreBtn>
			</Body>
		</Wrapper>
	);
};

export default CommentBox;

const Wrapper = styled.div`
	margin-top: 50px;
	background-color: var(--color-dark);
	color: white;
	height: 600px;
`;

const Header = styled.div`
	display: flex;
	gap: 10px;
	font-size: 18px;
	margin: 20px 0;
`;
const TotalComments = styled.div`
	color: white;
`;
const Order = styled.div``;

const Body = styled.ul`
	display: flex;
	flex-direction: column;
`;

const MoreBtn = styled.button`
	align-self: center;
	border: none;
	background-color: #333;
	color: white;
	border-radius: 15px;
	padding: 0 20px;
	height: 30px;
	width: auto;
	margin: 50px 0;
	margin-bottom: 100px;
	cursor: pointer;
	&:hover {
		background-color: #555;
	}
`;

const Loader = styled.div`
	position: fixed;
	left: 50vw;
	top: 50vh;
`;
