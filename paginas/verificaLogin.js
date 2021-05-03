const template = require("./template");

module.exports = (req, res) => {
	const param = req.body;
	const { email, senha } = param;
	const contas = require("./criaCadastro");

	let html;
	let status;

	for (const conta of contas) {
		if (email && senha && conta.email === email && conta.senha === senha) {
			status = 302;
			html = template("Login aceito", `Seja bem vindo ${conta.nome}`);
		} else {
			status = 404;
			html = template(
				"Login não aceito",
				"<p>Houve algum erro quanto ao seu login,por favor verifique se os dados foram corretamente informados</p>"
			);
		}
	}

	res.status(status).send(html);
};
