import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

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
				<button type="submit" id="search-bar" className="search-button">
					<AiOutlineSearch color="white" size={22} />
				</button>
			</form>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	align-items: center;

	form {
		display: flex;
		align-items: center;
	}

	.search-box {
		background-color: #212529;
		width: 540px;
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
		border: 1px solid blue;
	}

	.search-button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #343a40;
		border: 1px solid #343a40;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		width: 64px;
		height: 40px;
	}
`;

export default SearchBar;
