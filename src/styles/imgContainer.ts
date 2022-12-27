import styled, { css } from "styled-components";

interface iFigureProps {
	size?: string;
}

export const ThemeContainerImg = styled.figure<iFigureProps>`
	width: var(--width-1);

	display: inline-flex;
	align-items: center;
	justify-content: flex-start;

	${props => {
		switch (props.size) {
			case "lg":
				return css`
					max-width: calc(var(--height-large) * 3);
					height: calc(var(--height-large) / 2);
				`;

			case "md":
				return css`
					max-width: calc(var(--height-medium) * 3.05);
					height: calc(var(--height-large) / 2.25);
				`;

			default:
				return css`
					max-width: calc(var(--height-large) * 2.2);
					height: calc(var(--height-small) * 2.2);
				`;
		}
	}}
`;
