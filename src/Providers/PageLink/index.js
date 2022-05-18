import { createContext, useContext, useState } from "react";

export const PageLinkContext = createContext();

export const PageLinkProvider = ({ children }) => {
	const investorPagesList = [
		{
			name: "Dashboard",
			link: "/dashboard/investidor",
		},
	];

	const entrepreneurPagesList = [
		{
			name: "Dashboard",
			link: "/dashboard",
		},
		{
			name: "Adicionar ideia",
			link: "/adicionar-ideia",
		},
	];

	const [investorPages, setInvestorPages] = useState(investorPagesList);
	const [entrepreneurPages, setEntrepreneurPages] = useState(
		entrepreneurPagesList
	);

	return (
		<PageLinkContext.Provider
			value={{
				investorPages,
				entrepreneurPages,
			}}
		>
			{children}
		</PageLinkContext.Provider>
	);
};

export const usePageLink = () => useContext(PageLinkContext);
