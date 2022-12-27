import styled from "styled-components";
import { StyledSectionForm } from "../../styles/form";

const StyledSectionLogin = styled(StyledSectionForm)`
	& > div + div > div {
		align-items: center;
		gap: var(--gap-4);
		padding-top: var(--gap-5);
	}
`;

export default StyledSectionLogin;
