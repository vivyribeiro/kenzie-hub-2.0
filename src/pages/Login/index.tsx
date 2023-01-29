import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaInfoCircle } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";

import { validationLogin } from "./validationLogin";
import { useUserContext } from "../../contexts/UserContext";

import logo from "../../assets/Logo.svg";
import StyledSectionLogin from "./style";
import ThemeLink from "../../styles/link";
import { Input } from "../../components/Input";
import { ThemeButton } from "../../styles/button";
import { ThemeContainerImg } from "../../styles/imgContainer";
import { InputPassword } from "../../components/InputPassword";
import { ThemeLabelText, ThemeTitle } from "../../styles/typography";
import {
	ThemeLabelError,
	StyledContainerForm,
	StyledContainerInput,
	StyledContainerHeader,
	StyledContainerPassword
} from "../../styles/form";

export interface iLoginData {
	email: string;
	password: string;
}

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const { userLogin } = useUserContext();

	const showPassword = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<iLoginData>({
		resolver: yupResolver(validationLogin)
	});

	const onSubmit = (data: iLoginData) => {
		userLogin(data, setLoading);
	};

	return (
		<StyledSectionLogin>
			<StyledContainerHeader>
				<ThemeContainerImg size="lg">
					<img src={logo} alt="Logo Kenzie Hub" title="Logo Kenzie Hub" />
				</ThemeContainerImg>
			</StyledContainerHeader>

			<StyledContainerForm>
				<ThemeTitle tag="h1" type="title1">
					Login
				</ThemeTitle>
				<form onSubmit={handleSubmit(onSubmit)}>
					<StyledContainerInput>
						<Input
							placeholder="Digite aqui seu email"
							type="email"
							id="email"
							label="Email"
							register={register("email")}
						/>
						{errors.email && (
							<ThemeLabelError>
								<FaInfoCircle /> {errors.email.message}
							</ThemeLabelError>
						)}
					</StyledContainerInput>

					<StyledContainerPassword isPasswordVisible={isPasswordVisible}>
						<InputPassword
							id="password"
							label="Senha"
							placeholder="Digite aqui sua senha"
							showPassword={showPassword}
							isPasswordVisible={isPasswordVisible}
							register={register("password")}
						/>

						{errors.password && (
							<ThemeLabelError>
								{" "}
								<FaInfoCircle /> {errors.password.message}
							</ThemeLabelError>
						)}
					</StyledContainerPassword>

					<ThemeButton type="submit" disabled={loading}>
						{loading ? <BiLoaderCircle /> : "Entrar"}
					</ThemeButton>
				</form>
				<div>
					<ThemeLabelText type="medium">
						Ainda não possui uma conta?
					</ThemeLabelText>
					<ThemeLink to="/register" size="lg">
						Cadastre-se
					</ThemeLink>
				</div>
			</StyledContainerForm>
		</StyledSectionLogin>
	);
};

export default Login;
