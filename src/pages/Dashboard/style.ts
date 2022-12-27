import styled from "styled-components";

export const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1;

	border-bottom: 1px solid var(--grey-2);

	& > nav {
		@media screen and (min-width: 768px) {
			margin: 0 auto;
			max-width: var(--width-4);
		}
	}
`;

export const StyledContainerProfile = styled.div`
	max-width: var(--width-1);
	height: calc(var(--height-small) * 2.69);
	padding: 0 var(--gap-4);
	margin: calc(var(--gap-1) * 2.2) auto 0 auto;

	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	border-bottom: 1px solid var(--grey-2);

	& > div {
		max-width: var(--width-4);
		margin: 0 auto;

		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	@media screen and (max-width: 320px) {
		div {
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			gap: var(--gap-6);
		}
	}

	@media screen and (min-width: 768px) {
		padding: 0 var(--gap-4);

		div {
			padding: 0 var(--gap-5);

			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
`;

export const StyledSectionDashboard = styled.section`
	max-width: var(--width-4);
	margin: var(--gap-1) auto;
	padding: 0 var(--gap-5);

	gap: var(--gap-5);

	& > div {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		border: unset;
	}

	& > h2 {
		width: var(--width-1);
		padding: var(--gap-5);

		background-color: var(--grey-3);
		border-radius: var(--radius-1);

		line-height: 1.4;
	}
`;
