import styled from 'styled-components';

const Icon = styled.i`
	display: flex;
	align-items: center;
	padding: 10px;

	svg {
		color: white;
		width: 22px;
		height: 22px;
	}

	&:hover {
		background-color: #242424;
		border-radius: 20px;
	}
`;

const SearchIcon = styled.i<{ focus: boolean }>`
	display: ${(props) => (props.focus ? 'flex' : 'none')};
	align-items: center;
	padding: 10px;
	position: absolute;
	left: 70px;

	svg {
		color: whitesmoke;
		width: 20px;
		height: 20px;
	}
`;

const Container = styled.div`
	max-width: 700px;
	width: 100vw;

	form {
		width: 100%;
		display: flex;
		justify-content: right;
		align-items: center;
		position: relative;
	}

	.search-box {
		background-color: #080808;
		width: 70%;
		box-sizing: border-box;
		max-width: 540px;
		min-width: 48px;
		font-size: 16px;
		color: white;
		border: 1px solid #343a40;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		border-right: 0px;
		padding-left: 16px;
		height: 40px;
	}
	.search-box:focus {
		outline: none;
		border: 1px solid royalblue;
		width: calc(70% + 30px);
		padding-left: 46px;
	}

	.search-button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #242424;
		border: 1px solid #303030;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		width: 64px;
		height: 40px;
	}

	.keyboard {
		position: absolute;
		right: 116px;
		padding: 7px;
		border-top-left-radius: 18px;
		border-bottom-left-radius: 18px;
		background-color: #080808;
		svg {
			background-color: #080808;
			color: gray;
		}
		&:hover {
			svg {
				color: whitesmoke;
				border-radius: 0;
			}
		}
		/* @media screen and (min-width: 1350px) {
			right: 50px;
		} */
	}
	.search {
		&:hover {
			background-color: transparent;
			border-radius: 20px;
		}
	}
	.voice {
		border-radius: 20px;
		background-color: #121212;
		margin-left: 10px;
	}
	.voice:hover {
		background-color: #242424;
		border-radius: 20px;
	}
`;

export { Container, Icon, SearchIcon };
