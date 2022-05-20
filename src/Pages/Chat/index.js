import { useEffect, useState } from "react";
import { users as list } from "../../Services/users";
import { ContactCard } from "../../Components/ContactCard";
import { Box, Typography } from "@mui/material";
import { api } from "../../Services/api";
import { useLogin } from "../../Providers/Login";

const Chat = () => {
	// const users = list;
	const [usersList, setUsersList] = useState([]);
	const { user } = JSON.parse(localStorage.getItem("@buyAnIdea:Login"));

	useEffect(() => {
		api.get("/users").then((res) => {
			setUsersList(res.data);
			const users = res.data;
		});
	}, []);

	return (
		<div>
			<Typography
				sx={{
					fontSize: { xs: "36px", md: "48px" },
					color: "var(--color-primary)",
					fontFamily: "Roboto Slab",
					fontWeight: "bold",
				}}
			>
				Matches
			</Typography>
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
		</div>
	);
};

export default Chat;
