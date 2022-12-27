import { api } from "./api";
import { iTechUpdateData } from "../pages/Dashboard/Modals/ModalUpdate";

export const updatingTech = async (
	techId: string,
	newStatus: iTechUpdateData
): Promise<void> => {
	await api.put<void>(`users/techs/${techId}`, newStatus);
};
