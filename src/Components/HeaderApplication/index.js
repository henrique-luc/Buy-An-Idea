import logo from "../../assets/logo_2.svg";
import * as React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Container,
	Typography,
	Divider,
	Stack,
	IconButton,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { CustomIconButton } from "./style";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ResponsiveMenu from "../ResponsiveMenu";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderApplication = () => {
	const history = useHistory();

	const handleLogout = () => {
		history.push("/");
		localStorage.removeItem("@buyAnIdea:Login");
	};

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
			<ResponsiveMenu
				state={state}
				setState={setState}
				handleOpenSwipable={handleOpenSwipable}
			/>
			<AppBar
				position="fixed"
				sx={{
					background: `linear-gradient(
                        214deg,
                        rgba(79, 217, 113, 1) 0%,
                        rgba(0, 96, 102, 1) 100%
                    )`,
					boxShadow: "none",
					zIndex: 2,
				}}
			>
				<Container maxWidth="xl" sx={{ padding: ".5rem 0" }}>
					<Toolbar
						disableGutters
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						{/* LOGO E ICONE DO MENU RESPONSIVO */}

						<Stack direction={"row"}>
							<img src={logo} alt="logo" width={150} />

							{/* ICONE MENU */}
							<IconButton
								onClick={() => handleOpenSwipable()}
								sx={{
									display: { xs: "none", md: "flex" },
									fontSize: "large",
									color: "var(--color-secundary)",
									marginLeft: 3,
								}}
							>
								<MenuIcon />
							</IconButton>
						</Stack>

						<Box
							sx={{
								display: { xs: "none", md: "flex" },
							}}
						>
							{/* BOTAO PERFIL*/}
							<CustomIconButton
								onClick={() => history.push("/perfil")}
							>
								<AccountCircleIcon />
								<Typography className="ml-4">
									Meu perfil
								</Typography>
							</CustomIconButton>

							{/* BOTAO CHAT */}
							<CustomIconButton>
								<ChatBubbleIcon />
								<Typography className="ml-4">Chat</Typography>
							</CustomIconButton>

							<Divider
								orientation="vertical"
								flexItem
								sx={{
									marginLeft: "20px",
									marginRight: "4px",
								}}
							/>

							{/* BOTAO SAIR */}

							<CustomIconButton onClick={() => handleLogout()}>
								<ExitToAppIcon />
								<Typography className="ml-4">Sair</Typography>
							</CustomIconButton>
						</Box>
						{/* BOTAO SAIR RESPONSIVO */}
						<CustomIconButton
							sx={{
								display: { xs: "flex", md: "none" },
							}}
							onClick={() => handleLogout()}
						>
							<ExitToAppIcon />
							<Typography className="ml-4">Sair</Typography>
						</CustomIconButton>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};

export default HeaderApplication;
