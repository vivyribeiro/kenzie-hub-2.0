import * as yup from "yup";

export const validationAddTech = yup.object().shape({
	title: yup
		.string()
		.min(2, "Deve conter no mínimo 2 caracteres")
		.required("O nome é obrigatório"),
	status: yup.string().required("O status é obrigatório")
});
