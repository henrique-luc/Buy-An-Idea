import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { buyAnIdeaApi } from "../../Services/api";

export const InterpriseListContext = createContext();

export const InterpriseListProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [cardIsOpen, setCardIsOpen] = useState(false);

  useEffect(() => {
    buyAnIdeaApi.get("/companys").then((res) => setList(res.data));
  }, []);

  return (
    <InterpriseListContext.Provider
      value={{ list, setList, cardIsOpen, setCardIsOpen }}
    >
      {children}
    </InterpriseListContext.Provider>
  );
};
