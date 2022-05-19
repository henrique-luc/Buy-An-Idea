import HeaderHome from "../../Components/HeaderHome";
import { Container, Stack, Typography } from "@mui/material";
import * as S from "../../Components/HeaderHome/style";
import { useModal } from "../../Providers/Modal";
import ModalInvest from "../../Components/ModalInvest";
import ModalEntrepreneur from "../../Components/ModalEntrepreneur";

const RegisterPage = () => {
	const { handleOpenInvestidorRegister, handleOpenEntrepreneurRegister } =
		useModal();
	return (
		<>
			<ModalInvest />
			<ModalEntrepreneur />

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

				<Stack
					maxWidth={"lg"}
					sx={{
						display: "flex",
						height: { xs: "100%", md: "70vh" },
						flexDirection: { xs: "column-reverse", md: "row" },
						justifyContent: "center",
						alignItems: "center",
						marginY: 5,
						marginX: "auto",
					}}
				>
					<Stack>
						<Typography
							variant="h3"
							component={"h2"}
							mb={3}
							sx={{
								maxWidth: "80%",
								fontFamily: "Roboto Slab, serif",
								fontWeight: "bold",
								fontSize: { xs: "2rem", md: "3rem" },
								color: "var(--color-support-2)",
							}}
						>
							Cadastre-se como Empreendedor
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
							nostrud exercitation ullamco laboris nisi ut.
						</Typography>
						<S.ButtonMUI
							onClick={handleOpenEntrepreneurRegister}
							sx={{
								alignSelf: "start",
							}}
						>
							Cadastre-se
						</S.ButtonMUI>
					</Stack>

					<Stack
						sx={{
							marginBottom: { xs: 5, md: 0 },
						}}
					>
						<Typography
							variant="h3"
							component={"h2"}
							mb={3}
							sx={{
								maxWidth: "80%",
								fontFamily: "Roboto Slab, serif",
								fontWeight: "bold",
								color: "var(--color-support-2)",
								fontSize: { xs: "2rem", md: "3rem" },
							}}
						>
							Cadastre-se como Investidor
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
							nostrud exercitation ullamco laboris nisi ut.
						</Typography>
						<S.ButtonMUI
							onClick={handleOpenInvestidorRegister}
							sx={{
								alignSelf: "start",
							}}
						>
							Cadastre-se
						</S.ButtonMUI>
					</Stack>
				</Stack>

				{/* FIM DO CONTEUDO PRINCIPAL */}
			</Container>
		</>
	);
};

export default RegisterPage;
