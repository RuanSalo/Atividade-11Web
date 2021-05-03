const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Faça seu login',
    `<form action="/login" method="post">
    <div class="p-1">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email">
    </div>
    <div class="p-1">
      <label for="senha">Senha:</label>
      <input type="password" name="senha" id="senha">
    </div>
    <div class="p-1">
      <button class="btn btn-primary type="submit">Login</button>
    </div>
  </form>`
  );
  res.status(200).send(html);
};