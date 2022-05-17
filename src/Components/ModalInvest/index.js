import { useModal } from "../../Providers/Modal";
import { Box, Modal, Stack, IconButton } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import CarouselText from "../../Components/Carrossel/Login-Register";
import InvestRegister from "../../Pages/InvestRegister";

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
				padding: "2rem",
			}}
		>
			<Box
				sx={{
					width: { xs: "100%", md: "100%", lg: "1280px" },
					height: "90vh",
					backgroundColor: "#FFF",
				}}
			>
				<Stack direction={"row"} height={"100%"} position="relative">
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

					<CarouselText />
					<InvestRegister />
				</Stack>
			</Box>
		</Modal>
	);
};

export default ModalInvest;
