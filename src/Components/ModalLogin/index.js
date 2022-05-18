import { useModal } from "../../Providers/Modal";
import { Box, Modal, Stack, IconButton, Container } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import Login from "../Login";
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
        alignItems: "center",
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

          {/* SESSAO DE LOGIN */}
          <Login />
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalLogin;
