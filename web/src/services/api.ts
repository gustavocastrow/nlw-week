import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

//fetch: api nativa que vem no navegador para fazer requisicoes.