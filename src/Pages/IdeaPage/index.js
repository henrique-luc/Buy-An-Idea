import { IntrerPriseCard } from "../../Components/InterpriseCard/";
import { useLogin } from "../../Providers/Login";
import { Container, CustomCard, TitleIdea } from "./style";
import { Redirect } from "react-router-dom"

const IdeaPage = () => {
  const { user } = useLogin();

  if(!user){
    return <Redirect to={"/"}/>
  }
  if(user.user.type !== "company"){
    return <Redirect to={"/dashboard/investidor"}/>
  }

  return (
    <Container>
      <TitleIdea>Aqui estão suas Ideias</TitleIdea>
      <div>
        <CustomCard>
          <IntrerPriseCard empresa={user.user} />
        </CustomCard>
      </div>
    </Container>
  );
};

export default IdeaPage;
