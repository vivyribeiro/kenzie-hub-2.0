import { createContext, ReactNode, useContext, useState } from "react";

import { iApiError, useUserContext } from "./UserContext";

import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { toaster, toasterConfirm } from "../toastify/fnToastfy";

import { AxiosError } from "axios";
import { newTech } from "../services/newTech";
import { deleteTech } from "../services/deleteTech";
import { updatingTech } from "../services/updatingTech";
import { iTechAddData } from "../pages/Dashboard/Modals/ModalAdd";
import { iTechUpdateData } from "../pages/Dashboard/Modals/ModalUpdate";

interface iTechsProps {
	children: ReactNode;
}

interface iTechsProviderData {
	levelSkills: string[];
	addLoading: boolean;
	updateLoading: boolean;
	removeloading: boolean;
	addTech(techData: iTechAddData): Promise<void>;
	removeTech(techId: string, closeModal?: () => void): void;
	updateTech(techId: string, newStatus: iTechUpdateData): Promise<void>;
}

export const TechsContext = createContext<iTechsProviderData>(
	{} as iTechsProviderData
);

export const TechsProvider = ({ children }: iTechsProps) => {
	const levelSkills = ["Iniciante", "Intermediário", "Avançado"];

	const [addLoading, setAddLoading] = useState(false);
	const [updateLoading, setUpdateLoading] = useState(false);
	const [removeloading, setRemoveLoading] = useState(false);

	const { techList, setTechList } = useUserContext();

	const addTech = async (techData: iTechAddData) => {
		try {
			setAddLoading(true);
			const newTechData = await newTech(techData);

			setTechList(oldTechList => oldTechList && [...oldTechList, newTechData]);

			toaster({
				type: "success",
				message: "Tecnologia adicionada com sucesso!",
				customIcon: <FaCheckCircle color="var(--sucess)" />
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiError>;

			toaster({
				type: requestError.response?.data.status,
				message: "Você já criou esta tecnologia, você só pode atualizá-la!",
				customIcon: <FaInfoCircle color="var(--negative)" />
			});
		} finally {
			setTimeout(() => {
				setAddLoading(false);
			}, 150);
		}
	};

	const updateTech = async (techId: string, newStatus: iTechUpdateData) => {
		try {
			setUpdateLoading(true);
			await updatingTech(techId, newStatus);

			const newTechList = techList?.map(tech => {
				if (tech.id === techId) {
					return { ...tech, status: newStatus.status };
				}

				return tech;
			});

			setTechList(newTechList);
			toaster({
				type: "success",
				message: "Tecnologia atualizada com sucesso!",
				customIcon: <FaCheckCircle color="var(--sucess)" />
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiError>;

			toaster({
				type: requestError.response?.data.status,
				message: "Ops! Algo deu errado, tente novamente!",
				customIcon: <FaInfoCircle color="var(--negative)" />
			});
		} finally {
			setTimeout(() => {
				setUpdateLoading(false);
			}, 150);
		}
	};

	const removeTech = (techId: string, closeModal: () => void) => {
		const confirmFn = async () => {
			try {
				setRemoveLoading(true);
				await deleteTech(techId);

				closeModal && closeModal();

				const newTechList = techList?.filter(({ id }) => id !== techId);
				setTechList(newTechList);

				toaster({
					type: "success",
					message: "Tecnologia excluída com sucesso!",
					customIcon: <FaCheckCircle color="var(--sucess)" />
				});
			} catch (error) {
				toaster({
					type: "error",
					message: "Ops! Algo deu errado, tente novamente!",
					customIcon: <FaInfoCircle color="var(--negative)" />
				});
			} finally {
				setTimeout(() => {
					setRemoveLoading(false);
				}, 150);
			}
		};

		toasterConfirm(confirmFn, "Tem certeza que deseja excluir?");
	};

	return (
		<TechsContext.Provider
			value={{
				addTech,
				addLoading,
				updateTech,
				removeTech,
				levelSkills,
				updateLoading,
				removeloading
			}}
		>
			{children}
		</TechsContext.Provider>
	);
};

export const useTechsContext = (): iTechsProviderData =>
	useContext(TechsContext);
