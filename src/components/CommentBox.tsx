import React, { useState } from 'react';
import styled from 'styled-components';
import commentData from '../mockup/comment.json';
import { FiThumbsUp, FiThumbsDown, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const CommentBox = () => {
	const [data, setData] = useState<IComments>(commentData);

	return (
		<Wrapper>
			<Header>
				<TotalComments>댓글 : </TotalComments>
				<Order>정렬 기준</Order>
			</Header>
			<Body>
				{/* {data.items.map((item) => (
					<Comment key={item.id}>{item.snippet.topLevelComment.snippet.textDisplay}</Comment>
				))} */}

				<Comment>
					<AuthorProfileImage src={data.items[0].snippet.topLevelComment.snippet.authorProfileImageUrl} />

					<CommentContents>
						<div>
							<Author>작성자: {data.items[0].snippet.topLevelComment.snippet.authorDisplayName}</Author>
							<PublishedAt>작성: {data.items[0].snippet.topLevelComment.snippet.publishedAt} </PublishedAt>
						</div>
						<TextOriginal>원본코멘트:{data.items[10].snippet.topLevelComment.snippet.textOriginal}</TextOriginal>
						<Icons>
							<FiThumbsUp size="20" />
							{data.items[0].snippet.topLevelComment.snippet.likeCount}
							<FiThumbsDown size="20" />
							<ReplyBtn>답글</ReplyBtn>
						</Icons>
						<SubCommentsBtn>
							<FiChevronDown /> <FiChevronUp />
							답글 {data.items[0].snippet.totalReplyCount}개
						</SubCommentsBtn>
					</CommentContents>
				</Comment>
			</Body>
		</Wrapper>
	);
};

export default CommentBox;

const Wrapper = styled.div`
	margin-top: 50px;
	background-color: whitesmoke;
	height: 600px;
`;

const Header = styled.div`
	display: flex;
	border: 1px solid red;
`;
const TotalComments = styled.div`
	background-color: red;
`;
const Order = styled.div`
	background-color: green;
`;

const Body = styled.ul`
	display: flex;
	border: 1px solid red;
`;

const Comment = styled.li`
	display: flex;
	border: 3px solid yellow;
`;
const TextDisplay = styled.span`
	display: flex;
`;
const TextOriginal = styled.span`
	display: flex;
`;

const Author = styled.span``;
const AuthorProfileImage = styled.img`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	box-sizing: content-box;
`;
const CommentContents = styled.div`
	display: block;
	border: 3px dotted green;
`;
const Icons = styled.div`
	display: flex;
	align-items: center;
`;
const PublishedAt = styled.span``;

const ReplyBtn = styled.button`
	border: none;
	background-color: white;
	padding: 5px 10px;
	border-radius: 30px;
	cursor: pointer;
	&:hover {
		background-color: #ccc;
	}
`;

const SubCommentsBtn = styled.div`
	color: #065fd4;
`;
