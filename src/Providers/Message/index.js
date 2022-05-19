import { createContext, useState, useContext } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
	const [message, setMessage] = useState("");

	const getMessageObj = (message, id, whatsapp = "") => {
		return {
			matchId: id,
			message: message,
			whatsapp: whatsapp,
		};
	};

	return (
		<MessageContext.Provider
			value={{
				message,
				setMessage,
				getMessageObj,
			}}
		>
			{children}
		</MessageContext.Provider>
	);
};

export const useMessage = () => useContext(MessageContext);
