import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { api } from "../../Services/api";

export const InterpriseListContext = createContext();

export const InterpriseListProvider = ({ children }) => {
  const [counter, setCounter] = useState(1);
  localStorage.setItem("counter", counter);
  const localStorageCounter = JSON.parse(localStorage.getItem("counter"));
  console.log("localStorage: ", localStorageCounter);
  const [list, setList] = useState([]);
  const [cardIsOpen, setCardIsOpen] = useState(false);

  useEffect(() => {
    api
      .get(`/users?_page=${localStorageCounter}&_limit=1`)
      .then((res) => setList(res.data, console.log(res.data)));
  }, [localStorageCounter]);

  return (
    <InterpriseListContext.Provider
      value={{ list, setList, cardIsOpen, setCardIsOpen, counter, setCounter }}
    >
      {children}
    </InterpriseListContext.Provider>
  );
};

// useEffect(() => {
//   getUsers();
// }, []);

// async function getUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   setUsers(users);
// }
