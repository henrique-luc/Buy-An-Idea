import { InfoCard, InterPriseCardContainer } from "./styles";
import ButtonX from "../../assets/ButtonX.svg";
import ButtonHamb from "../../assets/ButtonHamb.svg";
import ButtonHeart from "../../assets/ButtonHeart.svg";
import { useContext } from "react";
import { InterpriseListContext } from "../../Providers/interpriseList";

import Insta from "../../assets/Insta.svg";
import Facebook from "../../assets/linkedin.svg";
import Linkedin from "../../assets/linkedin.svg";

export const IntrerPriseCard = ({ empresa }) => {
	const { name } = empresa;

	const { cardIsOpen, setCardIsOpen } = useContext(InterpriseListContext);

	return (
		<InterPriseCardContainer inInfoCard={cardIsOpen}>
			<h2 className="CardTitle">{name}</h2>
			<div className="CardVideoContainer">
				<img
					className="CardVideo"
					src="https://xerpay.com.br/blog/wp-content/uploads/sites/2/2018/09/reuni%C3%A3o-produtiva-1434x957.jpg"
					alt="exemplo de empresa"
				/>
				{/* simulação do sobre */}
				<p className="CardAbout">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Maxime mollitia, molestiae quas vel sint commodi repudiandae
					consequuntur voluptatum laborum numquam blanditiis harum
					quisquam eius sed odit fugiat iusto fuga praesentium optio,
					eaque rerum! Provident similique accusantium nemo autem.
					Veritatis obcaecati tenetur iure eius earum ut molestias
					architecto voluptate aliquam nihil, eveniet aliquid culpa
					officia aut! Impedit sit sunt quaerat, odit, tenetur error,
					harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
					quia. Quo neque error repudiandae fuga? Ipsa laudantium
					molestias eos sapiente officiis modi at sunt excepturi
					expedita sint? Sed quibusdam recusandae alias error harum
					maxime adipisci amet laborum. Perspiciatis minima nesciunt
					dolorem! Officiis iure rerum voluptates a cumque velit
				</p>

				<section className="CardButtons">
					<button className="ButtonX">
						<img src={ButtonX} alt="botão de excluir" />
					</button>
					<button
						className="ButtonHamb"
						onClick={() => setCardIsOpen(!cardIsOpen)}
					>
						<img src={ButtonHamb} alt="botão de abrir menu" />
					</button>
					<button className="ButtonHeart">
						<img src={ButtonHeart} alt="botão de curtir proposta" />
					</button>
				</section>
			</div>
			<InfoCard inInfoCard={cardIsOpen}>
				<h2>{name}</h2>
				<div className="InfoCardSobre">
					<h4>Sobre</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Maxime mollitia, molestiae quas vel sint commodi
						repudiandae consequuntur voluptatum laborum numquam
						blanditiis harum quisquam eius sed odit fugiat iusto
						fuga praesentium optio, eaque rerum! Provident similique
						accusantium nemo autem. Veritatis obcaecati tenetur iure
						eius earum ut molestias architecto voluptate aliquam
						nihil, eveniet aliquid culpa officia aut! Impedit sit
						sunt quaerat, odit, tenetur error, harum nesciunt ipsum
						debitis quas aliquid. Reprehenderit, quia. Quo neque
						error repudiandae fuga? Ipsa laudantium molestias eos
						sapiente officiis modi at sunt excepturi expedita sint?
						Sed quibusdam recusandae alias error harum maxime
						adipisci amet laborum. Perspiciatis minima nesciunt
						dolorem! Officiis iure rerum voluptates a cumque velit
					</p>
				</div>
				<div className="InfoCardValor">
					<h4>Valor do investimento</h4>
					<p>R$300k ou mentoria por 50% da empresa.</p>
				</div>
				<div className="InfoCardImages">
					<h4>imagens</h4>
					{/* Fazer um map para renderizar as imagens */}
					{/* Aqui ficarão imagens de exemplo apenas */}
					<section className="ImgContainer">
						<img
							src="https://madmais.vteximg.com.br/arquivos/ids/157264-1000-1000/FORMICA-PLASTICA-CINZA-MEDIO-TX.jpg?v=637310219714400000"
							alt="Imagem exemplo"
						/>
						<img
							src="https://madmais.vteximg.com.br/arquivos/ids/157264-1000-1000/FORMICA-PLASTICA-CINZA-MEDIO-TX.jpg?v=637310219714400000"
							alt="Imagem exemplo"
						/>
						<img
							src="https://madmais.vteximg.com.br/arquivos/ids/157264-1000-1000/FORMICA-PLASTICA-CINZA-MEDIO-TX.jpg?v=637310219714400000"
							alt="Imagem exemplo"
						/>
					</section>
				</div>

				<div className="InfoCardSite">
					<h4>Site da empresa</h4>
					<a href="https://kenzie.com.br/">https://kenzie.com.br/</a>
				</div>

				{/* Quando obtiver acesso ao objeto empresa de fato, fazer um map  */}
				<section className="InfoCardContact">
					<div className="InfoCardSocial InfoCardContact--insta">
						<img alt="Ícone do instagram" src={Insta} />
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.instagram.com/kenzieacademybr/"
						>
							@kenzieacademybr
						</a>
					</div>
					<div className="InfoCardSocial InfoCardContact--facebook">
						<img alt="Ícone do instagram" src={Facebook} />
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.facebook.com/kenzieacademybr/"
						>
							@kenzieacademybr
						</a>
					</div>
					<div className="InfoCardSocial InfoCardContact--linkedin">
						<img alt="Ícone do instagram" src={Linkedin} />
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.linkedin.com/school/kenzie-brasil/mycompany/"
						>
							Kenzie Academy Brasil
						</a>
					</div>
				</section>
				<section className="CardButtons2">
					<button className="ButtonX2">
						<img src={ButtonX} alt="botão de excluir" />
					</button>
					<button
						className="ButtonHamb2"
						onClick={() => setCardIsOpen(!cardIsOpen)}
					>
						<img src={ButtonHamb} alt="botão de abrir menu" />
					</button>
					<button className="ButtonHeart2">
						<img src={ButtonHeart} alt="botão de curtir proposta" />
					</button>
				</section>
			</InfoCard>
		</InterPriseCardContainer>
	);
};
