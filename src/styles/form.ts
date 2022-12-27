import styled from "styled-components";
import { Container } from "./global";

interface iContainerPassword {
	isPasswordVisible?: boolean;
	isConfirmPasswordVisible?: boolean;
}

export const StyledSectionForm = styled.section`
	max-width: calc(var(--width-4) / 2.11);
	margin: calc(var(--gap-1) * 2) auto;
	padding: 0 var(--gap-5);

	gap: var(--gap-1);
`;

export const StyledContainerForm = styled(Container)`
	padding: calc(var(--gap-1) + 0.5rem) var(--gap-5);

	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: var(--gap-4);

	background-color: var(--grey-3);
	border-radius: var(--radius-1);

	& > form {
		gap: var(--gap-4);

		button > svg {
			animation: is-rotating 1s infinite;
		}

		@keyframes is-rotating {
			to {
				transform: rotate(1turn);
			}
		}
	}
`;

export const StyledContainerHeader = styled.div`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const StyledContainerInput = styled.div`
	width: var(--width-1);
	min-height: calc(var(--height-small) * 2);

	gap: var(--gap-6);
`;

export const StyledContainerPassword = styled(
	StyledContainerInput
)<iContainerPassword>`
	position: relative;

	input {
		padding-right: var(--gap-2);
	}

	svg.form__passIcon,
	svg.form__confirmPassIcon {
		position: absolute;
		top: calc(var(--gap-1) + 0.45rem);
		right: var(--gap-6);

		cursor: pointer;

		font-size: var(--gap-4);
	}

	.form__passIcon {
		color: ${props =>
			props.isPasswordVisible ? "var(--grey-0)" : "var(--grey-1)"};
	}

	.form__confirmPassIcon {
		color: ${props =>
			props.isConfirmPasswordVisible ? "var(--grey-0)" : "var(--grey-1)"};
	}
`;

export const StyledContainerSelect = styled(StyledContainerInput)`
	position: relative;

	&::after {
		content: "▼";
		pointer-events: none;

		position: absolute;
		top: calc(var(--gap-1) + 0.25rem);
		right: var(--gap-5);

		color: var(--grey-1);
		font-size: var(--title-size-5);
	}
`;

export const ThemeInput = styled.input`
	width: var(--width-1);
	height: var(--height-medium);
	padding: 0 var(--gap-6);

	background-color: var(--grey-2);
	border: 1px solid var(--grey-2);
	border-radius: var(--radius-1);

	font-weight: var(--font-weight-4);
	font-size: var(--text-size-1);
	color: var(--grey-0);

	&:focus,
	&:active {
		border-color: var(--grey-0);
	}

	&::placeholder {
		font-size: var(--text-size-3);
		color: var(--grey-1);
	}

	&:disabled {
		color: var(--grey-1);
	}

	&:disabled:focus,
	&:disabled:active {
		border-color: var(--grey-2);
		pointer-events: none;
	}

	@media screen and (min-width: 540px) {
		height: var(--height-large);
	}
`;

export const ThemeSelect = styled.select`
	width: var(--width-1);
	height: var(--height-medium);
	padding: 0 var(--gap-6);

	appearance: none;
	background-color: var(--grey-2);
	border: 1px solid var(--grey-2);
	border-radius: var(--radius-1);

	font-weight: var(--font-weight-4);
	font-size: var(--text-size-2);
	color: var(--grey-1);

	cursor: pointer;

	&:focus,
	&:active {
		border-color: var(--grey-0);
		color: var(--grey-0);
	}

	&:disabled:focus,
	&:disabled:active {
		color: var(--grey-1);
		border-color: var(--grey-2);

		pointer-events: none;
	}

	& > option {
		font-size: var(--text-size-1);
		color: var(--grey-0);
	}

	@media screen and (min-width: 540px) {
		height: var(--height-large);
	}
`;

export const ThemeLabelInput = styled.label`
	font-size: var(--text-size-3);
	font-weight: var(--font-weight-4);
	color: var(--grey-0);
`;

export const ThemeLabelError = styled.p`
	font-size: var(--text-size-2);
	text-align: justify;
	color: var(--negative);

	display: inline-flex;
	align-items: center;
	gap: var(--gap-6);
`;
