import * as yup from "yup";

export const validationLogin = yup.object().shape({
	email: yup
		.string()
		.required("O e-mail é obrigatório.")
		.email("Preencha um e-mail válido."),
	password: yup.string().required("A senha é obrigatória.")
});
