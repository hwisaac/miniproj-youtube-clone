import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardVoice, MdKeyboard } from 'react-icons/md';
import { Icon, IconSearchBar, Container } from './SearchBar';

const SearchBar = () => {
	const navigate = useNavigate();
	const [inputText, setInputText] = useState('');

	const handleSubmit = (event: any) => {
		navigate(`/search?q=${inputText}`);
		event.preventDefault();
	};

	const handleInputText = (event: any) => {
		setInputText(event.target.value);
	};

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="search-bar"
					className="search-box"
					value={inputText}
					placeholder="검색"
					onChange={handleInputText}
				/>
				<IconSearchBar className="keyboard">
					<MdKeyboard />
				</IconSearchBar>
				<button type="submit" id="search-bar" className="search-button">
					<IconSearchBar>
						<AiOutlineSearch />
					</IconSearchBar>
				</button>
			</form>
			<Icon className="voice">
				<MdKeyboardVoice />
			</Icon>
		</Container>
	);
};

export default SearchBar;
