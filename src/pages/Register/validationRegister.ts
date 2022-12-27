import * as yup from "yup";

export const validationRegister = yup.object().shape({
	name: yup.string().required("O nome é obrigatório."),
	email: yup
		.string()
		.required("O e-mail é obrigatório.")
		.email("Preencha um e-mail válido."),
	password: yup
		.string()
		.required("Senha é obrigatória.")
		.matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula.")
		.matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula.")
		.matches(/(\d)/, "Deve conter ao menos um número.")
		.matches(/(\W)|_/, "Deve conter um caracter especial.")
		.min(6, "A senha precisa conter no mínimo 6 caracteres."),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password")], "Confirmação de senha está inválido."),
	bio: yup.string().required("A bio é obrigatória."),
	contact: yup
		.string()
		.required("O link de contato é obrigatório.")
		.url("Preencha um link válido."),
	course_module: yup.string().required("O módulo é obrigatório")
});
