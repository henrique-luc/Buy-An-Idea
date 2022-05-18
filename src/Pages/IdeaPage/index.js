import { IntrerPriseCard } from "../../Components/InterpriseCard/";
import { Container, CustomCard, TitleIdea } from "./style";

const IdeaPage = () => {
  return (
    <Container>
      <TitleIdea>Aqui estão suas Ideias</TitleIdea>
      <div>
        <CustomCard>
          <IntrerPriseCard empresa={{ name: "Empresa" }} />
        </CustomCard>
      </div>
    </Container>
  );
};

export default IdeaPage;
