import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardVoice, MdKeyboard } from 'react-icons/md';
import { Icon, Container, SearchIcon } from './SearchBar';

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

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<SearchIcon focus={inputFocus}>
					<AiOutlineSearch />
				</SearchIcon>
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
				<Icon className="keyboard">
					<MdKeyboard />
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
