import * as yup from "yup";

export const validationUpdateTech = yup.object().shape({
	status: yup.string().required("O status é obrigatório")
});
