import {
	useState,
	Dispatch,
	ReactNode,
	useEffect,
	useContext,
	createContext,
	SetStateAction
} from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { AxiosError } from "axios";
import { toaster } from "../toastify/fnToastfy";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

import { login } from "../services/login";
import { iLoginData } from "../pages/Login";
import { register } from "../services/register";
import { iRegisterData } from "../pages/Register";
import { userProfile, iUserProfile, iTech } from "../services/autoLogin";

interface iUserProps {
	children: ReactNode;
}

interface iUserProviderData {
	modules: string[];
	globalLoading: boolean;
	techList: iTech[] | undefined;
	user: iUserProfile | null | undefined;
	setTechList: Dispatch<SetStateAction<iTech[] | undefined>>;
	setUser: Dispatch<SetStateAction<iUserProfile | null | undefined>>;
	userLogout(): void;
	userRegister(
		data: iRegisterData,
		setLoading: Dispatch<SetStateAction<boolean>>
	): Promise<void>;
	userLogin(
		data: iLoginData,
		setLoading: Dispatch<SetStateAction<boolean>>
	): Promise<void>;
}

export interface iApiError {
	status: string;
}

export const UserContext = createContext<iUserProviderData>(
	{} as iUserProviderData
);

export const UserProvider = ({ children }: iUserProps) => {
	const [globalLoading, setGlobalLoading] = useState(true);
	const [user, setUser] = useState<iUserProfile | null | undefined>(null);

	const [techList, setTechList] = useState<iTech[] | undefined>([]);

	const modules = [
		"Primeiro módulo (Introdução ao Frontend)",
		"Segundo módulo (Frontend Avançado)",
		"Terceiro módulo (Introdução ao Backend)",
		"Quarto módulo (Backend Avançado)"
	];

	const navigate = useNavigate();
	const location = useLocation();

	//user register function
	const userRegister = async (
		data: iRegisterData,
		setLoading: Dispatch<SetStateAction<boolean>>
	) => {
		delete data.confirmPassword;

		try {
			setLoading(true);
			await register(data);

			navigate("/login", { replace: true });

			toaster({
				type: "success",
				message: "Cadastro realizado com sucesso!",
				customIcon: <FaCheckCircle color="var(--sucess)" />
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiError>;

			toaster({
				type: requestError.response?.data.status,
				message: "O e-mail já existe",
				customIcon: <FaInfoCircle color="var(--negative)" />
			});
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 300);
		}
	};

	//user login function
	const userLogin = async (
		data: iLoginData,
		setLoading: Dispatch<SetStateAction<boolean>>
	) => {
		try {
			setLoading(true);
			const userResponse = await login(data);

			setUser(userResponse.user);
			setTechList(userResponse.user.techs);
			localStorage.setItem("@TOKEN", userResponse.token);
			localStorage.setItem("@USERID", userResponse.user.id);

			const toPath = location.state?.from?.pathname || "dashboard";

			navigate(toPath, { replace: true });

			toaster({
				type: "success",
				message: "Login realizado com sucesso!",
				customIcon: <FaCheckCircle color="var(--sucess)" />
			});
		} catch (error) {
			const requestError = error as AxiosError<iApiError>;

			toaster({
				type: requestError.response?.data.status,
				message: "E-mail e/ou senha incorretos ",
				customIcon: <FaInfoCircle color="var(--negative)" />
			});
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 300);
		}
	};

	//user autologin function
	useEffect(() => {
		const userAutoLogin = async () => {
			try {
				const userData = await userProfile();

				setUser(userData);
				setTechList(userData?.techs);
			} catch (error) {
				console.error(error);

				localStorage.removeItem("@TOKEN");
				localStorage.removeItem("@USERID");
			} finally {
				setTimeout(() => {
					setGlobalLoading(false);
				}, 300);
			}
		};

		userAutoLogin();
	}, []);

	//user logout function
	const userLogout = () => {
		setUser(null);
		setTechList([]);

		localStorage.removeItem("@TOKEN");
		localStorage.removeItem("@USERID");
	};

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				modules,
				techList,
				userLogin,
				userLogout,
				setTechList,
				userRegister,
				globalLoading
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = (): iUserProviderData => useContext(UserContext);
