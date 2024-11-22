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
  const userId = '01XH8FlkkIx8OzM3';

  const usuario = `http://localhost:3000/usuarios/${userId}`;
  
  const resUsuario = http.del(usuario);

  check(resUsuario, {
    'Registro excluído com sucesso': (r) => r.status === 200
  });
};

export function handleSummary(data) {
    return {
      "summary.html": htmlReport(data),
    };
}