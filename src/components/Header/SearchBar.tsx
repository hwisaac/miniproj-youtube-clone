import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdKeyboardVoice, MdKeyboard } from 'react-icons/md';

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

const Icon = styled.i`
	display: flex;
	align-items: center;
	padding: 10px;
	color: white;

	svg {
		color: white;
		width: 20px;
		height: 20px;
	}

	&:hover {
		background-color: #343a40;
		border-radius: 20px;
	}
`;

const IconSearchBar = styled(Icon)`
	svg {
		color: gray;
	}

	&:hover {
		background-color: transparent;
		border-radius: 20px;
		svg {
			color: whitesmoke;
		}
	}
`;

const Container = styled.div`
	display: flex;
	align-items: center;

	form {
		display: flex;
		align-items: center;
		position: relative;
	}

	.search-box {
		background-color: #121212;
		width: 100px;
		font-size: 16px;
		color: white;
		border: 1px solid #343a40;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		padding-left: 16px;
		height: 36px;
	}
	.search-box:focus {
		outline: none;
		border: 1px solid royalblue;
	}

	.search-button {
		background-color: #303030;
		border: 1px solid #343a40;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		width: 64px;
		height: 40px;
	}

	.keyboard {
		position: absolute;
	}
`;

export default SearchBar;
export { Icon };
