import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '1m', target: 200 }, // Aumenta para 200 usuários em 1 minuto
    { duration: '1m', target: 200 }, // Mantém 200 usuários por 1 minuto
    { duration: '2m', target: 0 },  // Diminui para 0 usuários em 2 minutos
  ],
  thresholds: {
    'http_req_duration': ['p(95)<300'], // 95% das requisições devem responder em menos de 300ms
    'http_reqs': ['rate>100'], // Pelo menos 100 requisições por segundo
    'http_req_failed': ['rate<0.01'], // Menos de 1% de erros
  },
};

let contador = Math.floor(Math.random() * 1000);

export default function () {
  // Criando do Usuário
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