import { IntrerPriseCard } from "../../Components/InterpriseCard/";
import { useLogin } from "../../Providers/Login";
import { Container, CustomCard, TitleIdea } from "./style";

const IdeaPage = () => {
  const { user } = useLogin();

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
