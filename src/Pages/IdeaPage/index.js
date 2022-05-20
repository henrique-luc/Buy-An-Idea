import { IntrerPriseCard } from "../../Components/InterpriseCard/";
import { useLogin } from "../../Providers/Login";
import { Container, CustomCard, TitleIdea } from "./style";
import { Redirect } from "react-router-dom";
import CardIdeaGallery from "../../Components/CardIdeaGallery";

const IdeaPage = () => {
	const { user } = useLogin();

	// if(!user){
	//   return <Redirect to={"/"}/>
	// }
	// if(user.user.type !== "company"){
	//   return <Redirect to={"/dashboard/investidor"}/>
	// }

	return (
		<>
			<h2>Galeria</h2>
			<CardIdeaGallery />
		</>

		// <Container>
		//   <TitleIdea>Aqui estão suas Ideias</TitleIdea>
		//   <div>
		//     <CustomCard>
		//       <IntrerPriseCard empresa={user.user} />
		//     </CustomCard>
		//   </div>
		// </Container>
	);
};

export default IdeaPage;
