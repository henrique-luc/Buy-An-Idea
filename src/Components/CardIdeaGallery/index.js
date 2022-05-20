import CardIdea from "../CardIdea";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import { Div } from "./style";

const CardIdeaGallery = ({ users }) => {
  return (
    <Div>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        autoplay
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        loopFillGroupWithBlank={true}
        className="swiper-gallery"
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {users.map((user) => {
          if (user.type === "company") {
            return (
              <SwiperSlide key={user.id}>
                <CardIdea
                  nome={user.company.companyName}
                  about={user.idea?.about}
                  video={user.idea?.video}
                  coreBusiness={user.idea?.coreBusiness}
                  payback={user.idea?.payback}
                  valuation={user.idea?.valuation}
                  website={user.idea?.website}
                  twitter={user.idea?.twitter}
                  facebook={user.idea?.facebook}
                  linkedin={user.idea?.linkedin}
                  instagram={user.idea?.instagram}
                />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </Div>
    // <>
    // 	<Grid container spacing={3}>
    // 		{users.map((user) => {
    // 			console.log(user);
    // 			if (user.type === "company") {
    // 				return (
    // 					<Grid item key={user.id}>
    // 						<CardIdea
    // 							nome={user.company.companyName}
    // 							about={user.idea?.about}
    // 							video={user.idea?.video}
    // 							coreBusiness={user.idea?.coreBusiness}
    // 							payback={user.idea?.payback}
    // 							valuation={user.idea?.valuation}
    // 							website={user.idea?.website}
    // 							twitter={user.idea?.twitter}
    // 							facebook={user.idea?.facebook}
    // 							linkedin={user.idea?.linkedin}
    // 							instagram={user.idea?.instagram}
    // 						/>
    // 					</Grid>
    // 				);
    // 			}
    // 		})}
    // 	</Grid>
    // </>
  );
};

export default CardIdeaGallery;
