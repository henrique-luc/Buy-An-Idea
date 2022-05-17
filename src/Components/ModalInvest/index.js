import { useModal } from "../../Providers/Modal";
import { Box, Modal, Stack, IconButton, Container } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import InvestRegister from "../InvestRegister";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../assets/logo_2.svg";

const ModalInvest = () => {
	const { handleCloseInvestidorRegister, openInvestidorRegister } =
		useModal();
	return (
		<Modal
			open={openInvestidorRegister}
			onClose={handleCloseInvestidorRegister}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			sx={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "Center",
				padding: { xs: "1rem", md: "2rem" },
				overflow: "scroll",
			}}
		>
			<Box
				sx={{
					width: { xs: "100%", md: "100%", lg: "90%" },
					minHeight: "90vh",
					backgroundColor: "#FFF",
				}}
			>
				<Stack
					direction={"row"}
					height={"100%"}
					width="100%"
					position="relative"
				>
					<IconButton
						onClick={handleCloseInvestidorRegister}
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
							width: { xs: 0, md: 0, lg: "40%" },
							display: { xs: "none", md: "none", lg: "flex" },
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
					<InvestRegister />
				</Stack>
			</Box>
		</Modal>
	);
};

export default ModalInvest;
