const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Digite seus dados',
    `<form action="/cadastro" method="post">
    <div class="p-1">
      <label for="nome">Nome:</label>
      <input type="text" name="nome" id="nome">
    </div>
    <div class="p-1">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email">
    </div>
    <div class="p-1">
      <label for="senha">Senha:</label>
      <input type="password" name="senha" id="senha">
    </div>
    <div class="p-1">
      <button class="btn btn-primary type="submit">Me cadastre!</button>
    </div>
  </form>`
  );
  res.status(200).send(html);
};