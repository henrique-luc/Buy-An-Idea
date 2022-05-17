import logo from "../../assets/logo_1.svg";
import * as React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Container,
	Typography,
	Menu,
	MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const pages = ["Login", "Cadastre-se"];

const HeaderApplication = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [value, setValue] = React.useState(0);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<>
			<AppBar
				position="static"
				sx={{ bgcolor: "var(--gray-0)", boxShadow: "none" }}
			>
				<Container maxWidth="lg" sx={{ padding: "1rem 0" }}>
					<Toolbar disableGutters>
						<Box>
							<img src={logo} alt="logo" width={200} />
						</Box>

						<Box
							sx={{
								margin: "0 auto",
								display: { xs: "none", md: "flex" },
							}}
						>
							<IconButton>
								<AccountCircleIcon />
								<Typography>Meu perfil</Typography>
							</IconButton>

							<IconButton>
								<ChatBubbleIcon />
								<Typography>Chat</Typography>
							</IconButton>
						</Box>
						<IconButton
							sx={{
								marginLeft: "auto",
							}}
						>
							<ExitToAppIcon />
							<Typography>Sair</Typography>
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>

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
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
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
					<BottomNavigationAction label="Menu" icon={<MenuIcon />} />
				</BottomNavigation>
			</Box>
		</>
	);
};

export default HeaderApplication;
