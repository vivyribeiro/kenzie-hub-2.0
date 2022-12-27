import React, { MouseEvent, useState } from "react";

import { iTech } from "../../services/autoLogin";
import { useUserContext } from "../../contexts/UserContext";

import { FaPlus } from "react-icons/fa";

import CardList from "./CardList";
import logo from "../../assets/Logo.svg";
import ModalAdd from "./Modals/ModalAdd";
import ThemeLink from "../../styles/link";
import ModalUpdate from "./Modals/ModalUpdate";
import { ThemeButton } from "../../styles/button";
import { ThemeContainerImg } from "../../styles/imgContainer";
import { ThemeLabelText, ThemeTitle } from "../../styles/typography";
import {
	StyledHeader,
	StyledContainerProfile,
	StyledSectionDashboard
} from "./style";

const Dashboard = () => {
	const [animation, setAnimation] = useState("");
	const [isModalAddVisible, setIsModalAddVisible] = useState(false);
	const [currentTech, setCurrentTech] = useState<iTech>({} as iTech);
	const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);

	const { user, techList, userLogout } = useUserContext();

	const openModalAdd = (): void => {
		setAnimation("appear");
		setIsModalAddVisible(!isModalAddVisible);
	};

	const openModalUpdate = (
		e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
		tech: iTech
	): void => {
		setCurrentTech(tech);
		setAnimation("appear");
		setIsModalUpdateVisible(!isModalUpdateVisible);
	};

	return (
		<>
			<StyledHeader>
				<nav>
					<ThemeContainerImg>
						<img src={logo} alt="Logo Kenzie Hub" title="Logo Kenzie Hub" />
					</ThemeContainerImg>
					<ThemeLink to="/" onClick={() => userLogout()}>
						Sair
					</ThemeLink>
				</nav>
			</StyledHeader>

			<StyledContainerProfile>
				<div>
					<ThemeTitle tag="h1">{user?.name}</ThemeTitle>
					<ThemeLabelText>{user?.course_module}</ThemeLabelText>
				</div>
			</StyledContainerProfile>

			<StyledSectionDashboard>
				<div>
					<ThemeTitle tag="h2" type="title2">
						Tecnologias
					</ThemeTitle>
					<ThemeButton btnSize="sm" btnStyle="solid2" onClick={openModalAdd}>
						<FaPlus />
					</ThemeButton>
				</div>
				{techList?.length ? (
					<CardList techList={techList} openModalUpdate={openModalUpdate} />
				) : (
					<ThemeTitle tag="h2">
						Você ainda não adicionou nenhuma tecnologia a lista
					</ThemeTitle>
				)}
			</StyledSectionDashboard>

			{isModalAddVisible && (
				<ModalAdd
					animation={animation}
					setAnimation={setAnimation}
					isModalAddVisible={isModalAddVisible}
					setIsModalAddVisible={setIsModalAddVisible}
				/>
			)}

			{isModalUpdateVisible && (
				<ModalUpdate
					animation={animation}
					currentTech={currentTech}
					setAnimation={setAnimation}
					isModalUpdateVisible={isModalUpdateVisible}
					setIsModalUpdateVisible={setIsModalUpdateVisible}
				/>
			)}
		</>
	);
};

export default Dashboard;
