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
		html = template("Cadastrado com sucesso!", `<p>Obrigado por se cadastrar ${nome}!</p>`);
	} else {
		status = 412;
		html = template("Falha no cadastro", `<p>Falta de informações</p>`);
	}
	res.status(status).send(html);
	module.exports = contas;
};
