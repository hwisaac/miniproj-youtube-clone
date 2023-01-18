/**
 * 각 댓글에 해당하는 컴포넌트입니다.
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { formatDistanceToNowStrict } from 'date-fns';
import { FiThumbsUp, FiThumbsDown, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Comment = ({ dataItem }) => {
	const [openSubComment, setOpenSubComment] = useState<boolean>(false);
	const [openAddSubComment, setOpenAddSubComment] = useState<boolean>(false);

	const { authorProfileImageUrl, authorDisplayName, textOriginal, likeCount } =
		dataItem.snippet.topLevelComment.snippet;
	const publishedDate = new Date(dataItem.snippet.topLevelComment.snippet.publishedAt);

	return (
		<Wrapper>
			{/* <AuthorProfileImage src={dataItem.snippet.topLevelComment.snippet.authorProfileImageUrl} /> */}
			<AuthorProfileImage src={authorProfileImageUrl} />

			<CommentContents>
				<div>
					{/* <Author>{dataItem.snippet.topLevelComment.snippet.authorDisplayName}</Author> */}
					<Author>{authorDisplayName}</Author>
					<PublishedAt>{formatDistanceToNowStrict(publishedDate)} ago</PublishedAt>
				</div>
				{/* <TextOriginal>{dataItem.snippet.topLevelComment.snippet.textOriginal}</TextOriginal> */}
				<TextOriginal>{textOriginal}</TextOriginal>
				<Icons>
					<FiThumbsUp size="20" />
					{/* <span>{dataItem.snippet.topLevelComment.snippet.likeCount}</span> */}
					<span>{likeCount}</span>
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
					<span onClick={() => setOpenSubComment(!openSubComment)}>답글 {dataItem.snippet.totalReplyCount}개</span>
				</SubCommentsBtn>
			</CommentContents>
		</Wrapper>
	);
};
export default Comment;

const Wrapper = styled.li`
	display: flex;
	width: 100%;
	background-color: var(--color-dark);
	margin: 10px 0;
`;

const AuthorProfileImage = styled.img`
	border-radius: 50%;
	margin: 0 10px;
	width: 40px;
	height: 40px;
	box-sizing: content-box;
`;

const TextOriginal = styled.span`
	padding: 5px 0;
	display: flex;
	margin-bottom: 8px;
`;

const Author = styled.span`
	font-size: 14px;
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
		display: flex;
		align-items: center;
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
