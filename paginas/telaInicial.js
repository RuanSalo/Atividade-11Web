const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Home',
    `<ul>
    <li>
      <a href="/boasVindas">Boas vindas</a>
    </li>
    <li>
      <a href="/login">Login</a>
    </li>
    <li>
      <a href="/cadastro">Cadastro</a>
    </li>`
  );
  res.status(200).send(html);
};