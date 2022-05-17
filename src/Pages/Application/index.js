import BottomNav from "../../Components/BottomNav";
import DrawerMenu from "../../Components/DrawerMenu";
import HeaderApplication from "../../Components/HeaderApplication";
import ResponsiveMenu from "../../Components/ResponsiveMenu";
import SwipeableTemporaryDrawer from "../../Components/Swipeable";
import { Container, Stack } from "@mui/material";

const Application = () => {
	return (
		<>
			<HeaderApplication />
			<Stack>
				<DrawerMenu />
				<Container
					sx={{
						width: "100vw",
						minHeight: "100vh",

						marginTop: "5rem",
						marginLeft: "140px",
						bgcolor: "red",
					}}
				>
					Teste
				</Container>
			</Stack>

			{/* <ResponsiveMenu /> */}

			<BottomNav />
		</>
	);
};

export default Application;
