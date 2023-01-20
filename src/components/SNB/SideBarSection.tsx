/*
 * 사이드바 섹션 컴포넌트
 * props에 따라 화면에 렌더링 되는 사이드바 섹션이 달라집니다.
 */

import styled, { css } from 'styled-components';

const SideBarSection = ({ toggleSNB, section }) => {
	return (
		<SideBarSectionUL toggleSNB={toggleSNB}>
			{section.map((ele) => (
				<li key={ele.title}>
					{ele.icon}
					<span>{ele.title}</span>
				</li>
			))}
		</SideBarSectionUL>
	);
};

export default SideBarSection;

const SideBarSectionUL = styled.ul<{ toggleSNB: boolean }>`
	${(props) =>
		props.toggleSNB
			? css`
					border-bottom: 1px solid gray;
					margin-bottom: 10px;
					padding-bottom: 10px;
			  `
			: ''}
	li {
		padding: 10px;
		display: flex;
		${(props) =>
			props.toggleSNB
				? css`
						align-items: center;
						padding: 10px;
						padding-right: 30px;
						padding-left: 20px;
						span {
							margin-left: 25px;
						}
						&:hover {
							background-color: #343a40;
							border-radius: 20px;
						}
				  `
				: css`
						flex-direction: column;
						justify-content: center;
						align-items: center;
						span {
							width: 120%;
							text-align: center;
							display: block;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						&:hover {
							background-color: #343a40;
						}
				  `}

		cursor: pointer;
		span {
			color: white;
		}
	}
`;

const NavSection = styled.ul<{ toggleSNB: boolean }>`
	${(props) =>
		props.toggleSNB
			? ''
			: css`
					border-bottom: 1px solid gray;
					margin-bottom: 10px;
					padding-bottom: 10px;
			  `}
	li {
		padding: 10px;
		display: flex;
		${(props) =>
			props.toggleSNB
				? css`
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 50px;
						p {
							width: 120%;
							text-align: center;
							display: block;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						&:hover {
							background-color: #343a40;
						}
				  `
				: css`
						align-items: center;
						padding: 10px;
						padding-right: 30px;
						padding-left: 20px;
						p {
							margin-left: 25px;
						}
						&:hover {
							background-color: #343a40;
							border-radius: 20px;
						}
				  `}

		cursor: pointer;
		p {
			color: white;
		}
	}
`;
