// EMPRESA

const user2 = {
	email: "email2@email.com",
	password: "123456",
	name: "Nome da empresa2",
	type: "company",
	phone: "3232323232",
	userId: 2,
	matches: [
		{ companyId: 6, message: "Olá! Sou a empresa 2" },
		{ companyId: 4, message: "Olá! Sou a empresa 2" },
		{ companyId: 18, message: "Olá! Sou a empresa 2" },
	], // Array de usuários
};

//ABAIXO INVESTIDORES

const user4 = {
	email: "email4@email.com",
	password: "123456",
	name: "Nome da empresa4",
	type: "investor",
	phone: "3232323232",
	userId: 4,
	matches: [
		{ companyId: 2, message: "Entre em contato. Sou o investidor 4" },
		{ companyId: 18, message: "Entre em contato. Sou o investidor 4" },
	], // Array de usuários
};

const user6 = {
	email: "email6@email.com",
	password: "123456",
	name: "Nome da empresa6",
	type: "investor",
	phone: "3232323232",
	userId: 6,
	matches: [
		{ companyId: 2, message: "Entre em contato. Sou o investidor 6" },
	], // Array de usuários
};

const user18 = {
	email: "email18@email.com",
	password: "123456",
	name: "Nome da empresa 18",
	type: "investor",
	phone: "3232323232",
	userId: 18,
	matches: [
		{ companyId: 60, message: "Entre em contato. Sou o investidor 18" },
		{
			companyId: 2,
			message:
				"Entre em contato. Sou o investidor 18 e estou interessado na sua empresa. Meu telefone é: 33333333",
		},
	], // Array de usuários
};

export const users = [user2, user4, user6, user18];
