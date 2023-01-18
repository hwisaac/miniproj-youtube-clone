import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardVoice, MdKeyboard, MdClose } from 'react-icons/md';
import { Icon, Container } from './SearchBar';

const SearchBar = () => {
	const navigate = useNavigate();
	const [inputText, setInputText] = useState('');
	const [inputFocus, setInputFocus] = useState(false);

	const handleSubmit = (event: any) => {
		navigate(`/search?q=${inputText}`);
		event.preventDefault();
	};

	const handleInputText = (event: any) => {
		setInputText(event.target.value);
	};

	const handleInputFocus = (event: any) => {
		setInputFocus(true);
	};

	const handleInputBlur = (event: any) => {
		setInputFocus(false);
	};

	const handleDeleteText = () => {
		setInputText('');
	};

	return (
		<Container focus={inputFocus} text={inputText}>
			<form onSubmit={handleSubmit}>
				<Icon className="search-icon">
					<AiOutlineSearch />
				</Icon>
				<input
					type="text"
					id="search-bar"
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
				<button type="submit" id="search-bar" className="search-button">
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
