import styled from 'styled-components';
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

const SideBarSection = ({ info }) => {
	return (
		<>
			<NavSection>
				{info.map((ele) => {
					return (
						<li>
							<i>
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
							</i>
							<p>{ele.title}</p>
						</li>
					);
				})}
			</NavSection>
		</>
	);
};

const NavSection = styled.section`
	border-bottom: 1px solid gray;
	padding: 10px;
	li {
		display: flex;
		padding: 10px;
		align-items: center;
		cursor: pointer;
		i {
			padding-right: 25px;
		}
		p {
			color: white;
		}
		&:hover {
			background-color: #343a40;
			border-radius: 20px;
		}
	}
`;

export { SideBarSection };
