// EMPRESA

const empresa = {
	email: "empresa@email.com",
	password: "123456",
	name: "Facebok Meta",
	type: "company",
	phone: "3232323232",
	userId: 2,
	// matches: [

	// ], // Array de usuários
};

//ABAIXO INVESTIDORES

const investidor1 = {
	email: "investidor1@email.com",
	password: "123456",
	name: "Silvio Santos",
	type: "investor",
	phone: "3232323232",
	userId: 4,
	matches: [
		{ matchId: 2, message: "Gostei da sua ideia", whatsapp: "3232323232" },
	],
};

const investidor2 = {
	email: "investidor2@email.com",
	password: "123456",
	name: "Elon Musk",
	type: "investor",
	phone: "3232323232",
	userId: 6,
	matches: [
		{
			matchId: 2,
			message:
				"Que idei foda! Entre em contato comigo. Meu telk particular é: 99999999",
			whatsapp: "3232323232",
		},
	], // Array de usuários
};

export const users = [empresa, investidor1, investidor2];
