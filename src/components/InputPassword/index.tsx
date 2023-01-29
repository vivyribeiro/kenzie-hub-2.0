import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { ThemeInput, ThemeLabelInput } from "../../styles/form";

interface iInputProps {
	children?: ReactNode;
	id: string;
	showPassword?: () => void;
	showConfirmPassword?: () => void;
	label: string;
	className?: string;
	placeholder: string;
	isPasswordVisible?: boolean;
	isConfirmPasswordVisible?: boolean;
	register: UseFormRegisterReturn<string>;
}

export const InputPassword = ({
	children,
	id,
	label,
	className,
	placeholder,
	showPassword,
	showConfirmPassword,
	isPasswordVisible,
	isConfirmPasswordVisible,
	register
}: iInputProps) => {
	return (
		<>
			<ThemeLabelInput htmlFor={id}>{label}</ThemeLabelInput>

			<ThemeInput
				placeholder={placeholder}
				type={
					isPasswordVisible || isConfirmPasswordVisible ? "text" : "password"
				}
				id={id}
				{...register}
			/>
			{isPasswordVisible || isConfirmPasswordVisible ? (
				<AiOutlineEye
					onClick={showPassword || showConfirmPassword}
					className={
						isPasswordVisible ? "form__passIcon" : "form__confirmPassIcon"
					}
				/>
			) : (
				<AiOutlineEyeInvisible
					onClick={showPassword || showConfirmPassword}
					className={
						isPasswordVisible ? "form__passIcon" : "form__confirmPassIcon"
					}
				/>
			)}
		</>
	);
};
