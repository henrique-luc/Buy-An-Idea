import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { usePageLink } from "../../Providers/PageLink";
import { useLocation } from "react-router-dom";
import { useLogin } from "../../Providers/Login";

export default function SwipeableTemporaryDrawer({ state, setState }) {
	const { investorPages, entrepreneurPages } = usePageLink();
	const history = useHistory();

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const { user } = useLogin();

	const pages = () => {
		if (user.user.type === "company") return entrepreneurPages;

		return investorPages;
	};

	const location = useLocation();

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			{/* BOTAO DO MENU */}

			<IconButton
				aria-label="close menu"
				onClick={() => {
					toggleDrawer("left", false);
				}}
				sx={{
					color: "var(--color-secundary)",
					marginTop: 5,
					marginLeft: 3,
					"&:hover": {
						color: "var(--color-support-1)",
						bgcolor: "transparent",
					},
				}}
			>
				<KeyboardArrowLeftIcon />
				<Typography
					sx={{
						fontFamily: "Roboto Slab",
					}}
				>
					Fechar Menu
				</Typography>
			</IconButton>

			{/* LISTA COM OS LINKS RENDERIZADOS */}
			<Divider />

			<List
				sx={{
					color: "var(--gray-3)",
					fontFamily: "Open Sans",
					marginTop: 5,
				}}
			>
				{pages().map((page) => (
					<ListItem
						key={page.name}
						disablePadding
						selected={page.link === location.pathname}
					>
						<ListItemButton onClick={() => history.push(page.link)}>
							<ListItemText
								primary={page.name}
								sx={{
									"&:hover": {
										color: "var(--gray-4)",
										bgColor: "var(--color-secundary)",
									},
								}}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			{["left", "right", "top", "bottom"].map((anchor) => (
				<React.Fragment key={anchor}>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
}
