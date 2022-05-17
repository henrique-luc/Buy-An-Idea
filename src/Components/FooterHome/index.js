import { Container, Typography, Stack, Avatar } from "@mui/material";

const FooterHome = () => {
	return (
		<Container
			sx={{
				color: "var(--color-support-1)",
				marginY: "2rem",
			}}
		>
			<Typography variant="body1" mb={3}>
				🚀 made by
			</Typography>

			<Stack direction="row" spacing={3} flexWrap="wrap">
				<Stack direction={"column"} alignItems="center" mb={2}>
					<Avatar
						alt="Henrique"
						src="https://ca.slack-edge.com/TQZR39SET-U02N3875N58-adf63aa5b040-512"
					/>
					<Typography variant="caption" mt={1}>
						Henrique
					</Typography>
				</Stack>

				<Stack direction={"column"} alignItems="center">
					<Avatar
						alt="Humberto"
						src="https://ca.slack-edge.com/TQZR39SET-U02N38ZD9GB-1c33c0441a48-512"
					/>
					<Typography variant="caption" mt={1}>
						Humberto
					</Typography>
				</Stack>
				<Stack direction={"column"} alignItems="center">
					<Avatar
						alt="Leonardo"
						src="https://ca.slack-edge.com/TQZR39SET-U02MNJS6JP9-176d4b5b39ee-512"
					/>
					<Typography variant="caption" mt={1}>
						Leonardo
					</Typography>
				</Stack>

				<Stack direction={"column"} alignItems="center">
					<Avatar
						alt="Pedro"
						src="https://ca.slack-edge.com/TQZR39SET-U02NSV75XJL-210d0cc58ecc-512"
					/>
					<Typography variant="caption" mt={1}>
						Pedro
					</Typography>
				</Stack>
				<Stack direction={"column"} alignItems="center">
					<Avatar
						alt="Victória"
						src="https://ca.slack-edge.com/TQZR39SET-U02MWGWRATG-90d28cf7785d-512"
					/>
					<Typography variant="caption" mt={1}>
						Victoria
					</Typography>
				</Stack>
			</Stack>
		</Container>
	);
};

export default FooterHome;
