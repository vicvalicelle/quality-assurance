import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '10s', target: 50 },   // Aumento rápido para 50 usuários em 10 segundos
    { duration: '3s', target: 500 },  // Pico de 500 usuários por 30 segundos
    { duration: '10s', target: 50 },   // Retorno rápido para 50 usuários em 10 segundos
  ],
  thresholds: {
    'http_req_duration': ['p(99)<500'], // 99% das requisições devem responder em menos de 500ms
    'http_req_failed': ['rate<0.05'],  // Menos de 5% de erros (aceitamos mais erros em testes de spike)
  },
};

export default function () {
  // Login
  const login = 'http://localhost:3000/login';
  const payloadLogin = JSON.stringify({
    email: `rgarviege@studiopress.com`,
    password: '8332359708'
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