import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { memo } from "react";

const ContactCardComponent = ({ user, message, whatsapp }) => {
	return (
		<Card sx={{ minWidth: 275, marginBottom: 5, bgcolor: "var(--gray-0)" }}>
			<CardContent>
				<Typography variant="h5" component="div">
					{user.name}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{user.email}
				</Typography>
				<Box
					sx={{
						color: "var(--gray-4)",
						padding: "1rem 2rem",
						borderRadius: "8px",
						maxWidth: "350px",
						fontSize: ".9rem",
					}}
				>
					<Typography
						variant="body2"
						sx={{
							bgcolor: "#ecffe6",
							color: "var(--gray-4)",
							padding: "1rem 2rem",
							borderRadius: "8px",
							maxWidth: "350px",
							fontSize: "1.25rem",
							fontWeight: "600",
						}}
					>
						<Typography
							variant="body2"
							sx={{
								color: "var(--gray-4)",

								borderRadius: "8px",
								maxWidth: "350px",
								fontSize: ".9rem",
								marginBottom: 2,
							}}
						>
							Mensagem:
						</Typography>
						{message}
					</Typography>
				</Box>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
					target="_blank"
				>
					Enviar mensagem para o Whatsapp
				</Button>
			</CardActions>
		</Card>
	);
};

export const ContactCard = memo(ContactCardComponent);
