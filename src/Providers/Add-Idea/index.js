import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../Services/api";
import { toast } from "react-toastify";

export const AddIdeaContext = createContext({});

export const AddIdeaProvider = ({ children }) => {
	const info = JSON.parse(localStorage.getItem("@buyAnIdea:Login"));

	const history = useHistory();

	const [addIdea, setAddIdea] = useState({});

	const userAddIdea = (addIdeaData) => {
		const { user, accessToken } = info;
		const { id, email, password } = user;

		api.patch(`/users/${id}`, addIdeaData, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
			body: {
				email: email,
				password: password,
			},
		})
			.then((response) => {
				/* localStorage.setItem(
          "@buyAnIdea:AddIdea",
          JSON.stringify(response.addIdeaData)
        ); */
				setAddIdea(response.data.idea);
				toast.success("Ideia Adicionada");
				/* history.push("/ideia"); */
			})
			.catch((error) => toast.error("Ops! Algo deu errado"));
	};

	return (
		<AddIdeaContext.Provider value={{ userAddIdea, addIdea, setAddIdea }}>
			{children}
		</AddIdeaContext.Provider>
	);
};

export const useAddIdea = () => useContext(AddIdeaContext);
