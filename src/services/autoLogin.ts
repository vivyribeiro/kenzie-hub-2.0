import { api } from "./api";

export interface iTech {
	id: string;
	status: string;
	title: string;
}

export interface iUserProfile {
	id: string;
	bio: string;
	name: string;
	email: string;
	techs: iTech[];
	contact: string;
	course_module: string;
}

export const userProfile = async (): Promise<iUserProfile | undefined> => {
	const token = localStorage.getItem("@TOKEN");

	if (token) {
		api.defaults.headers.common.authorization = `Bearer ${token}`;
		const { data } = await api.get<iUserProfile>("profile");

		return data;
	}
};
