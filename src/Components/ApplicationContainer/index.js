import BottomNav from "../../Components/BottomNav";
import HeaderApplication from "../../Components/HeaderApplication";
import ResponsiveMenu from "../../Components/ResponsiveMenu";
import { Container, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ArticleIcon from "@mui/icons-material/Article";
import { usePageLink } from "../../Providers/PageLink";
import { useEffect, useState } from "react";

const ApplicationContainer = ({ children }) => {
	// const location = useLocation();

	// const { allPages } = usePageLink();
	// const [currentPage, setCurrentPage] = useState("");

	// useEffect(() => {
	// 	setCurrentPage(
	// 		allPages.filter((page) => page.link === location.pathname)[0]
	// 	);
	// }, []);

	// useEffect(() => {
	// 	console.log(currentPage);
	// }, []);

	return (
		<Container
			maxWidth="xl"
			disableGutters
			sx={{
				// width: "100vw",
				heigth: "100vh",
			}}
		>
			{/* HEADER DA APLICACAO */}
			<HeaderApplication>
				<ResponsiveMenu />
			</HeaderApplication>

			{/* CONTEUDO DA APLICACAO */}
			<Container
				maxWidth="xl"
				sx={{
					marginY: 15,

					minHeight: "100vh",
					bgcolor: "#FFF",
				}}
			>
				{/* TESTE DE PAGINACAO */}
				{/* <Container
					maxWidth="xl"
					sx={{
						marginBottom: "18px",
					}}
				>
					<Stack
						direction={"row"}
						sx={{
							color: "var(--gray-2)",
						}}
					>
						<ArticleIcon
							sx={{
								marginRight: "8px",
							}}
						/>
						<Typography>Página: {currentPage} </Typography>
					</Stack>
				</Container> */}
				{children}
			</Container>

			{/* MENU RESPONSIVO */}

			<BottomNav />
		</Container>
	);
};

export default ApplicationContainer;
