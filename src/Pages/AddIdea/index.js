import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { DivAddidea } from "./style.js";

const AddIdea = () => {
  const schema = yup.object().shape({
    video: yup.string(),
    about: yup.string().required("Descrição obrigatória"),
    coreBusiness: yup.string().required("Campo obrigatório"),
    payback: yup.string(),
    valuation: yup.string(),
    document: yup.string(),
    website: yup.string(),
    facebook: yup.string(),
    instagram: yup.string(),
    linkedin: yup.string(),
    twitter: yup.string(),
    ideaValue: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <DivAddidea>
      <section className="container_addIdea-header"></section>

      <section className="container_addIdea-main">
        <div className="container_addIdea-main-aside"></div>

        <main>
          <h2>Adicione a sua ideia </h2>

          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <section>
              <div>
                <h4>Adicone um video apresentativo</h4>
                <p>
                  Supreenda seus investidores contando as suas melhores ideias
                  em um vídeo. Sugerimos um material de até 2 min.
                </p>
                <video preload="" controls src=""></video>
                <input
                  type="url"
                  placeholder="Link para o seu video de apresentação no Youtube"
                />
              </div>

              <div>
                <h4>Sobre</h4>
                <p>
                  Chegou a hora de inspirar os seus investidores com uma bela
                  história sobre a sua iniciativa.
                </p>
                <textarea placeholder="Conte mais detalhes sobre a história da sua empresa. COloque aqui informações relevantes sobre a sua idéia, as pessoas por trás dela e como tudo começou para você."></textarea>
              </div>
            </section>

            <section>
              <div>
                <h4>Core business</h4>
                <textarea placeholder="Descreva aqui a principal atividade da sua empresa"></textarea>
              </div>

              <div>
                <h4>Payback</h4>
                <p>Coloque aqui o retorno do investimento</p>
                <input type="text" placeholder="R$" />
              </div>

              <div>
                <h4>Valuation</h4>
                <p>Valor estimado da empresa</p>
                <input type="text" placeholder="R$" />
              </div>
            </section>

            <section>
              <div>
                <h4>Link útil para documentos e patentes</h4>
                <input
                  type="url"
                  placeholder="Coloque aqui o endereço para baixar o seu documento"
                />
              </div>

              <div>
                <h4>Endereço do seu site</h4>
                <input
                  type="url"
                  placeholder="Coloque aqui o endereço do seu site"
                />
              </div>
            </section>

            <section>
              <div>
                <h4>Redes Sociais</h4>
              </div>

              <div>
                <div>
                  <figure>
                    <img src="" alt="facebook icon" />
                    <figcaption>facebook icon</figcaption>
                  </figure>
                  <small>facebook/</small>
                  <input type="text" />
                </div>

                <div>
                  <figure>
                    <img src="" alt="instagram icon" />
                    <figcaption>instagram icon</figcaption>
                  </figure>
                  <small>instagram/</small>
                  <input type="text" />
                </div>
              </div>

              <div>
                <div>
                  <figure>
                    <img src="" alt="linkedin icon" />
                    <figcaption>linkedin icon</figcaption>
                  </figure>
                  <small>linkedin/</small>
                  <input type="text" />
                </div>

                <div>
                  <figure>
                    <img src="" alt="twitter icon" />
                    <figcaption>twitter icon</figcaption>
                  </figure>
                  <small>twitter/</small>
                  <input type="text" />
                </div>
              </div>
            </section>

            <section>
              <div>
                <h4>Valor do investimento na sua ideia</h4>
                <textarea placeholder="De quanto ou do quê você precisa para viabilizar a sua ideia? Coloque aqui como os investidores podem te ajudar e o que você dará em troca pelo investimento"></textarea>
              </div>

              <div>
                <button type="submit">Salvar informações</button>
              </div>
            </section>
          </form>
        </main>
      </section>
    </DivAddidea>
  );
};

export default AddIdea;
