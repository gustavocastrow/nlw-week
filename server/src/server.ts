import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  //Request: utilizado para obter dados sobre a nossa requisicao.
  //Response: devolver uma reposta para nosso browser ou apliacao
  console.log('Listagem de users.');
  response.json([
    'Diego',
    'Clayton',
    'Robson',
    'Gustavo'
  ]);
});

app.listen(3333);