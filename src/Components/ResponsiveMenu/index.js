import IconButton from "@mui/material/IconButton";
import { Box, Button, Container, Typography } from "@mui/material";
import SwipeableTemporaryDrawer from "../Swipeable";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ResponsiveMenu = ({ state, setState, handleOpenSwipable }) => {
	return (
		<>
			<SwipeableTemporaryDrawer state={state} setState={setState} />

			{/* <Box
				sx={{
					width: "100%",
					position: "fixed",
					top: 100,
					left: 30,
				}}
			>
				<IconButton
					aria-label="open"
					onClick={() => {
						handleOpenSwipable();
					}}
					sx={{
						display: { xs: "none", md: "flex" },
					}}
				>
					<Typography>Abrir Menu</Typography>
					<KeyboardArrowRightIcon />
				</IconButton>
			</Box> */}
		</>
	);
};

export default ResponsiveMenu;
