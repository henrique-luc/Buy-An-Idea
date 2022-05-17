import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Box, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SwipeableTemporaryDrawer from "../Swipeable";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ResponsiveMenu = () => {
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const handleOpenSwipable = () => {
		setState({ ...state, left: true });
	};

	return (
		<>
			<SwipeableTemporaryDrawer state={state} setState={setState} />

			<Box
				sx={{
					width: "100%",
					position: "fixed",
					top: 100,
					left: 30,
				}}
			>
				<IconButton
					aria-label="delete"
					onClick={() => {
						handleOpenSwipable();
					}}
				>
					<Typography>Menu</Typography>
					<KeyboardArrowRightIcon />
				</IconButton>
			</Box>
		</>
	);
};

export default ResponsiveMenu;
