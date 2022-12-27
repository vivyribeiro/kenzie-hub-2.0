import styled from "styled-components";

const StyledLiCard = styled.li`
	width: var(--width-1);
	max-width: var(--width-1);
	height: var(--height-large);
	padding: 0 var(--gap-5);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	background-color: var(--grey-4);
	border-radius: var(--radius-1);

	transition: 0.5s;

	&:hover {
		background-color: var(--grey-2);
	}

	div {
		max-width: max-content;

		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: var(--gap-4);
	}

	& > div:nth-child(1) {
		width: max-content;
		max-width: calc(var(--width-1) / 2);
		justify-content: flex-start;
		h2 {
			width: var(--width-1);

			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;

			&:hover {
				cursor: pointer;
			}
		}
	}

	@media screen and (max-width: 320px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-evenly;

		position: relative;

		& > h2 {
			width: var(--width-3);
		}

		& > div {
			max-width: var(--width-1);
			justify-content: space-between;

			button {
				width: unset;

				position: absolute;
				right: var(--gap-5);
				bottom: calc(var(--gap-6) / 2);
			}
		}
	}

	@media screen and (min-width: 540px) {
		flex-direction: row;
	}
`;

export default StyledLiCard;
