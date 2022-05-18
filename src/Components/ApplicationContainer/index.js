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
				<HeaderApplication />

				{/* CONTEUDO DA APLICACAO */}
				<Container
					sx={{
						marginTop: 20,
						minHeight: "100vh",
						bgcolor: "var(--gray-0)",
					}}
				>
					{children}
				</Container>

				{/* MENU RESPONSIVO */}
				<ResponsiveMenu />
				<BottomNav />
			</Box>
		</>
	);
};

export default ApplicationContainer;
