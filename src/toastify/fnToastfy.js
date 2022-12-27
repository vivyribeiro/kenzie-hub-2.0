import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomToastConfirm from "./CustomToastConfirm/CustomToastConfirm";

export const toaster = ({ type, message, customIcon }) => {
	if (type && message && customIcon) {
		toast(message, {
			type,
			icon: customIcon ? customIcon : true,
			position: "top-right",
			autoClose: 1500,
			draggable: false
		});
	}
};

export const toasterConfirm = (confirmAction, message) => {
	toast(<CustomToastConfirm text={message} confirmAction={confirmAction} />, {
		position: "top-right",
		autoClose: false,
		draggable: false,
		hideProgressBar: false,
		pauseOnHover: true
	});
};
