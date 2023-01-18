import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardVoice, MdKeyboard, MdClose } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import { Icon, Container } from './SearchBar';
const SearchBar = () => {
	const navigate = useNavigate();
	const [inputText, setInputText] = useState('');
	const [inputFocus, setInputFocus] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const handleSubmit = (event: any) => {
		navigate(`/search?q=${inputText}`);
		event.preventDefault();
	};

	const handleInputText = (event: any) => {
		setInputText(event.target.value);
	};

	const handleInputFocus = () => {
		setInputFocus(true);
	};

	const handleInputBlur = () => {
		setInputFocus(false);
	};

	const handleDeleteText = () => {
		setInputText('');
	};

	const handleIsClicked = () => {
		isClicked ? setIsClicked(false) : setIsClicked(true);
	};

	return (
		<Container focus={inputFocus} text={inputText} searchClicked={isClicked}>
			<form onSubmit={handleSubmit}>
				<Icon className="back" onClick={handleIsClicked}>
					<BiArrowBack />
				</Icon>
				<Icon className="search-icon">
					<AiOutlineSearch />
				</Icon>
				<input
					type="text"
					className="search-box"
					value={inputText}
					placeholder="검색"
					onChange={handleInputText}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
				/>
				<Icon className="inputbox-icon keyboard">
					<MdKeyboard />
				</Icon>
				<Icon className="inputbox-icon close" onClick={handleDeleteText}>
					<MdClose />
				</Icon>
				<button className="search-button" onClick={handleIsClicked}>
					<Icon className="search">
						<AiOutlineSearch />
					</Icon>
				</button>
				<Icon className="voice">
					<MdKeyboardVoice />
				</Icon>
			</form>
		</Container>
	);
};

export default SearchBar;
