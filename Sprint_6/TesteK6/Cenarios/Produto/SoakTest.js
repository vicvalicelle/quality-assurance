import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: '3m', target: 500 }, // Aumento gradual para 500 usuários em 3 minutos
    { duration: '10m', target: 500 }, // Mantém 500 usuários por 10 minutos
    { duration: '3m', target: 0 },  // Diminuição gradual para 0 usuários em 3 minutos
  ],
  thresholds: {
    'http_req_duration': ['p(95)<300'], // 95% das requisições devem responder em menos de 300ms
    'http_reqs': ['rate>100'],        // Pelo menos 100 requisições por segundo
    'http_req_failed': ['rate<0.01'], // Menos de 1% de erros
  },
};

let contador = Math.floor(Math.random() * 1000000);

export default function () {
  // Login
  const login = 'http://localhost:3000/login';
  const payloadLogin = JSON.stringify({
    email: 'novoemail@example.com',
    password: 'novasenha' 
  });

  const resLogin = http.post(login, payloadLogin, {
    headers: { 'Content-Type': 'application/json' }
  });

  check(resLogin, {
    'Login bem-sucedido': (r) => r.status === 200
  });

  let contador = Math.floor(Math.random() * 1000000);

  const token = resLogin.json('authorization'); // Extrai o token
    // Cria Produto
    const criaProduto = 'http://localhost:3000/produtos';
    const payloadCriar = JSON.stringify({
    nome: `MOUSE ${contador} RGB ${contador}`,
    preco: 500,
    descricao: 'batata',
    quantidade: 100
    });

    const resCriar = http.post(criaProduto, payloadCriar, {
    headers: { 
        'Authorization': token,
        'Content-Type': 'application/json' 
    }
});

check(resCriar, {
  'Produto criado com sucesso': (r) => r.status === 201 // Verifica status 201 (Created)
});
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
}