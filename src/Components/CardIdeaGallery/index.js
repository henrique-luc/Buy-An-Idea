import CardIdea from "../CardIdea";
import { Grid } from "@mui/material";

const CardIdeaGallery = () => {
	return (
		<>
			<Grid container spacing={3}>
				<Grid item>
					<CardIdea
						nome={"Nome da empresa"}
						about={"Lorem ipsum avada kedavra"}
					/>
				</Grid>
				<Grid item>
					<CardIdea
						nome={"Nome da empresa"}
						about={"Lorem ipsum avada kedavra"}
					/>
				</Grid>
				<Grid item>
					<CardIdea
						nome={"Nome da empresa"}
						about={"Lorem ipsum avada kedavra"}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default CardIdeaGallery;
