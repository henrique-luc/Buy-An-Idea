import MenuIcon from "@material-ui/icons/Menu";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Box } from "@mui/material";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SwipeableTemporaryDrawer from "../Swipeable";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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

	const history = useHistory();

	return (
		<>
			<SwipeableTemporaryDrawer
				state={state}
				setState={setState}
				sx={{
					display: { xs: "block", md: "none" },
				}}
			/>

			<Box
				sx={{
					display: { xs: "block", md: "none" },
					width: "100%",
					zIndex: "2000",
					position: "fixed",
					bottom: 0,
					borderTop: "2px solid",
					borderColor: "var(--color-support-2)",
				}}
			>
				<BottomNavigation
					showLabels
					// value={value}
					// onChange={(event, newValue) => {
					// 	setValue(newValue);
					// }}
					sx={{
						bgcolor: "var(--color-support-2)",
					}}
				>
					<BottomNavigationAction
						label="Meu perfil"
						icon={<AccountCircleIcon />}
						onClick={() => history.push("/perfil")}
					/>
					<BottomNavigationAction
						label="Matches"
						icon={<FavoriteBorderIcon />}
						onClick={() => history.push("/matches")}
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
