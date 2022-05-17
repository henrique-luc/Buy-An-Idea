import { LoginProvider } from "./Login";
import { ModalProvider } from "./Modal";
import { RegisterProvider } from "./Register";

const Providers = ({ children }) => {
	return (
		<>
			<ModalProvider>
				<RegisterProvider>
					<LoginProvider>{children}</LoginProvider>
				</RegisterProvider>
			</ModalProvider>
		</>
	);
};

export default Providers;
