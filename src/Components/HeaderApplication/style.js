import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonMUI = styled(Button)`
	box-sizing: border-box;
	background-color: var(--color-secundary);
	text-transform: none;
	color: var(--dirty-white);
	font-weight: bold;
	padding: 0.75rem 2rem;
	font-size: 1rem;

	transition: all 0.2s ease;

	&:hover {
		background-color: var(--dirty-white);
		color: var(--color-secundary);
		box-shadow: none;
	}
`;

export const ButtonOutlinedMUI = styled(Button)`
	box-sizing: border-box;
	border: 2px solid var(--color-secundary);
	margin-right: 1rem;
	text-transform: capitalize;
	color: var(--dirty-white);
	font-weight: bold;
	font-size: 1rem;
	padding: 0.75rem 2rem;
	transition: all 0.2s ease;

	&:hover {
		background-color: var(--dirty-white);
		color: var(--color-secundary);
		box-shadow: none;
		border: none;
	}
`;
