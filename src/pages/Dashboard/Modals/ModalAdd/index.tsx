import { Dispatch, SetStateAction } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { validationAddTech } from "./validationAddTech";
import { useTechsContext } from "../../../../contexts/TechsContext";

import { CgClose } from "react-icons/cg";
import { FaInfoCircle } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";

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

export interface iTechAddData {
	title: string;
	status: string;
}

interface iModalAddProps {
	animation: string;
	isModalAddVisible: boolean;
	setAnimation: Dispatch<SetStateAction<string>>;
	setIsModalAddVisible: Dispatch<SetStateAction<boolean>>;
}

const ModalAdd = ({
	animation,
	setAnimation,
	isModalAddVisible,
	setIsModalAddVisible
}: iModalAddProps) => {
	const { levelSkills, addTech, addLoading } = useTechsContext();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<iTechAddData>({
		resolver: yupResolver(validationAddTech)
	});

	const onSubmit = (data: iTechAddData) => {
		addTech(data);
		reset();
	};

	const closeModal = () => {
		setAnimation("disappear");

		setTimeout(() => {
			setIsModalAddVisible(!isModalAddVisible);

			setAnimation("");
		}, 400);
	};

	return (
		<StyledOverlayModal>
			<StyledModal className={animation}>
				<StyledModalHeader>
					<ThemeTitle tag="h2">Cadastrar Tecnologia</ThemeTitle>
					<ThemeButton btnSize="xsm" btnStyle="outline2" onClick={closeModal}>
						<CgClose />
					</ThemeButton>
				</StyledModalHeader>
				<StyledModalForm onSubmit={handleSubmit(onSubmit)}>
					<StyledContainerInput>
						<ThemeLabelInput htmlFor="techTitle">Nome</ThemeLabelInput>
						<ThemeInput
							id="techTitle"
							type="text"
							placeholder={"Digite a tecnologia"}
							{...register("title")}
						/>
						{errors.title && (
							<ThemeLabelError>
								<FaInfoCircle /> {errors.title.message}
							</ThemeLabelError>
						)}
					</StyledContainerInput>

					<StyledContainerSelect>
						<ThemeLabelInput htmlFor="levelSkill">
							Selecionar status
						</ThemeLabelInput>
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

					<ThemeButton type="submit" disabled={addLoading}>
						{addLoading ? <BiLoaderCircle /> : "Cadastrar Tecnologia"}
					</ThemeButton>
				</StyledModalForm>
			</StyledModal>
		</StyledOverlayModal>
	);
};

export default ModalAdd;
