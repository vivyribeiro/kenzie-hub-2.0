import styled, { css } from "styled-components";

interface iButtonProps {
	btnSize?: string;
	btnStyle?: string;
}

export const ThemeButton = styled.button<iButtonProps>`
	color: var(--white);

	border-radius: var(--radius-1);

	${props => {
		switch (props.btnSize) {
			case "md1":
				return css`
					width: calc(var(--height-large) * 3.4);
					height: var(--height-large);

					@media screen and (min-width: 520px) {
						width: calc(var(--height-large) * 4.25);
					}
				`;

			case "md2":
				return css`
					width: calc(var(--height-small) * 3.05);
					height: var(--height-large);
				`;

			case "sm":
				return css`
					width: var(--height-small);
					height: var(--height-small);
				`;

			case "xsm":
				return css`
					width: calc(var(--height-medium) / 2);
					height: calc(var(--height-medium) / 2);
				`;

			default:
				return css`
					width: var(--width-1);
					height: var(--height-medium);

					@media screen and (min-width: 540px) {
						height: var(--height-large);
					}
				`;
		}
	}}

	${props => {
		switch (props.btnStyle) {
			case "solid1":
				return css`
					font-size: var(--text-size-1);
					font-weight: var(--font-weight-3);

					background-color: var(--grey-1);

					&:hover {
						background-color: var(--grey-2);
					}

					&:disabled {
						background-color: var(--grey-2);
						cursor: not-allowed;
					}
				`;

			case "solid2":
				return css`
					font-size: var(--text-size-3);

					background-color: var(--grey-3);

					&:hover {
						background-color: var(--grey-2);
					}
				`;

			case "outline1":
				return css`
					font-size: var(--title-size-4);

					border-radius: unset;
				`;

			case "outline2":
				return css`
					font-size: var(--title-size-4);
					color: var(--grey-1);

					border-radius: unset;

					&:hover {
						color: var(--grey-0);
					}
				`;

			default:
				return css`
					font-size: var(--text-size-1);
					font-weight: var(--font-weight-3);

					background-color: var(--primary);

					&:hover {
						background-color: var(--primary-50);
					}

					&:disabled {
						background-color: var(--primary-negative);
						cursor: not-allowed;
					}
				`;
		}
	}}
`;
