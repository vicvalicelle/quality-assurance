# Sprint 7

<details>
<summary> Resumo dos dias </summary>

## Dia 1: MasterClass
- Iniciando projeto base com K6 e Serverest
- Massa de dados estáticas e dinâmicas

## Dia 2: MasterClass
- Ciclo de vida dos testes com Setup e Teardown

## Dia 3: MasterClass
- Camada de serviços com K6

## Dia 4: MasterClass
- Centralizando as validações com BaseChecks

## Dia 5: MasterClass
- Configurando Constants e Environment

## Dia 6, 7, 8 e 9: Evolução Challenge
- Challenge
- Mentoria

</details>

Essa sprint continuaremos com a ferramenta K6, o ciclo de vida dos testes, como criar seus scripts mais concisos, métricas e organização. Portanto, continuaremos com o planejamento anterior, com algumas mudanças, abordando o planejamento de testes individuais e fluxos nas rotas /usuarios, /login, /produtos e, agora, a rota /carrinhos. Foram revisados os casos de teste e selecionados 5 tipos para cada rota:


| **Teste**       | **Options**                                                                                                                                                          | **Thresholds**                                                                                       |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| **Spike Test**  | `stages: [{ duration: '10s', target: 50 }, { duration: '3s', target: 500 } { duration: '10s', target: 50 }],`                                                                                         | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.01'],`                              |
| **Stress Test** | `stages: [{ duration: '1m', target: 100 },{ duration: '1m', target: 200 },{ duration: '1m', target: 300 },{ duration: '1m', target: 500 },{ duration: '5m', target: 0 }],` | `'http_req_duration': ['max < 500'], 'http_req_failed': ['rate<0.05'],`                              |
| **Soak Test**   | ` stages: [{{ duration: '2m', target: 300 }, { duration: '4m', target: 400 }, { duration: '2m', target: 0 },`                                                                                                                                           | `'http_req_duration': ['p(95)<300'], 'http_req_failed': ['rate<0.01'],`                              |
| **Load Test**   | `stages: [{ duration: '1m', target: 100 }, { duration: '1m', target: 100 }, { duration: '1m', target: 0 }],`                                                         | `'http_req_duration': ['p(95)<300'], 'http_reqs': ['rate>100'], 'http_req_failed': ['rate<0.01'],`   |
| **Smoke Test**  | `vus: 1, duration: '1s', iterations: 1, `                                                                   | `'checks': ['rate>0.99'], 'http_req_duration': ['p(100)<1000'], 'http_req_failed': ['rate<0.01'],`                               |

## **Testando sua API com k6:**

### Pré-requisitos

### **1. Node.js e npm**

- **Baixe o instalador:** Vá para https://nodejs.org/ e baixe o instalador para o seu sistema operacional (Windows, macOS ou Linux).
- **Execute o instalador:** Abra o arquivo e siga as instruções na tela.
- **Verifique a instalação:** Abra o seu terminal (Prompt de Comando no Windows, Terminal no macOS ou Linux) e digite os seguintes comandos para checar se está tudo certo:
```
node -v
```
```
npm -v
```

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

- Verifique a instalação: No seu terminal para checar se está tudo certo, digite:
```
k6 --version
```

## **Rodando os testes**

### **1. Escreva o seu script de teste**

 Crie um arquivo chamado `script.js`

### **2. Execute o teste**

Agora, abra o seu terminal e navegue até a pasta onde você salvou o `script.js`. Em seguida, execute:
```
k6 run script.js
```