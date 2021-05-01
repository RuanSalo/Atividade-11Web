module.exports = (titulo, conteudo) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo}</title>
    <link rel="stylesheet" href="estilos.css" />
  </head>
  <body>
    <h1>${titulo}</h1>
    <div>${conteudo}</div>
    <a href="/">Home</a>
  </body>
  </html>
`;