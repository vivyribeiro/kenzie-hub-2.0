import { api } from "./api";
import { iRegisterData } from "../pages/Register";

type iUserRegisterData = Exclude<iRegisterData, "confirmPassword" & "password">;

export const register = async (
	data: iUserRegisterData
): Promise<iRegisterData> => {
	const response = await api.post<iUserRegisterData>("users", data);

	return response.data;
};
