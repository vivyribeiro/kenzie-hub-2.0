import { Dispatch, SetStateAction } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CgClose } from "react-icons/cg";
import { FaInfoCircle } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";

import { validationUpdateTech } from "./validationUpdateTech";
import { useTechsContext } from "../../../../contexts/TechsContext";

import { iTechAddData } from "../ModalAdd";
import { iTech } from "../../../../services/autoLogin";

import { StyledModalForm } from "../style";
import { ThemeButton } from "../../../../styles/button";
import { ThemeTitle } from "../../../../styles/typography";
import {
	StyledModal,
	StyledModalHeader,
	StyledOverlayModal
} from "../../../../styles/modal";
import {
	ThemeInput,
	ThemeSelect,
	ThemeLabelInput,
	ThemeLabelError,
	StyledContainerInput,
	StyledContainerSelect
} from "../../../../styles/form";

interface iModalUpdateProps {
	animation: string;
	currentTech: iTech;
	isModalUpdateVisible: boolean;
	setAnimation: Dispatch<SetStateAction<string>>;
	setIsModalUpdateVisible: Dispatch<SetStateAction<boolean>>;
}

export type iTechUpdateData = Exclude<iTechAddData, "title">;

const ModalUpdate = ({
	animation,
	currentTech,
	setAnimation,
	isModalUpdateVisible,
	setIsModalUpdateVisible
}: iModalUpdateProps) => {
	const { levelSkills, updateTech, updateLoading, removeloading, removeTech } =
		useTechsContext();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<iTechUpdateData>({
		resolver: yupResolver(validationUpdateTech)
	});

	const onSubmit = (data: iTechUpdateData): void => {
		updateTech(currentTech.id, data);
		reset();
	};

	const closeModal = (): void => {
		setAnimation("disappear");

		setTimeout(() => {
			setIsModalUpdateVisible(!isModalUpdateVisible);

			setAnimation("");
		}, 400);
	};

	const removeTechModal = (): void => {
		removeTech(currentTech.id, closeModal);
	};

	return (
		<StyledOverlayModal>
			<StyledModal className={animation}>
				<StyledModalHeader>
					<ThemeTitle tag="h2">Tecnologia Detalhes</ThemeTitle>
					<ThemeButton btnSize="xsm" btnStyle="outline2" onClick={closeModal}>
						<CgClose />
					</ThemeButton>
				</StyledModalHeader>

				<StyledModalForm onSubmit={handleSubmit(onSubmit)}>
					<StyledContainerInput>
						<ThemeLabelInput htmlFor="techTitle">
							Nome do projeto
						</ThemeLabelInput>
						<ThemeInput
							id="techTitle"
							type="text"
							defaultValue={currentTech.title}
							disabled
						></ThemeInput>
					</StyledContainerInput>

					<StyledContainerSelect>
						<ThemeLabelInput htmlFor="levelSkill">Status</ThemeLabelInput>
						<ThemeSelect id="levelSkill" {...register("status")}>
							{levelSkills.map((level, index) => (
								<option key={index} value={level}>
									{level}
								</option>
							))}
						</ThemeSelect>
						{errors.status && (
							<ThemeLabelError>
								<FaInfoCircle /> {errors.status.message}
							</ThemeLabelError>
						)}
					</StyledContainerSelect>

					<div className="form__btnsContainer">
						<ThemeButton btnSize="md1" type="submit" disabled={updateLoading}>
							{updateLoading ? <BiLoaderCircle /> : "Salvar alterações"}
						</ThemeButton>
						<ThemeButton
							btnSize="md2"
							btnStyle="solid1"
							type="button"
							onClick={removeTechModal}
							disabled={removeloading}
						>
							{removeloading ? <BiLoaderCircle /> : "Excluir"}
						</ThemeButton>
					</div>
				</StyledModalForm>
			</StyledModal>
		</StyledOverlayModal>
	);
};

export default ModalUpdate;
