import { MouseEvent } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

import { iTech } from "../../../../services/autoLogin";
import { useTechsContext } from "../../../../contexts/TechsContext";

import StyledLiCard from "./style";
import { ThemeButton } from "../../../../styles/button";
import { ThemeLabelText, ThemeTitle } from "../../../../styles/typography";

interface iCardItemProps {
	tech: iTech;
	openModalUpdate(
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
		tech: iTech
	): void;
}

const CardItem = ({ tech, openModalUpdate }: iCardItemProps) => {
	const { title, status, id } = tech;

	const { removeTech } = useTechsContext();

	return (
		<StyledLiCard>
			<div onClick={e => openModalUpdate(e, tech)}>
				<ThemeTitle tag="h2">{title}</ThemeTitle>
			</div>
			<div>
				<ThemeLabelText type="regular">{status}</ThemeLabelText>
				<ThemeButton
					btnSize="xsm"
					btnStyle="outline1"
					title="Excluir"
					onClick={() => removeTech(id)}
				>
					<FaRegTrashAlt />
				</ThemeButton>
			</div>
		</StyledLiCard>
	);
};

export default CardItem;
