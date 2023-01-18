import styled, { css } from 'styled-components';
import { AiFillHome, AiFillLike } from 'react-icons/ai';
import {
	MdOutlineExplore,
	MdSubscriptions,
	MdVideoLibrary,
	MdHistory,
	MdWatchLater,
	MdSettings,
	MdFlag,
} from 'react-icons/md';

const SideBarSection = ({ info, show }) => {
	return (
		<>
			<NavSection show={show}>
				{info.map((ele) => {
					return (
						<li key={ele.title}>
							{ele.icon === 'AiFillHome' ? (
								<AiFillHome color="white" size={24} />
							) : ele.icon === 'MdOutlineExplore' ? (
								<MdOutlineExplore color="white" size={24} />
							) : ele.icon === 'MdSubscriptions' ? (
								<MdSubscriptions color="white" size={24} />
							) : ele.icon === 'MdVideoLibrary' ? (
								<MdVideoLibrary color="white" size={24} />
							) : ele.icon === 'MdHistory' ? (
								<MdHistory color="white" size={24} />
							) : ele.icon === 'MdWatchLater' ? (
								<MdWatchLater color="white" size={24} />
							) : ele.icon === 'AiFillLike' ? (
								<AiFillLike color="white" size={24} />
							) : ele.icon === 'MdSettings' ? (
								<MdSettings color="white" size={24} />
							) : ele.icon === 'MdFlag' ? (
								<MdFlag color="white" size={24} />
							) : (
								''
							)}
							<p>{ele.title}</p>
						</li>
					);
				})}
			</NavSection>
		</>
	);
};

const NavSection = styled.section<{ show: boolean }>`
	${(props) =>
		props.show
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
			props.show
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

	@media screen and (max-width: 1200px) {
		border-bottom: 0px;
		margin-bottom: 0px;
		padding-bottom: 0px;
		li {
			padding: 10px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 50px;
			p {
				width: 120%;
				display: block;
				text-align: center;

				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				margin: 0;
			}
			&:hover {
				background-color: #343a40;
			}
		}
	}
`;

export { SideBarSection };
