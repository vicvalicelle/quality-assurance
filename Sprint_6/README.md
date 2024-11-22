# Sprint 6
**Assuntos Principais:**
- Primeiro contato com K6
- Thresholds
- Validações com K6
- K6 CLI

Essa sprint é voltada para o conhecimento da ferramenta K6, os tipos de testes criados com ele, sua documentação, como criar seus scripts, métricas e organização. Portanto, o Challange aborda o planejamento de testes individuais e de fluxos com o foco nas rotas /usuarios, /login e /produtos utilizando essa ferramenta. Foram revisados os casos de teste e selecionados 5 tipos para cada rota:


| **Método**        | **Teste**       | **Options**                                                                                                                                                          | **Thresholds**                                                                                       |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| **GET (POST - Login)** | **Spike Test**  | `stages: [{ duration: '10s', target: 50 }, { duration: '3s', target: 500 } { duration: '10s', target: 50 }],`                                                                                         | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.01'],`                              |
| **GET com ID (POST - Login)** | **Stress Test** | `stages: [{ duration: '1m', target: 100 }, { duration: '1m', target: 500 }, { duration: '1m', target: 700 }, { duration: '1m', target: 1000 }, { duration: '5m', target: 0 }],` | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.05'],`                              |
| **POST**          | **Soak Test**   | ` stages: [{{ duration: '3m', target: 500 }, { duration: '10m', target: 500 }, { duration: '3m', target: 0 },`                                                                                                                                           | `'http_req_duration': ['p(95)<300'], 'http_req_failed': ['rate<0.01'],`                              |
| **PUT (POST - Login)**           | **Load Test**   | `stages: [{ duration: '1m', target: 200 }, { duration: '1m', target: 200 }, { duration: '2m', target: 0 }],`                                                         | `'http_req_duration': ['p(95)<300'], 'http_reqs': ['rate>100'], 'http_req_failed': ['rate<0.01'],`   |
| **DELETE (POST - Login)**        | **Smoke Test**  | `vus: 1, duration: '1s',`                                                                                                                                             | `'http_req_failed': ['rate=0'], 'http_req_duration': ['p(100)<1000'],`                                |

# **Instalação do k6 no Windows**

1. **Instalar usando o Chocolatey**:
- Primeiro, instale o Chocolatey;
    1. Abra o PowerShell com permissões de administrador.
    2. Execute o comando a seguir para instalar o Chocolatey:
        
        ```powershell
        Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('<https://community.chocolatey.org/install.ps1>'))
        ```
        
- Depois de instalar o Chocolatey, instale o k6:
    1. No PowerShell com permissões de administrador, execute:
        
        ```powershell
        choco install k6
        ```

# Resumo dos dias

## Dia 1 e 2: MasterClass
- Planning
- AWS Partner Accreditation (Cloud Economics)

## Dia 3: MasterClass
- Curso da Udemy: Primeiros passos com K6​​​​​​​

## Dia 4: MasterClass
- Fundamentos do teste de software
- Vídeos sobre K6 do Daniel Jesus

## Dia 5: MasterClass
- Entendendo resultados e métricas
- Exercício de fixação

## Dia 6, 7, 8 e 9: Evolução Challenge
- Challenge
- Mentoria