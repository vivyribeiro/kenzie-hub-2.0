import styled from "styled-components";
import { StyledContainerHeader } from "./form";

export const StyledOverlayModal = styled.section`
	width: 100vw;
	height: 100vh;
	padding: 0 var(--gap-5);

	background-color: var(--overlay-shadow);
	transition: ease-in-out 0.2s;

	position: fixed;
	inset: 0;
	z-index: 100;

	align-items: center;

	.appear {
		animation-name: "appear";
		animation-timing-function: ease-in;
		animation-duration: 0.8s;
	}

	.disappear {
		animation-name: "disappear";
		animation-timing-function: ease-out;
		animation-duration: 0.5s;
	}

	@media screen and (min-width: 540px) {
		padding: unset;
	}
`;

export const StyledModal = styled.div`
	width: var(--width-1);
	max-width: calc(var(--width-4) / 2.65);
	height: calc(var(--width-4) / 2.7);

	position: relative;
	top: calc(var(--gap-1) * 2.5);

	background-color: var(--grey-3);
	border-radius: var(--radius-1);

	@keyframes appear {
		0% {
			transform: translateY(0%, 0%);
			opacity: 0;
		}
		100% {
			transform: translateY(0%, 1%);
			opacity: 1;
		}
	}

	@keyframes disappear {
		0% {
			opacity: 1;
			transform: translate(0%, 0%);
		}

		100% {
			opacity: 0;
			transform: translate(0%, 1%);
		}
	}

	@media screen and (min-width: 540px) {
		max-width: calc(var(--width-4) / 2.1);
		height: calc(var(--width-4) / 2.28);
	}
`;

export const StyledModalHeader = styled(StyledContainerHeader)`
	height: var(--height-large);
	padding: var(--gap-5);

	border-bottom: 1px solid var(--grey-2);

	justify-content: space-between;
`;
