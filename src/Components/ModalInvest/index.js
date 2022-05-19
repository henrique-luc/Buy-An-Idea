import { useModal } from "../../Providers/Modal";
import { Box, Modal, Stack, IconButton, Container } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import InvestRegister from "../InvestRegister";

const ModalInvest = () => {
  const { handleCloseInvestidorRegister, openInvestidorRegister } = useModal();
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

          <InvestRegister />
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalInvest;
