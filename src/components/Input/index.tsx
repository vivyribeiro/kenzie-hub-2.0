import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { ThemeInput, ThemeLabelInput } from "../../styles/form";

interface iInputProps {
	children?: ReactNode;
	id: string;
	type: string;
	label: string;
	className?: string;
	placeholder: string;
	register: UseFormRegisterReturn<string>;
}

export const Input = ({
	children,
	id,
	type,
	label,
	className,
	placeholder,
	register
}: iInputProps) => {
	return (
		<>
			<ThemeLabelInput htmlFor={id}>{label}</ThemeLabelInput>
			<ThemeInput placeholder={placeholder} type={type} id={id} {...register} />
		</>
	);
};
