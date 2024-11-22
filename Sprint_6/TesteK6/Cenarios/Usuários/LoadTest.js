import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '1m', target: 200 }, // Aumenta para 200 usuários em 1 minuto
    { duration: '1m', target: 200 }, // Mantém 200 usuários por 1 minuto
    { duration: '2m', target: 0 },  // Diminui para 0 usuários em 2 minutos
  ],
  thresholds: {
    'http_req_duration': ['p(95)<200'], // 90% das requisições devem responder em menos de 200ms
    'http_reqs': ['rate>100'], // Pelo menos 100 requisições por segundo
    'http_req_failed': ['rate<0.01'], // Menos de 1% de erros
  },
};

export default function () {
  const url = 'http://localhost:3000/usuarios/0InGDEi1dr1UTEGp';
  const payload = JSON.stringify({
    nome: 'Novo Nome', 
    email: 'novoemail@example.com',
    password: 'novasenha',
    administrador: 'true'
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.put(url, payload, params);
  
  check(res, {
    'status code 200': (r) => r.status === 200,
  });
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
}