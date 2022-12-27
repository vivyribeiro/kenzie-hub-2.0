import { api } from "./api";
import { iTechAddData } from "../pages/Dashboard/Modals/ModalAdd";

export interface iResponseNewTechData extends iTechAddData {
	id: string;
}

export const newTech = async (
	techData: iTechAddData
): Promise<iResponseNewTechData> => {
	const { data } = await api.post<iResponseNewTechData>(
		"users/techs",
		techData
	);

	return data;
};
