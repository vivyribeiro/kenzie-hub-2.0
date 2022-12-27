import React, { MouseEvent } from "react";

import CardItem from "./CardItem";
import StyledUlCards from "./styles";
import { iTech } from "../../../services/autoLogin";

interface iCardItemProps {
	techList: iTech[];
	openModalUpdate(
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
		tech: iTech
	): void;
}

const CardList = ({
	techList,
	openModalUpdate
}: iCardItemProps): JSX.Element => {
	return (
		<>
			<StyledUlCards>
				{techList.map(tech => (
					<CardItem
						tech={tech}
						key={tech.id}
						openModalUpdate={openModalUpdate}
					/>
				))}
			</StyledUlCards>
		</>
	);
};

export default CardList;
