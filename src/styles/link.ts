import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iLinkProps {
	size?: string;
}

const ThemeLink = styled(Link)<iLinkProps>`
	font-size: var(--text-size-3);
	color: var(--grey-0);

	border-radius: var(--radius-1);

	&:hover {
		background-color: var(--grey-2);
	}

	${props => {
		switch (props.size) {
			case "lg":
				return css`
					width: var(--width-1);
					max-width: calc(var(--width-4) / 2.4);
					height: var(--height-large);

					font-size: var(--text-size-1);
					font-weight: var(--font-weight-3);

					background-color: var(--grey-1);
				`;

			default:
				return css`
					width: max-content;
					height: var(--height-small);
					padding: calc(var(--gap-6) / 2) var(--gap-6);

					font-weight: var(--font-weight-2);

					background-color: var(--grey-3);
				`;
		}
	}}
`;

export default ThemeLink;
