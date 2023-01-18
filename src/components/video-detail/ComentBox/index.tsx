import React, { useState } from 'react';
import styled from 'styled-components';
// import commentDataJson from '../../../mockup/comment.json';
import { FiThumbsUp, FiThumbsDown, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const CommentBox = ({ commentData }) => {
	const [data, setData] = useState<IComments>(commentData);
	const [openSubComment, setOpenSubComment] = useState<boolean>(false);
	const [openAddSubComment, setOpenAddSubComment] = useState<boolean>(false);
	console.log('comment data', commentData);
	// console.log('commentjson data', commentDataJson);
	return (
		<Wrapper>
			<Header>
				<TotalComments>댓글 {data.pageInfo.totalResults}개 </TotalComments>
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
							<Author>{data.items[0].snippet.topLevelComment.snippet.authorDisplayName}</Author>
							<PublishedAt>{data.items[0].snippet.topLevelComment.snippet.publishedAt} </PublishedAt>
						</div>
						<TextOriginal>{data.items[10].snippet.topLevelComment.snippet.textOriginal}</TextOriginal>
						<Icons>
							<FiThumbsUp size="20" />
							<span>{data.items[0].snippet.topLevelComment.snippet.likeCount}</span>
							<FiThumbsDown size="20" />
							<ReplyBtn onClick={() => setOpenAddSubComment(!openAddSubComment)}>답글</ReplyBtn>
						</Icons>
						{openAddSubComment && (
							<AddSubComment>
								<AddSubCommentInput placeholder="답글 추가..." />
								<div>
									<Btn onClick={(event) => event.preventDefault()}>취소</Btn>
									<Btn onClick={(event) => event.preventDefault()}>답글</Btn>
								</div>
							</AddSubComment>
						)}

						<SubCommentsBtn>
							{openSubComment ? (
								<FiChevronUp size="20" onClick={() => setOpenSubComment(!openSubComment)} />
							) : (
								<FiChevronDown size="20" onClick={() => setOpenSubComment(!openSubComment)} />
							)}
							<span onClick={() => setOpenSubComment(!openSubComment)}>
								답글 {data.items[0].snippet.totalReplyCount}개
							</span>
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
`;

const Comment = styled.li`
	display: flex;
	width: 100%;
`;
const TextDisplay = styled.span`
	display: flex;
`;
const TextOriginal = styled.span`
	padding: 5px 0;
	display: flex;
	margin-bottom: 8px;
`;

const Author = styled.span`
	font-size: 14px;
`;
const AuthorProfileImage = styled.img`
	border-radius: 50%;
	margin: 0 10px;
	width: 40px;
	height: 40px;
	box-sizing: content-box;
`;
const CommentContents = styled.div`
	display: block;
	width: 100%;
`;
const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	span {
		position: relative;
		left: -3px;
		font-size: 12px;
		color: #aaa;
	}
`;
const PublishedAt = styled.span`
	margin-left: 10px;
	color: #8e8e8e;
	font-size: 14px;
`;

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
	margin-top: 5px;
	color: #065fd4;
	display: flex;
	align-items: center;
	svg {
		padding: 8px;
	}
	svg:hover {
		background-color: #263850;
		border-radius: 50%;
		cursor: pointer;
	}
	span {
		height: 20px;
		padding: 5px 10px;
		cursor: pointer;
		&:hover {
			background-color: #263850;
			border-radius: 30px;
		}
	}
	/* &:hover {
		background-color: #263850;
	} */
`;

const AddSubComment = styled.form`
	width: 100%;
	margin: 8px 0;
	div {
		margin-top: 10px;
		display: flex;
		justify-content: flex-end;
	}
`;

const AddSubCommentInput = styled.input.attrs({ type: 'text' })`
	border: none;
	width: 100%;
	height: 20px;
	color: white;

	background-color: var(--color-dark);
	border-bottom: 2px solid #717171;

	&:focus {
		border-bottom: 2px solid white;
	}
`;

const Btn = styled.button`
	border: none;
	background-color: #313030;
	color: white;
	font-size: 16px;
	margin: 0 3px;
	border-radius: 20px;
	padding: 8px 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;

	cursor: pointer;
	&:hover {
		background-color: #484949;
	}
`;
