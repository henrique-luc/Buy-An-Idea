import heroImg from "../../assets/hero.png";
import HeaderHome from "../../Components/HeaderHome";
import * as S from "../../Components/HeaderHome/style";
import { Container, Box, Typography } from "@mui/material";
import FooterHome from "../../Components/FooterHome";
import { useHistory } from "react-router-dom";

const Home = () => {
	const history = useHistory();

	return (
		<>
			<Container
				className="main-container"
				sx={{
					minWidth: "100vw",
					minHeight: "100vh",
					bgcolor: "rgb(79, 217, 113)",
					background: `linear-gradient(
					214deg,
					rgba(79, 217, 113, 1) 0%,
					rgba(0, 96, 102, 1) 100%
				)`,
				}}
			>
				<HeaderHome />

				{/* CONTEUDO PRINCIPAL */}

				<Container
					sx={{
						display: "flex",
						flexDirection: { xs: "column-reverse", md: "row" },
						justifyContent: { xs: "center" },
						alignItems: "center",
					}}
				>
					<Box flexGrow={1}>
						<Typography
							variant="h3"
							component={"h2"}
							mb={3}
							sx={{
								fontFamily: "Roboto Slab, serif",
								fontWeight: "bold",
								color: "var(--color-support-2)",
							}}
						>
							A sua ideia tem valor
						</Typography>
						<Typography
							sx={{
								width: { xs: "100%", md: "500px" },
								fontFamily: "Open Sans, sans-serif",
								fontWeight: "500",
								fontSize: "1rem",
								color: "var(--gray-1)",
								marginBottom: "2rem",
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum
						</Typography>
						<S.ButtonMUI onClick={() => history.push("/cadastro")}>
							Cadastre-se
						</S.ButtonMUI>
					</Box>
					<Box
						sx={{
							width: { xs: "300px", md: "500px" },
						}}
					>
						<img
							src={heroImg}
							alt="mulher olhando para o horizonte"
							style={{
								width: "100%",
							}}
						/>
					</Box>
				</Container>

				{/* FIM DO CONTEUDO PRINCIPAL */}

				<FooterHome />
			</Container>
		</>
	);
};

export default Home;
