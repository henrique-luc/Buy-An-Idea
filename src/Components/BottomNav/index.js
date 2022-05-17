import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Box } from "@mui/material";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SwipeableTemporaryDrawer from "../Swipeable";
import { useState } from "react";

const BottomNav = () => {
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
					display: { xs: "block", md: "none" },
					width: "100%",
					position: "fixed",
					bottom: 0,
				}}
			>
				<BottomNavigation
					showLabels
					// value={value}
					// onChange={(event, newValue) => {
					// 	setValue(newValue);
					// }}
					sx={{
						bgcolor: "var(--gray-0)",
					}}
				>
					<BottomNavigationAction
						label="Meu perfil"
						icon={<AccountCircleIcon />}
					/>
					<BottomNavigationAction
						label="Chat"
						icon={<ChatBubbleIcon />}
					/>
					<BottomNavigationAction
						onClick={() => handleOpenSwipable()}
						label="Menu"
						icon={<MenuIcon />}
					/>
				</BottomNavigation>
			</Box>
		</>
	);
};

export default BottomNav;
