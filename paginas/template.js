module.exports = (titulo, conteudo) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${titulo}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
    <link rel="stylesheet" href="estilos.css"/>
  </head>
  <body>
  <div class="container-fluid">
    <div class="row align-items-center">
        <div class="col-8">
          <h1>${titulo}</h1>
          <div >${conteudo}</div>
          <a href="/">Home</a>
        </div>
      </div>
    </div>
  </div>     
  </body>
  </html>
`;
