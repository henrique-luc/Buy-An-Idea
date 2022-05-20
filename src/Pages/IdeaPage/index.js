import { IntrerPriseCard } from "../../Components/InterpriseCard/";
import { useLogin } from "../../Providers/Login";
import { Container, CustomCard, TitleIdea } from "./style";
import { Redirect } from "react-router-dom";
import CardIdeaGallery from "../../Components/CardIdeaGallery";
import { useState, useEffect } from "react";
import { api } from "../../Services/api";
import {
	Stack,
	Typography,
	Box,
	IconButton,
	Button,
	Divider,
} from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useHistory } from "react-router-dom";

const IdeaPage = () => {
	const [usersList, setUsersList] = useState([]);
	const history = useHistory();

	useEffect(() => {
		api.get("/users").then((res) => {
			setUsersList(res.data);
		});
	}, []);

	const style = (theme) => ({
		display: "flex",
		flexDirection: "column",
		bgcolor: "var(--color-secundary)",

		"&:hover": {
			bgcolor: "transparent",
		},
	});

	return (
		<>
			<Box>
				<Stack
					direction="column"
					justifyContent={"center"}
					alignItems={"center"}
					sx={{
						border: "2px solid var(--gray-1)",
						padding: "2rem",
						bgcolor: "var(--gray-0)",
						borderRadius: "10px",
						color: "var(--gray-3)",
						marginBottom: "24px",
					}}
				>
					<Typography>Ainda não cadastrou a sua ideia?</Typography>
					<Button
						sx={{
							textTransform: "none",
							fontFamily: "Open Sans",
							fontSize: "1.5rem",
							bgcolor: "var(--color-secundary)",
							color: "var(--gray-0)",
							padding: "1rem 2rem",
							flexDirection: {xs:"column",md:"row"},

							"&:hover": {
								bgcolor: "var(--color-primary)",
							},
						}}
						onClick={() => history.push("/adicionar-ideia")}
					>
						<AddReactionIcon
							sx={{
								marginRight: "8px",
							}}
						/>
						Cadastre a sua primeira ideia
					</Button>
				</Stack>
			</Box>
			<Typography
				sx={{
					fontSize: "1.5rem",
					margin: "4rem",
					color: "var(--gray-3)",
					textAlign: "center",
				}}
			>
				Inspire-se com as ideias de outros empreendedores!
			</Typography>
			<Divider
				sx={{
					marginBottom: "2rem",
				}}
			/>
			<CardIdeaGallery users={usersList} />;
		</>
	);
};

export default IdeaPage;
