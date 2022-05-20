import CardIdea from "../CardIdea";
import { Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css/bundle";

const CardIdeaGallery = ({ users }) => {
	return (
		<>
			<Swiper
				modules={[Pagination, Autoplay, Navigation]}
				spaceBetween={5}
				slidesPerView={5}
				autoplay
				pagination
				navigation
			>
				{users.map((user) => {
					console.log(user);
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
		</>
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
