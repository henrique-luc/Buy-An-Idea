import { useState } from "react";
import { users as list } from "../../Services/users";
import { ContactCard } from "../../Components/ContactCard";
import { Box } from "@mui/material";

const Chat = () => {
	// const users = list;
	const myId = 2;

	const [users, setUsers] = useState(list);
	return (
		<div>
			<h2>Conversas</h2>
			<Box mt={5}>
				{users.map((user, index) => {
					if (user.type !== "company") {
						const data = user.matches.filter(
							(data) => data.companyId === myId
						);

						console.log(data);

						if (data.length > 0)
							return (
								<ContactCard
									key={index}
									user={user}
									message={data[0].message}
								/>
							);
					}
				})}
			</Box>
		</div>
	);
};

export default Chat;
