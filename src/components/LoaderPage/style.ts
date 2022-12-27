import styled from "styled-components";

const StyledLoaderContainer = styled.div`
	width: 100vw;
	height: 100vh;

	position: fixed;
	inset: 0;

	justify-content: center;
	align-items: center;

	.loader {
		height: calc(var(--height-large) * 1.25);
		width: calc(var(--height-large) * 1.25);

		border: var(--gap-6) solid var(--primary-negative);
		border-radius: calc(var(--width-1) / 2);
		border-top-color: var(--primary-50);
		animation: is-rotating 1s infinite;
	}

	@keyframes is-rotating {
		to {
			transform: rotate(1turn);
		}
	}
`;

export default StyledLoaderContainer;
