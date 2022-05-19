import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { memo } from "react";

const ContactCardComponent = ({ user, message }) => {
	return (
		<Card sx={{ minWidth: 275, marginBottom: 5, bgcolor: "var(--gray-0)" }}>
			<CardContent>
				<Typography variant="h5" component="div">
					{user.name}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					Tecnologia
				</Typography>
				<Typography variant="body2">{message}</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};

export const ContactCard = memo(ContactCardComponent);
