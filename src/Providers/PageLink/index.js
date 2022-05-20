import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PageLinkContext = createContext();

export const PageLinkProvider = ({ children }) => {
	const investorPagesList = [
		{
			name: "Principal",
			link: "/dashboard/investidor",
		},
		{
			name: "Conversas",
			link: "/conversas",
		},
	];

	const entrepreneurPagesList = [
		{
			name: "Ideias",
			link: "/ideia",
		},
		{
			name: "Conversas",
			link: "/conversas",
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
	const [allPages, setAllPages] = useState([
		...investorPagesList,
		...entrepreneurPagesList,
	]);

	return (
		<PageLinkContext.Provider
			value={{
				investorPages,
				entrepreneurPages,
				allPages,
			}}
		>
			{children}
		</PageLinkContext.Provider>
	);
};

export const usePageLink = () => useContext(PageLinkContext);
