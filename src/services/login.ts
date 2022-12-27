import { api } from "./api";
import { iLoginData } from "../pages/Login";
import { iUserProfile } from "./autoLogin";

interface iUserData {
	user: iUserProfile;
	token: string;
}

export const login = async (data: iLoginData): Promise<iUserData> => {
	const response = await api.post("sessions", data);

	api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

	return response.data;
};
