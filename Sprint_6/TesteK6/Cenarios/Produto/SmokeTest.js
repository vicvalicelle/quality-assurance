import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 1, // Apenas um usuário virtual para teste de smoke
  iterations: 1, // Uma única iteração
  thresholds: {
    'http_req_failed': ['rate==0'],  // Nenhum erro permitido
    'http_req_duration': ['p(100)<1000'], // Todas as requisições devem responder em menos de 1 segundo
  },
};

export default function () {
  // Login
  const urlLogin = 'http://localhost:3000/login';
  const payloadLogin = JSON.stringify({
    email: 'novoemail@example.com',
    password: 'novasenha'
  });

  const resLogin = http.post(urlLogin, payloadLogin, {
    headers: { 'Content-Type': 'application/json' }
  });

  check(resLogin, {
    'Login bem-sucedido': (r) => r.status === 200
  });

  const token = resLogin.json('authorization'); // Extrai o token

  const resProdutos = http.get('http://localhost:3000/produtos');
  check(resProdutos, {
    'Lista de produtos obtida': (r) => r.status === 200
  });

  const produtos = resProdutos.json();
  const idProduto = produtos.produtos[1]._id; // ID do produto

  // Deleta Produto
  const urlDelete = `http://localhost:3000/produtos/${idProduto}`;
  const resDelete = http.del(urlDelete, null, {
    headers: { 'Authorization': token } // Usa o token no cabeçalho
  });

  check(resDelete, {
    'Produto deletado com sucesso': (r) => r.status === 200
  });
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
}