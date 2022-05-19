import { createContext, useContext, useState } from "react";

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
      name: "Principal",
      link: "/dashboard",
    },
    {
      name: "Conversas",
      link: "/conversas",
    },
    {
      name: "Adicionar ideia",
      link: "/adicionar-ideia",
    },
    {
      name: "Ideias",
      link: "/ideia",
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
