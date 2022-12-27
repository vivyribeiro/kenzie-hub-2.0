import React from "react";

import { ToastContentProps } from "react-toastify";

import { ThemeButton } from "../../styles/button";
import { StyledContainerButtons, StyledContainerMessage } from "./style";

type iCloseToast = Exclude<ToastContentProps, "toastProps">;

interface iCustomToastConfirm {
	closeToast?: () => iCloseToast;
	confirmAction(): Promise<void>;
	message: string;
}

const CustomToastConfirm = ({
	closeToast,
	confirmAction,
	message
}: iCustomToastConfirm): JSX.Element => (
	<StyledContainerMessage>
		<span>{message}</span>
		<StyledContainerButtons>
			<ThemeButton btnSize="md2" btnStyle="solid1" onClick={closeToast}>
				Fechar
			</ThemeButton>
			<ThemeButton btnSize="md2" btnStyle="default" onClick={confirmAction}>
				Confirmar
			</ThemeButton>
		</StyledContainerButtons>
	</StyledContainerMessage>
);

export default CustomToastConfirm;
