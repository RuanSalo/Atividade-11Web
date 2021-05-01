const template = require("./template");

module.exports = (req, res) => {
	const param = req.body;
	const { nome, email, senha } = param;
	const login = { nome, email, senha };
	const contas = [];

	let status;
	let html;

	if (nome && email && senha && nome !== "" && email !== "" && senha !== "") {
		contas.push(login);
		status = 201;
		html = template("Cadastrado com sucesso!", `Obrigado por se cadastrar ${nome}!`);
	} else {
		status = 412;
		html = template("Falha no cadastro", "Falta de informações");
	}
	res.status(status).send(html);
};
