import styled from "styled-components";

export const InvestidorContainer = styled.div`
	width: 100%;
	margin-top: -240px;

	overflow-x: hidden;

	display: flex;
	flex-direction: column;
	align-items: center;

	.ApoieEstaIdeia {
		width: 305px;
		gap: 10px;
		text-align: center;
		flex-direction: column;
		margin: 0 auto;
		display: none;
		/* display: ${({ isInInfoCard }) =>
			isInInfoCard === true
				? "flex"
				: "none"}; --> caso seja decidido implementar de fato esta feature extra */
		margin-bottom: 64px;
	}

	.ApoieEstaIdeia button {
		width: 196px;
		height: 34px;
		margin: 0 auto;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		border: none;
		gap: 10px;

		background-color: #b2ff9e;
	}

	.ApoieEstaIdeia h6 {
		font-weight: 700;
		font-size: 18px;

		color: #1dd3b0;
	}
`;
