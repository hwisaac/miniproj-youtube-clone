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

const Container = styled.div<{ focus: boolean; text: string }>`
	width: 100%;
	max-width: 740px;
	display: flex;
	align-items: center;
	justify-content: center;

	form {
		width: 100%;
		display: flex;
		justify-content: right;
		align-items: center;
		margin-right: 50px;
		position: relative;
	}

	.search-box {
		width: calc(100% - 200px);
		max-width: 540px;

		position: absolute;
		right: 108px;
		box-sizing: border-box;

		background-color: #080808;
		font-size: 16px;
		color: white;
		border: 1px solid #343a40;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
		border-right: 0px;
		padding-left: 16px;
		padding-right: ${(props) => (props.text ? '68px' : '28px')};
		height: 40px;
	}

	.search-box:focus {
		width: calc(100% - 170px);
		max-width: 580px;
		padding-left: 46px;
		border: 1px solid royalblue;
	}

	.search-button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #242424;
		border: 1px solid #303030;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		width: 60px;
		height: 40px;
	}

	.inputbox-icon {
		position: absolute;
		padding: 7px;
		background-color: #080808;

		svg {
			background-color: #080808;
			color: gray;
		}
		&:hover {
			border-radius: 0;
			svg {
				color: whitesmoke;
			}
		}
	}

	.keyboard {
		right: ${(props) => (props.text ? '140px' : '110px')};
	}

	.close {
		display: ${(props) => (props.text ? 'flex' : 'none')};
		right: 110px;
	}

	.search-icon {
		display: ${(props) => (props.focus ? 'flex' : 'none')};
		align-items: center;
		padding: 10px;
		position: absolute;
		left: 68px;

		svg {
			color: whitesmoke;
			width: 20px;
			height: 20px;
			z-index: 2;
		}
	}

	.voice {
		border-radius: 20px;
		background-color: #121212;
		margin-left: 8px;
	}

	.voice:hover {
		background-color: #242424;
		border-radius: 20px;
	}

	@media screen and (max-width: 674px) {
		input,
		.keyboard,
		.inputbox-icon {
			display: none;
		}

		form {
			margin-right: 0;
		}

		.search-button {
			display: flex;
			background-color: #000000;
			border: 0px;

			.search {
				display: flex;
			}
			svg {
				display: flex;
				color: white;
			}
		}

		.voice {
			display: flex;
			margin-left: -6px;
			margin-right: 4px;
			border-radius: 0;
			&:hover {
				border-radius: 0;
			}

			svg {
				display: flex;
				color: white;
			}
		}
	}

	/* @media screen and (min-width: 650px) {
		max-width: 700px;
		width: 100%;
		margin: 0 50px;
		box-sizing: border-box;

		form {
			width: 100%;
			display: flex;
			justify-content: right;
			align-items: center;
			position: relative;
			box-sizing: border-box;
		}

		.search-box {
			background-color: #080808;
			width: 70%;
			position: absolute;
			right: 112px;
			box-sizing: border-box;
			max-width: 540px;
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
		}
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
	} */
`;

export { Container, Icon };
