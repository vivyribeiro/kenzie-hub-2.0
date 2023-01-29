import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FaInfoCircle } from "react-icons/fa";
import { BiLoaderCircle } from "react-icons/bi";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { validationRegister } from "./validationRegister";
import { useUserContext } from "../../contexts/UserContext";

import Link from "../../styles/link";
import logo from "../../assets/Logo.svg";
import StyledSectionRegister from "./style";
import { ThemeButton } from "../../styles/button";
import { ThemeContainerImg } from "../../styles/imgContainer";
import { ThemeLabelText, ThemeTitle } from "../../styles/typography";
import {
	ThemeInput,
	ThemeSelect,
	ThemeLabelInput,
	ThemeLabelError,
	StyledContainerForm,
	StyledContainerInput,
	StyledContainerHeader,
	StyledContainerSelect,
	StyledContainerPassword
} from "../../styles/form";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

export interface iRegisterData {
	bio: string;
	name: string;
	email: string;
	contact: string;
	password: string;
	course_module: string;
	confirmPassword?: string;
}

const Register = () => {
	const [loading, setLoading] = useState(false);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
		useState(false);

	const { modules, userRegister } = useUserContext();

	const showPassword = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	const showConfirmPassword = () => {
		setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
	};

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<iRegisterData>({
		resolver: yupResolver(validationRegister)
	});

	const onSubmit = (data: iRegisterData) => {
		userRegister(data, setLoading);
	};

	return (
		<StyledSectionRegister>
			<StyledContainerHeader>
				<ThemeContainerImg size="md">
					<img src={logo} alt="Logo Kenzie Hub" title="Logo Kenzie Hub" />
				</ThemeContainerImg>
				<Link to="/login">Voltar</Link>
			</StyledContainerHeader>

			<StyledContainerForm>
				<ThemeTitle tag="h1" type="title1">
					Crie sua conta
				</ThemeTitle>
				<ThemeLabelText>Rapido e grátis, vamos nessa</ThemeLabelText>
				<form onSubmit={handleSubmit(onSubmit)}>
					<StyledContainerInput>
						<Input
							placeholder="Digite aqui seu nome"
							type="text"
							id="name"
							label="Nome"
							register={register("name")}
						/>
						{errors.name && (
							<ThemeLabelError>
								{" "}
								<FaInfoCircle /> {errors.name.message}
							</ThemeLabelError>
						)}
					</StyledContainerInput>

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
								{" "}
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

					<StyledContainerPassword
						isConfirmPasswordVisible={isConfirmPasswordVisible}
					>
						{/* <ThemeLabelInput htmlFor="confirmPassword">
							Confirmar Senha
						</ThemeLabelInput>
						<ThemeInput
							placeholder="Digite novamente sua senha"
							type={isConfirmPasswordVisible ? "text" : "password"}
							id="confirmPassword"
							{...register("confirmPassword")}
						/>
						{isConfirmPasswordVisible ? (
							<AiOutlineEye
								onClick={showConfirmPassword}
								className="form__confirmPassIcon"
							/>
						) : (
							<AiOutlineEyeInvisible
								onClick={showConfirmPassword}
								className="form__confirmPassIcon"
							/>
						)} */}
						<InputPassword
							id="confirmPassword"
							label="Confirmar Senha"
							placeholder="Digite novamente sua senha"
							showConfirmPassword={showConfirmPassword}
							isConfirmPasswordVisible={isConfirmPasswordVisible}
							register={register("confirmPassword")}
						/>
						{errors.confirmPassword && (
							<ThemeLabelError>
								<FaInfoCircle /> {errors.confirmPassword.message}
							</ThemeLabelError>
						)}
					</StyledContainerPassword>

					<StyledContainerInput>
						<Input
							placeholder="Fale sobre você"
							type="text"
							id="bio"
							label="Bio"
							register={register("bio")}
						/>
						{errors.bio && (
							<ThemeLabelError>
								{" "}
								<FaInfoCircle /> {errors.bio.message}
							</ThemeLabelError>
						)}
					</StyledContainerInput>

					<StyledContainerInput>
						<Input
							placeholder="Opção de contato"
							type="url"
							id="contact"
							label="Contato"
							register={register("contact")}
						/>
						{errors.contact && (
							<ThemeLabelError>
								{" "}
								<FaInfoCircle /> {errors.contact.message}
							</ThemeLabelError>
						)}
					</StyledContainerInput>

					<StyledContainerSelect>
						<ThemeLabelInput htmlFor="module">
							Selecionar módulo
						</ThemeLabelInput>
						<ThemeSelect id="module" {...register("course_module")}>
							{modules.map((module, index) => (
								<option key={index} value={module}>
									{module.split(" ").slice(0, 2).join(" ")}
								</option>
							))}
						</ThemeSelect>
						{errors.course_module && (
							<ThemeLabelError>
								{" "}
								<FaInfoCircle /> {errors.course_module.message}
							</ThemeLabelError>
						)}
					</StyledContainerSelect>

					<ThemeButton type="submit" disabled={loading}>
						{loading ? <BiLoaderCircle /> : "Cadastrar"}
					</ThemeButton>
				</form>
			</StyledContainerForm>
		</StyledSectionRegister>
	);
};

export default Register;
