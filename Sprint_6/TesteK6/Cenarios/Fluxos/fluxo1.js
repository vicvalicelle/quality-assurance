import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { check } from 'k6';

export const options = {
  vus: 1, 
  iterations: 1 
};

export default function () {
  // 1. Criar Usuário
  const urlCriarUsuario = 'http://localhost:3000/usuarios';
  const payloadCriarUsuario = JSON.stringify({
    nome: 'Novo Usuario123A',
    email: 'novousuario123A@example.com',
    password: 'senhaforte',
    administrador: 'true'
  });

  const resCriarUsuario = http.post(urlCriarUsuario, payloadCriarUsuario, {
    headers: { 'Content-Type': 'application/json' }
  });

  check(resCriarUsuario, {
    'Usuário criado com sucesso': (r) => r.status === 201
  });

  // 2. Login
  const urlLogin = 'http://localhost:3000/login';
  const payloadLogin = JSON.stringify({
    email: 'novousuario@example.com', // Usar o email do usuário criado
    password: 'senhaforte'
  });

  const resLogin = http.post(urlLogin, payloadLogin, {
    headers: { 'Content-Type': 'application/json' }
  });

  check(resLogin, {
    'Login bem-sucedido': (r) => r.status === 200
  });

  const token = resLogin.json('authorization'); // Extrai o token

  // 3. Criar Produto
  const urlCriarProduto = 'http://localhost:3000/produtos';
  const payloadCriarProduto = JSON.stringify({
    nome: 'teclado rgb ABC',
    preco: 100,
    descricao: 'teclado',
    quantidade: 100
  });

  const resCriarProduto = http.post(urlCriarProduto, payloadCriarProduto, {
    headers: { 
      'Authorization': token,
      'Content-Type': 'application/json' 
    }
  });

  check(resCriarProduto, {
    'Produto criado com sucesso': (r) => r.status === 201
  });
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}