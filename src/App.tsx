import Providers from "./contexts/Providers";
import Routes from "./routes";

import { ToastContainer } from "react-toastify";

const App = () => {
	return (
		<>
			<Providers>
				<ToastContainer />
				<Routes />
			</Providers>
		</>
	);
};

export default App;
