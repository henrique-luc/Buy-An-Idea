import { EditProfileProvider } from "./EditProfile";
import { InterpriseListProvider } from "./interpriseList";
import { LoginProvider } from "./Login";
import { MatchProvider } from "./Match";
import { ModalProvider } from "./Modal";
import { RegisterProvider } from "./Register";
import { AddIdeaProvider } from "./Add-Idea";
import { PageLinkProvider } from "./PageLink";
import { MessageProvider } from "./Message";

const Providers = ({ children }) => {
	return (
		<>
			<RegisterProvider>
				<LoginProvider>
					<MessageProvider>
						<MatchProvider>
							<ModalProvider>
								<InterpriseListProvider>
									<PageLinkProvider>
										<EditProfileProvider>
											<AddIdeaProvider>
												{children}
											</AddIdeaProvider>
										</EditProfileProvider>
									</PageLinkProvider>
								</InterpriseListProvider>
							</ModalProvider>
						</MatchProvider>
					</MessageProvider>
				</LoginProvider>
			</RegisterProvider>
		</>
	);
};

export default Providers;
