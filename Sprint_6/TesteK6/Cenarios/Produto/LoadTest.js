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
    'http_req_duration': ['p(95)<300'], // 95% das requisições devem responder em menos de 300ms
    'http_reqs': ['rate>100'], // Pelo menos 100 requisições por segundo
    'http_req_failed': ['rate<0.01'], // Menos de 1% de erros
  },
};

let contador = Math.floor(Math.random() * 1000);

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
  
  
  const token = resLogin.json('authorization'); // Extrai o token

  const idProduto = 'BeeJh5lz3k6kSIzA';

  // Atualiza Produto
  const update = `http://localhost:3000/produtos/${idProduto}`;
  const payloadUpdate = JSON.stringify({
    nome: `mouse log ${contador}`,
    preco: 997,
    descricao: 'mouse',
    quantidade: 200
  }); 

  const resUpdate = http.put(update, payloadUpdate, {
    headers: { 
      'Authorization': token,
      'Content-Type': 'application/json' 
    }
  });

  check(resUpdate, {
    'Produto atualizado com sucesso': (r) => r.status === 200
  });
}

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
}