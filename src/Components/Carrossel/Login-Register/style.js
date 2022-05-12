import styled from "styled-components";

export const Div = styled.div`
  display: none;

  figcaption {
    display: none;
  }

  .swiper-slide {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background: linear-gradient(var(--gradient-green-blue));
    width: 40%;
    height: 100%;
    font-family: "Open Sans", sans-serif;
    font-size: 2.25em;

    .mySwiper {
      color: white;
      width: 70%;
      margin-top: 40%;
    }

    .swiper-slide {
      display: flex;
    }
  }
`;
