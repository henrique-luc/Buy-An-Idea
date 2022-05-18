import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CustomIconButton = styled(Button)`
	color: var(--gradient-green-blue);
	text-transform: none;
	margin-left: 1rem;

	&:hover {
		color: var(--color-support-2);
	}

	.ml-4 {
		margin-left: 4px;
	}
`;
