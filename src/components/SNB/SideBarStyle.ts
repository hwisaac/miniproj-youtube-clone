import styled, { css } from 'styled-components';

export const NavSection = styled.section<{ isMain: boolean; show: boolean }>`
	${(props) =>
		props.show
			? ''
			: css`
					border-bottom: 1px solid gray;
					margin-bottom: 10px;
					padding-bottom: 10px;
			  `}
	li {
		padding: 10px;
		display: flex;
		${(props) =>
			props.isMain
				? props.show
					? css`
							flex-direction: column;
							justify-content: center;
							align-items: center;
							width: 50px;
							p {
								width: 120%;
								text-align: center;
								display: block;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}
							&:hover {
								background-color: #343a40;
							}
					  `
					: css`
							align-items: center;
							padding: 10px;
							padding-right: 30px;
							padding-left: 20px;
							p {
								margin-left: 25px;
							}
							&:hover {
								background-color: #343a40;
								border-radius: 20px;
							}
					  `
				: css`
						align-items: center;
						padding: 10px;
						padding-right: 30px;
						padding-left: 20px;
						p {
							margin-left: 25px;
						}
						&:hover {
							background-color: #343a40;
							border-radius: 20px;
						}
				  `}

		cursor: pointer;
		p {
			color: white;
		}
	}
`;

export const Container = styled.nav<{ isMain: boolean; show: boolean }>`
	background-color: #212529;
	position: fixed;
	${(props) =>
		props.isMain
			? css`
					padding-top: 10px;
					top: 60px;
					height: 100%;
					overflow: auto;
					padding-right: 10px;
			  `
			: props.show
			? css`
					padding-top: 10px;
					top: 60px;
					height: 100%;
					overflow: auto;
					padding-right: 10px;
			  `
			: css`
					display: none;
			  `}
	z-index: 1;
`;
