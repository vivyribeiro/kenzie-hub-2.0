import styled, { css } from "styled-components";
import BaseTitle from "./components/BaseTitle";

interface iTypographyProps {
	type?: string;
}

export const ThemeTitle = styled(BaseTitle)<iTypographyProps>`
	font-weight: var(--font-weight-1);
	color: var(--grey-0);

	${props => {
		switch (props.type) {
			case "title1":
				return css`
					font-size: var(--title-size-5);
				`;

			case "title2":
				return css`
					font-weight: var(--font-weight-2);
					font-size: var(--text-size-1);
				`;

			default:
				return css`
					font-size: var(--text-size-2);
				`;
		}
	}}
`;

export const ThemeLabelText = styled.span<iTypographyProps>`
	font-weight: var(--font-weight-4);
	color: var(--grey-1);

	${props => {
		switch (props.type) {
			case "regular":
				return css`
					color: var(--grey-0);
					font-size: var(--text-size-3);
				`;

			case "medium":
				return css`
					font-size: var(--text-size-3);
					font-weight: var(font-weight-2);
				`;

			case "bold":
				return css`
					font-size: var(--text-size-1);
					font-weight: var(font-weight-2);
				`;

			case "disabled":
				return css`
					font-size: var(--text-size-1);
					font-weight: var(font-weight-2);
				`;

			default:
				return css`
					font-size: var(--text-size-3);
				`;
		}
	}}
`;
