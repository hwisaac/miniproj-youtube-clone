/**
 * 댓글창을 랜더링 합니다. 각각의 댓글은 Comment 컴포넌트로 랜더링합니다.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
// import commentData from '../../../mockup/comment.json';

import { formatDistanceToNowStrict } from 'date-fns';
import Comment from './Comment';

const CommentBox = ({ commentData }) => {
	// const [data, setData] = useState<IComments>(commentData);

	console.log('박스에 들어온 comment data', commentData);

	return (
		<Wrapper>
			<Header>
				<TotalComments>댓글 {commentData.pageInfo.totalResults}개 </TotalComments>
				<Order>정렬 기준</Order>
			</Header>
			<Body>
				{commentData.items.map((item) => (
					<Comment dataItem={item} key={item.id} />
				))}
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
