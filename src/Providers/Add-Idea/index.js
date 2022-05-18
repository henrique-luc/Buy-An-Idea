import { createContext, useContext, useState } from "react";
import { api } from "../../Services/api";

export const AddIdeaContext = createContext();

export const AddIdeaProvider = ({ children }) => {
  const [addIdea, setAddIdea] = useState({});

  const userAddIdea = (addIdeaData) => {
    api.post("");
  };
};
