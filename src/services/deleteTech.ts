import { api } from "./api";

export const deleteTech = async (techId: string): Promise<void> => {
	await api.delete<void>(`users/techs/${techId}`);
};
