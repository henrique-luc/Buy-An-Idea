import { EditProfileProvider } from "./EditProfile";
import { InterpriseListProvider } from "./interpriseList";
import { LoginProvider } from "./Login";
import { MatchProvider } from "./Match";
import { ModalProvider } from "./Modal";
import { PageLinkProvider } from "./PageLink";
import { RegisterProvider } from "./Register";

const Providers = ({ children }) => {
	return (
		<>
			<RegisterProvider>
				<LoginProvider>
					<MatchProvider>
						<ModalProvider>
							<InterpriseListProvider>
								<PageLinkProvider>
									<EditProfileProvider>
										{children}
									</EditProfileProvider>
								</PageLinkProvider>
							</InterpriseListProvider>
						</ModalProvider>
					</MatchProvider>
				</LoginProvider>
			</RegisterProvider>
		</>
	);
};

export default Providers;
