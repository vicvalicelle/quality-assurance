import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '1m', target: 100 },   // Aumento rápido para 100 usuários em 1 minuto
    { duration: '1m', target: 500 }, // Aumento para 500 usuários em 1 minuto
    { duration: '1m', target: 700 },  // Aumento para 700 usuários em 1 minuto
    { duration: '1m', target: 1000 },  // Aumento para 1000 usuários em 1 minuto
    { duration: '5m', target: 0 },    // Diminuição para 0 usuários em 5 minutos
  ],
  thresholds: {
    'http_req_duration': ['p(95)<500'], // 95% das requisições devem responder em menos de 500ms
    'http_req_failed': ['rate<0.05'],     // Menos de 5% de erros
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