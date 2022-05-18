import logo from "../../assets/logo_2.svg";
import * as React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Container,
	Typography,
	Divider,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { CustomIconButton } from "./style";

const HeaderApplication = () => {
	const history = useHistory()

	return (
		<>
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
						}}
					>
						<Box>
							<img src={logo} alt="logo" width={180} />
						</Box>

						<Box
							sx={{
								display: { xs: "none", md: "flex" },
							}}
						>
							{/* BOTAO PERFIL*/}
							<CustomIconButton >
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

							<CustomIconButton>
								<ExitToAppIcon />
								<Typography className="ml-4">Sair</Typography>
							</CustomIconButton>
						</Box>

						{/* BOTAO SAIR RESPONSIVO */}

						<CustomIconButton
							sx={{
								display: { xs: "flex", md: "none" },
							}}
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
