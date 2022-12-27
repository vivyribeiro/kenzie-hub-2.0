import styled from "styled-components";

export const StyledContainerMessage = styled.div`
	height: calc(var(--height-medium) * 2);

	gap: var(--gap-6);
	align-items: center;
	justify-content: center;

	& > span {
		font-size: var(--text-size-1);
		font-weight: var(--font-weight-3);
		color: var(--grey-0);
		text-align: center;
	}
`;

export const StyledContainerButtons = styled.div`
	height: var(--height-medium);

	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: var(--gap-3);

	button {
		height: var(--height-small);
	}
`;
