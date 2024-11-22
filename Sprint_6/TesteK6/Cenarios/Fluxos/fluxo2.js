import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 }, 
    { duration: '5s', target: 20 }, 
    { duration: '1s', target: 0 }, 
  ],
  thresholds: {
    'http_req_duration': ['p(95)<300'], // 95% das requisições devem responder em menos de 300ms
    'http_reqs': ['rate>100'], // Pelo menos 100 requisições por segundo
    'http_req_failed': ['rate<0.01'], // Menos de 1% de erros
  },
};

export default function () {
  let userId; // Variável para armazenar o ID do usuário

  // 1. Listar Usuários para Obter o ID
  const resUsuarios = http.get('http://localhost:3000/usuarios');
  check(resUsuarios, {
    'Lista de usuários obtida': (r) => r.status === 200
  });

  const usuarios = resUsuarios.json();
  userId = usuarios.usuarios[0]._id; // ID do primeiro usuário

  // 2. Login com o Usuário
  const urlLogin = 'http://localhost:3000/login';
  const payloadLogin = JSON.stringify({
    email: 'usuarioeditado@example.com', 
    password: 'novasenha'
  });

  const resLogin = http.post(urlLogin, payloadLogin, {
    headers: { 'Content-Type': 'application/json' }
  });

  check(resLogin, {
    'Login bem-sucedido': (r) => r.status === 200
  });

  const token = resLogin.json('authorization');

  // 3. Listar Produtos para Obter o ID
  const resProdutos = http.get('http://localhost:3000/produtos');
  check(resProdutos, {
    'Lista de produtos obtida': (r) => r.status === 200
  });

  const produtos = resProdutos.json();
  const idProduto = produtos.produtos[1]._id; // ID do produto

  // 4. Excluir Produto
  const urlExcluirProduto = `http://localhost:3000/produtos/${idProduto}`;
  const resExcluirProduto = http.del(urlExcluirProduto, null, {
    headers: { 'Authorization': token }
  });

  check(resExcluirProduto, {
    'Produto excluído com sucesso': (r) => r.status === 200
  });
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
  }