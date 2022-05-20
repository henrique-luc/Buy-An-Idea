import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { InfoCard } from "../InterpriseCard/styles";
import Insta from "../../assets/Insta.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	minWidth: 400,
	bgcolor: "background.paper",
	border: "2px solid #FDFDFD",
	borderRadius: "10px",
	boxShadow: 18,
	p: 4,

	"& h3": {
		color: "var(--color-secundary)",
		fontSize: "36px",
	},

	"& h4": {
		fontSize: "1.25rem",
		marginTop: "12px",
		color: "var(--gray-4)",
	},

	"& p": {
		fontSize: "1rem",
		color: "var(--gray-3)",
		overflow: "hidden",
		textOverflow: "ellipsis",
		maxHeight: "200px",
	},
};

const CardIdea = ({
	nome,
	video,
	about,
	coreBusiness,
	payback,
	valuation,
	document,
	website,
	facebook,
	instagram,
	linkedin,
	twitter,
	ideaValue,
}) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const embedCodeVideo = video && video.slice(32, 43);

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					overflow: "scroll",
				}}
			>
				<Box sx={style}>
					<h3>{nome}</h3>

					<div className="InfoCardSobre">
						<h4>Sobre</h4>
						<p>{about}</p>
					</div>
					<div className="InfoCardValor">
						<h4>Proposta inicial</h4>
						<p>{ideaValue}</p>
					</div>
					<div className="InfoCardPayback">
						<h4>Payback</h4>
						<p>
							{Number(payback).toLocaleString("pt-br", {
								style: "currency",
								currency: "BRL",
							})}
						</p>
					</div>
					<div className="InfoCardValuation">
						<h4>Valuation</h4>
						<p>
							{Number(valuation).toLocaleString("pt-br", {
								style: "currency",
								currency: "BRL",
							})}
						</p>
					</div>

					<div className="InfoCardSite">
						<h4>Site da empresa</h4>
						<a href={`${website}`} target="_blank">
							{website}
						</a>
					</div>
				</Box>
			</Modal>

			<Card
				sx={{
					width: 270,
					border: "2px solid var(--color-secundary)",
					borderRadius: "12px",
					fontFamily: "Open Sans",
				}}
			>
				<CardMedia
					component="iframe"
					image={`https://www.youtube.com/embed/${embedCodeVideo}`}
					sx={{
						border: "none",
					}}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{nome}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						sx={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							maxHeight: "64px",
							minHeight: "64px",
						}}
					>
						{about}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						onClick={() => {
							handleOpen();
						}}
					>
						Veja mais
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default CardIdea;
