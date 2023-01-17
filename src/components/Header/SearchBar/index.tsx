import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardVoice, MdKeyboard } from 'react-icons/md';
import { Icon, Container } from './SearchBar';

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
				<Icon className="keyboard">
					<MdKeyboard />
				</Icon>
				<button type="submit" id="search-bar" className="search-button">
					<Icon className="search">
						<AiOutlineSearch />
					</Icon>
				</button>
			</form>
			<Icon className="voice">
				<MdKeyboardVoice />
			</Icon>
		</Container>
	);
};

export default SearchBar;
