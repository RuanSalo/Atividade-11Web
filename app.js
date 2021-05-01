const express = require("express");

const telaInicial = require('./paginas/telaInicial');

const boasVindas = require('./paginas/boasVindas');
const telaLogin = require('./paginas/formularioLogin');
const verificaLogin = require('./paginas/verificaLogin');
const telaCadastro = require('./paginas/formularioCadastro');
const criaCadastro = require('./paginas/criaCadastro');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/',telaInicial);
app.get('/boasVindas',boasVindas);
app.get('/login',telaLogin);
app.post('/login',verificaLogin);
app.get('/cadastro',telaCadastro);
app.post('/cadastro',criaCadastro);

const port = 5000;
app.listen( port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`Acesse http://localhost:${port} para testar`);
});