import { ImageBox } from "./style";

// import logo from "../../assets/logo_2.svg";
import heroImg from "../../assets/hero.png";
import HeaderHome from "../../Components/HeaderHome";
import { Container, Box, Typography } from "@mui/material";

const Home = () => {
	return (
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
			<Container
				sx={{
					display: "flex",
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
							width: "500px",
							fontFamily: "Open Sans, sans-serif",
							fontWeight: "500",
							fontSize: "1rem",
							color: "var(--gray-1)",
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum
					</Typography>
					{/* <h2>A sua ideia tem valor</h2> */}
					{/* <p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum
					</p> */}
				</Box>
				<Box>
					<img
						src={heroImg}
						alt="mulher olhando para o horizonte"
						width={500}
					/>
				</Box>
			</Container>
		</Container>

		// <Container>
		// 	<HeaderHome />
		// 	{/* <Header>
		// 		<HeaderContent>
		// 			<img src={logo} alt="logo" />
		// 			<ul>
		// 				<li>
		// 					<a href="#" className="header-link--outline">
		// 						Login
		// 					</a>
		// 				</li>
		// 				<li>
		// 					<a href="#">Cadastre-se</a>
		// 				</li>
		// 			</ul>
		// 		</HeaderContent>
		// 	</Header> */}
		// 	<HeroContent>
		// 		<div className="content-left">
		// 			<h2>A sua ideia tem valor</h2>
		// 			<p>
		// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		// 				sed do eiusmod tempor incididunt ut labore et dolore
		// 				magna aliqua. Ut enim ad minim veniam, quis nostrud
		// 				exercitation ullamco laboris nisi ut aliquip ex ea
		// 				commodo consequat. Duis aute irure dolor in
		// 				reprehenderit in voluptate velit esse cillum dolore eu
		// 				fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		// 				non proident, sunt in culpa qui officia deserunt mollit
		// 				anim id est laborum
		// 			</p>
		// 			<ul>
		// 				<li>
		// 					<a>Cadastre-se</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 		<div className="content-right">
		// 			<img src={heroImg} alt="mulher olhando para o horizonte" />
		// 		</div>
		// 	</HeroContent>
		// </Container>
	);
};

export default Home;
