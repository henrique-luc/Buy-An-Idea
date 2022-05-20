import { useEffect, useState } from "react";
import { users as list } from "../../Services/users";
import { ContactCard } from "../../Components/ContactCard";
import { Box } from "@mui/material";
import { api } from "../../Services/api";
import { useLogin } from "../../Providers/Login";

const Chat = () => {
	// const users = list;
	const [usersList, setUsersList] = useState([]);
	const [myUser, setMyUser] = useState({});
	const { user } = JSON.parse(localStorage.getItem("@buyAnIdea:Login"));

	const getUserById = (id) => {
		usersList.includes((user) => user.id === id);
	};

	useEffect(() => {
		api.get("/users").then((res) => {
			setUsersList(res.data);
			const users = res.data;

			users.map((userData) => {
				if (userData.id === user.id) {
					setMyUser(userData);
				}
			});

			// console.log(res.data);
		});
	}, []);

	useEffect(() => {
		api.get(`/users/${user.id}`).then((res) => setMyUser(res.data));
	}, []);

	return (
		<div>
			<h2>Conversas</h2>
			<Box mt={5}>
				{usersList.map((userData, index) => {
					const data = userData.matches.filter(
						(data) => data.matchId === user.id
					);

					if (data.length > 0)
						return (
							<ContactCard
								key={index}
								user={user}
								message={data[0].message}
								whatsapp={data[0].whatsapp}
							/>
						);
				})}
			</Box>
			<Box mt={5}>
				{myUser !== undefined &&
					myUser.matches.map((match, index) => {
						console.log(match);
					})}
			</Box>
		</div>
	);
};

export default Chat;

{
	/* <ContactCard
							key={index + 10}
							user={getUserById(match.matchId)}
							message={match.message}
							whatsapp={match.whatsapp}
						/> */
}
