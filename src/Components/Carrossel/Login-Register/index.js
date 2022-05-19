import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import Logo from "../../../assets/logo_2.svg";

import { Div } from "./style.js";

const CarouselText = () => {
  return (
    <Div>
      <img src={Logo} alt="logo" />

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          "Sem uma língua comum não se podem concluir os negócios." - Confúcio
        </SwiperSlide>
        <SwiperSlide>
          Nós unimos o útil ao agradável para fazer acontecer parcerias
          brilhantes.
        </SwiperSlide>
        <SwiperSlide>
          As chances de receber melhores propostas aumenta com um bom video de
          apresentação.
        </SwiperSlide>
        <SwiperSlide>
          O BuyAnIdea é um espaço virtual, onde estão apresentados as melhores
          empresas esperando pelo seu investimento.
        </SwiperSlide>
      </Swiper>
    </Div>
  );
};

export default CarouselText;
