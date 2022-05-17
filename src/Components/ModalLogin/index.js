import { useModal } from "../../Providers/Modal";
import { Box, Modal, Stack, IconButton, Container } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import Login from "../../Pages/Login";
import CarouselText from "../../Components/Carrossel/Login-Register";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../assets/logo_2.svg";

const ModalLogin = () => {
	const { handleCloseLoginModal, openLoginModal } = useModal();

	return (
		<Modal
			open={openLoginModal}
			onClose={handleCloseLoginModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			sx={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "Center",
				padding: "2rem",
			}}
		>
			<Box
				sx={{
					width: { xs: "100%", md: "100%", lg: "75vw" },
					height: "90vh",
					backgroundColor: "#FFF",
				}}
			>
				<Stack
					direction={"row"}
					height={"100%"}
					width="100%"
					position="relative"
				>
					{/* ICONE PARA FECHAR O CARROSSEL */}
					<IconButton
						onClick={handleCloseLoginModal}
						aria-label="close"
						size="large"
						sx={{
							position: "absolute",
							top: 10,
							right: 15,
						}}
					>
						<CloseIcon />
					</IconButton>

					{/* //CONTEUDO DO CARROSSEL */}
					<Container
						sx={{
							width: { xs: 0, md: "40%" },
							display: { xs: "none", md: "flex" },
							justifyContent: "center",
							alignItems: "center",
							background: "rgba(0, 96, 102)",
							fontSize: "1.5rem",
							fontFamily: "Open Sans",
							fontWeight: "500",
							color: "var(--gray-0)",
						}}
					>
						<Box
							sx={{
								width: "60%",
							}}
						>
							<img
								src={logo}
								alt="logo"
								style={{
									width: 200,
									marginBottom: 48,
								}}
							/>
							<Swiper
								modules={[Pagination, Autoplay]}
								spaceBetween={30}
								slidesPerView={1}
								autoplay={true}
								className="mySwiper"
							>
								<SwiperSlide className="swiper-slide">
									lorem ipsum dolor sit amet, consectetur
									adipiscing lorem ipsum dolor sit amet lorem
									ipsum dolor sit amet, consectetur adipiscing
									lorem ipsum dolor sit amet lorem ipsum dolor
									sit amet
								</SwiperSlide>
								<SwiperSlide>
									lorem ipsum dolor sit amet, consectetur
									adipiscing lorem ipsum dolor sit amet lorem
									ipsum dolor sit amet, consectetur adipiscing
									lorem ipsum dolor sit amet lorem ipsum dolor
									sit amet
								</SwiperSlide>
								<SwiperSlide>
									lorem ipsum dolor sit amet, consectetur
									adipiscing lorem ipsum dolor sit amet lorem
									ipsum dolor sit amet, consectetur adipiscing
									lorem ipsum dolor sit amet lorem ipsum dolor
									sit amet
								</SwiperSlide>
							</Swiper>
						</Box>
					</Container>

					{/* FIM DO CONTEUDO DO CARROSSEL */}

					{/* <CarouselText /> */}

					{/* SESSAO DE LOGIN */}
					<Login />
				</Stack>
			</Box>
		</Modal>
	);
};

export default ModalLogin;
