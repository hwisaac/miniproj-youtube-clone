import styled from 'styled-components';

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
		background-color: #080808;
		width: 540px;
		font-size: 16px;
		color: white;
		border: 1px solid #343a40;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		border-right: 0px;
		padding-left: 16px;
		height: 36px;
	}
	.search-box:focus {
		outline: none;
		border: 1px solid royalblue;
		width: 539px;
	}

	.search-button {
		display: flex;
		align-items: center;
		background-color: #242424;
		border: 1px solid #303030;
		border-left: 0px;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		width: 64px;
		height: 40px;
	}

	.keyboard {
		position: absolute;
		right: 64px;
	}
`;
export { Icon, IconSearchBar, Container };
