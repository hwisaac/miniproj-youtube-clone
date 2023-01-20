/*
 * 사이드바 섹션 컴포넌트
 * props에 따라 화면에 렌더링 되는 사이드바 섹션이 달라집니다.
 */

import styled from 'styled-components';

const SideBarSection = ({ toggleSNB, section }) => {
	return (
		<SideBarSectionUL toggleSNB={toggleSNB}>
			{section.map((ele) => (
				<li>
					{ele.icon}
					<span>{ele.title}</span>
				</li>
			))}
		</SideBarSectionUL>
	);
};

export default SideBarSection;

const SideBarSectionUL = styled.ul<{ toggleSNB: boolean }>`
	border-bottom: 1px solid gray;
	padding: 15px 0;
	li {
		display: flex;
		align-items: center;
		justify-content: ${(props) => (props.toggleSNB ? 'flex-start' : 'center')};
		height: 50px;
		&:hover {
			cursor: pointer;
			background-color: #343a40;
		}
		svg {
			margin: 0 30px;
		}
		span {
			display: ${(props) => (props.toggleSNB ? 'inline' : 'none')};
		}
	}
`;
