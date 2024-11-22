import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 1, // Número de usuários virtuais
  duration: '1s', // Duração do teste
  thresholds: {
    'http_req_failed': ['rate==0'],  // Nenhum erro permitido
    'http_req_duration': ['p(100)<1000'], // Todas as requisições devem responder em menos de 1 segundo
  },
};

let contador = Math.floor(Math.random() * 1000);

export default function () {
  // Criar Usuário
  const criarUsuario = 'http://localhost:3000/usuarios';
  const payloadCriarUsuario = JSON.stringify({
    nome: `UsuarioTeste${contador}`,
    email: `usuario${contador}teste${contador}@email.com`,
    password: 'senhaforte',
    administrador: 'true'
  });

  const resCriarUsuario = http.post(criarUsuario, payloadCriarUsuario, {
    headers: { 'Content-Type': 'application/json' }
  });

  check(resCriarUsuario, {
    'Usuário criado': (r) => r.status === 200
  });

  // Login
  const login = 'http://localhost:3000/login';
  const payloadLogin = JSON.stringify({
    email: `usuario${contador}teste${contador}@email.com`, 
    password: 'senhaforte'
  });

  const resLogin = http.post(login, payloadLogin, {
    headers: { 'Content-Type': 'application/json' }
  });

  check(resLogin, {
    'Login bem-sucedido': (r) => r.status === 200,
    'Token de autenticação presente': (r) => r.json('authorization') !== undefined
  });

  sleep(1);
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
}