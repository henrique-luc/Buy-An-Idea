import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Box, styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { useMessage } from "../../Providers/Message";
import SwitchLabel from "../Switch";
import { Box as BoxSwitch } from "@mui/material/";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import TrapFocus from "@mui/base/TrapFocus";
import { useModal } from "../../Providers/Modal";
import { InterpriseListContext } from "../../Providers/interpriseList";
import { useMatch } from "../../Providers/Match";

const BackdropUnstyled = React.forwardRef((props, ref) => {
	const { open, className, ...other } = props;
	return (
		<div
			className={clsx({ "MuiBackdrop-open": open }, className)}
			ref={ref}
			{...other}
		/>
	);
});

BackdropUnstyled.propTypes = {
	className: PropTypes.string.isRequired,
	open: PropTypes.bool,
};

const Modal = styled(ModalUnstyled)`
	position: fixed;
	z-index: 1300;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--gray-3);
`;

const Backdrop = styled(BackdropUnstyled)`
	z-index: -1;
	position: fixed;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	-webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
	border: "2px solid var(--color-secundary)",
	boxShadow: 24,
	padding: "2rem 3rem",
	borderRadius: "12px",
});

const ModalSendMessage = ({ id }) => {
	const [whatsapp, setWhatsapp] = useState("");
	const [message, setMessage] = useState("");
	const { getMessageObj } = useMessage();
	const { acceptMatch } = useMatch();
	const {
		openMessageModal,
		handleOpenMessageModal,
		handleCloseMessageModal,
	} = useModal();
	const { cardIsOpen, setCardIsOpen, counter, setCounter } = React.useContext(
		InterpriseListContext
	);

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={openMessageModal}
				onClose={handleCloseMessageModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
			>
				<Fade in={openMessageModal} timeout={300}>
					<Box sx={style}>
						<IconButton
							sx={{
								position: "absolute",
								top: 0,
								right: 0,
								padding: "1rem",
							}}
							onClick={() => {
								handleCloseMessageModal();
							}}
						>
							<CloseIcon />
						</IconButton>
						<h3 id="transition-modal-title">
							Escreva sua mensagem para um primeio contato:
						</h3>
						<Stack mt={3}>
							<textarea
								type="text"
								placeholder="Escreva sua mensagem ..."
								name="mensagem"
								id="mensagem"
								onChange={(e) => setMessage(e.target.value)}
								style={{
									padding: "18px",
									resize: "none",
									maxlength: "100",
								}}
							/>

							<BoxSwitch
								sx={{
									display: "flex",
									alignItems: "center",
									flexDirection: "column",
								}}
							>
								<Stack
									direction={"row"}
									alignItems="center"
									justifyContent={"space-between"}
									minWidth="100%"
								>
									<input
										name="whatsapp"
										type="text"
										style={{
											padding: ".7rem",
											margin: "12px 0",
											width: "100%",
										}}
										placeholder="Digite seu Whatsapp"
										onChange={(e) =>
											setWhatsapp(e.target.value)
										}
									/>

									{/* INPUT TEXT PARA O NUMERO DE WHATSAPP */}
								</Stack>
							</BoxSwitch>
							<Button
								onClick={() => {
									setCounter(counter + 1);
									acceptMatch(
										getMessageObj(message, id, whatsapp)
									);
									handleCloseMessageModal();
								}}
							>
								Enviar
							</Button>
						</Stack>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default ModalSendMessage;
