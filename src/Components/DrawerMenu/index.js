import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button } from "@mui/material";

const drawerWidth = 240;

const DrawerMenu = () => {
	return (
		<Drawer
			sx={{
				display: { xs: "none", md: "block" },
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
				},
				zIndex: 1,
			}}
			variant="permanent"
			anchor="left"
		>
			<Divider />
			<List
				sx={{
					marginTop: "8rem",
				}}
			>
				{["Investidores", "Analytics"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
				<ListItem>
					<Button>Adicionar ideia</Button>
				</ListItem>
			</List>
		</Drawer>
	);
};

export default DrawerMenu;
