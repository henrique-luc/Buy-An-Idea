import { useCallback, useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import { useMessage } from "../Message";

export const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
	const [loggedUser, setLoggedUser] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const { getMessageObj } = useMessage();

	const getMatch = () => {
		const userData = JSON.parse(localStorage.getItem("@buyAnIdea:Login"));

		userData &&
			api
				.get(`/users/${userData.user.id}`, {
					headers: {
						Authorization: `Bearer ${userData.accessToken}`,
					},
				})
				.then((res) => {
					setTimeout(() => {
						setIsLoading(true);
					}, 1500);
					setLoggedUser(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
	};

	const userData = JSON.parse(localStorage.getItem("@buyAnIdea:Login"));
	const getUserInfo = userData && api.get(`/users/${userData.user.id}`);

	const acceptMatch = async (objData) => {
		const { data } = await getUserInfo;
		const { id, matches, email, password } = data;
		// console.log(objData);
		// console.log(data);

		api.patch(
			`/users/${id}`,
			{ matches: [...matches, objData] },
			{
				headers: {
					Authorization: `Bearer ${userData.accessToken}`,
				},
				body: {
					userId: id,
					email: email,
					password: password,
				},
			}
		)
			.then((res) => {
				toast.success("Match Realizado");
				setTimeout(() => {
					setIsLoading(false);
				}, 1500);
			})
			.catch((err) => toast.error("Ops! Algo deu errado"));
	};

	const refuseMatch = (userId) => {
		const { user, accessToken } = JSON.parse(
			localStorage.getItem("@buyAnIdea:Login")
		);

		const { id, email, password } = user;

		const pending = loggedUser.matches.filter(
			(match) => match.id !== userId
		);

		api.patch(
			`/users/${id}`,
			{ matches: pending },
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
				body: {
					userId: id,
					email: email,
					password: password,
				},
			}
		)
			.then((res) => {
				toast.success("Match Recusado");
				setTimeout(() => {
					setIsLoading(true);
				}, 1500);
			})
			.catch((err) => toast.error("Ops! Algo deu errado"));
	};

	return (
		<>
			<MatchContext.Provider
				value={{
					isLoading,
					setIsLoading,
					loggedUser,
					getMatch,
					setLoggedUser,
					acceptMatch,
					refuseMatch,
				}}
			>
				{children}
			</MatchContext.Provider>
		</>
	);
};

export const useMatch = () => useContext(MatchContext);
