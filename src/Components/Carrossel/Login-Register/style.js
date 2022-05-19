import styled from "styled-components";

export const Div = styled.div`
	background: linear-gradient(var(--gradient-green-blue));
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 4rem;

	img {
		width: 200px;
	}

	figcaption {
		display: none;
	}

	@media screen and (min-width: 768px) {
		width: 40%;
		/* height: 40%; */
		font-family: "Open Sans", sans-serif;
		font-size: 1.5em;

		.mySwiper {
			display: flex;
			flex-direction: column;
			color: white;
			width: 100%;
		}

		.swiper-slide {
			display: flex;
			margin-top: 70px;
		}
	}

	@media screen and (max-width: 1024px) {
		& {
			display: none;
		}
	}
`;
