/*
 * 사이드바 섹션 컴포넌트
 * props에 따라 화면에 렌더링 되는 사이드바 섹션이 달라집니다.
 */

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
// import { NavSection } from './SideBarStyle';

const SideBarSection = ({ info, show, isMain }) => {
	return (
		<>
			{/* <NavSection show={show} isMain={isMain}>
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
			</NavSection> */}
		</>
	);
};

export { SideBarSection };
