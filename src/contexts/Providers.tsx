import React, { ReactNode } from "react";

import { UserProvider } from "./UserContext";
import { TechsProvider } from "./TechsContext";

interface iProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: iProvidersProps) => {
	return (
		<UserProvider>
			<TechsProvider>{children}</TechsProvider>
		</UserProvider>
	);
};

export default Providers;
