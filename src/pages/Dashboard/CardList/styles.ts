import styled from "styled-components";

const StyledUlCards = styled.ul`
	max-height: calc(var(--width-4) / 2);
	overflow-y: auto;
	padding: var(--gap-4) var(--gap-3);

	background-color: var(--grey-3);
	border-radius: var(--radius-1);

	gap: var(--gap-5);
`;

export default StyledUlCards;
