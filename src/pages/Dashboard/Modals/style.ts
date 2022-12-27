import styled from "styled-components";

export const StyledModalForm = styled.form`
	padding: var(--gap-5) var(--gap-5) var(--gap-3) var(--gap-5);

	gap: var(--gap-4);

	& > div > input::placeholder {
		font-size: var(--text-size-1);
	}

	& > div > select {
		font-size: var(--text-size-1);

		&:focus,
		&:active {
			color: var(--grey-0);
		}
	}
	.form__btnsContainer {
		flex-direction: row;
		justify-content: space-between;
		gap: var(--gap-5);
	}

	button > svg {
		animation: is-rotating 1s infinite;
	}

	@keyframes is-rotating {
		to {
			transform: rotate(1turn);
		}
	}

	@media screen and (min-width: 540px) {
		padding: var(--gap-2) var(--gap-5);
		gap: var(--gap-3);
	}
`;
