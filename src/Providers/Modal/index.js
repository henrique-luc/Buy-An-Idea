import { createContext, useState, useContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [openMessageModal, setOpenMessageModal] = useState(false);
	const handleOpenMessageModal = () => setOpenMessageModal(true);
	const handleCloseMessageModal = () => setOpenMessageModal(false);
	//LOGIN
	const [openLoginModal, setOpenLoginModal] = useState(false);
	const handleOpenLoginModal = () => setOpenLoginModal(true);
	const handleCloseLoginModal = () => setOpenLoginModal(false);

	//CADASTRO INVESTIDOR
	const [openInvestidorRegister, setOpenInvestidorRegister] = useState(false);
	const handleOpenInvestidorRegister = () => setOpenInvestidorRegister(true);
	const handleCloseInvestidorRegister = () =>
		setOpenInvestidorRegister(false);

	//CADASTRO EMPRESARIO

	const [openEntrepreneurRegister, setOpenEntrepreneurRegister] =
		useState(false);
	const handleOpenEntrepreneurRegister = () =>
		setOpenEntrepreneurRegister(true);
	const handleCloseEntrepreneurRegister = () =>
		setOpenEntrepreneurRegister(false);

	return (
		<ModalContext.Provider
			value={{
				handleOpenLoginModal,
				handleOpenEntrepreneurRegister,
				handleOpenInvestidorRegister,
				openLoginModal,
				openInvestidorRegister,
				openEntrepreneurRegister,
				handleCloseLoginModal,
				handleCloseInvestidorRegister,
				handleCloseEntrepreneurRegister,
				openMessageModal, 
				setOpenMessageModal,
				handleOpenMessageModal,
				handleCloseMessageModal
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModal = () => useContext(ModalContext);
