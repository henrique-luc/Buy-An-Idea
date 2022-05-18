import BottomNav from "../../Components/BottomNav";
import HeaderApplication from "../../Components/HeaderApplication";
import ResponsiveMenu from "../../Components/ResponsiveMenu";
import { Container, Box } from "@mui/material";

const ApplicationContainer = ({ children }) => {
	return (
		<>
			<Box
				sx={{
					width: "100vw",
					heigth: "100vh",
					bgcolor: "#FFF",
				}}
			>
				{/* HEADER DA APLICACAO */}
				<HeaderApplication>
					<ResponsiveMenu />
				</HeaderApplication>

				{/* CONTEUDO DA APLICACAO */}
				<Container
					sx={{
						marginY: 15,
						minHeight: "100vh",
						bgcolor: "#FFF",
					}}
				>
					{children}
				</Container>

				{/* MENU RESPONSIVO */}

				<BottomNav />
			</Box>
		</>
	);
};

export default ApplicationContainer;
