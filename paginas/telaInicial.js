const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Home',
    `<ul class="d-grid gap-2">
    <li class="p-1">
      <a class="btn btn-primary" href="/boasVindas">Boas vindas</a>
    </li>
    <li class="p-1">
      <a class="btn btn-primary" href="/login">Login</a>
    </li>
    <li class="p-1">
      <a class="btn btn-primary" href="/cadastro">Cadastro</a>
    </li>`
  );
  res.status(200).send(html);
};