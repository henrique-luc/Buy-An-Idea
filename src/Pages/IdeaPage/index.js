import { IntrerPriseCard } from "../../Components/InterpriseCard/";
import { useLogin } from "../../Providers/Login";
import { Container, CustomCard, TitleIdea } from "./style";
import { Redirect } from "react-router-dom";
import CardIdeaGallery from "../../Components/CardIdeaGallery";
import { useState, useEffect } from "react";
import { api } from "../../Services/api";

const IdeaPage = () => {
	const [usersList, setUsersList] = useState([]);

	useEffect(() => {
		api.get("/users").then((res) => {
			setUsersList(res.data);
		});
	}, []);

	return (
		<>
			<h2>Galeria</h2>
			<CardIdeaGallery users={usersList} />;
		</>
	);
};

export default IdeaPage;
