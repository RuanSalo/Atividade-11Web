const template = require('./template');

module.exports = (req, res) => {
  const html = template(
    'Seja bem vindo',
    `<p>Bem vindo!</p>
    <p>Welcome!</p>
    <p> Herzlich willkommen!</p>
    <p> Välkommen!</p>
    <p>ようこそ</p>`
  );
  res.status(200).send(html);
};