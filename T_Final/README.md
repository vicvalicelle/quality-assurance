# API Cinema 🍿
API específica para a criação de um sistema de cinemas, consulta, atualização de filmes, exclusão de filmes, criação de filmes e reservas de ingressos.

## Requisitos da API:
### Movies:
Qualquer usuário da API de Filmes (para consulta) e Usuário administrador da API de Filmes (para criação, atualização e exclusão)

**Requisitos Funcionais:**

1. Criando um Novo Filme:
    - O usuário administrador da API envia uma solicitação POST para o endpoint /movies com os detalhes do filme.
    - O sistema valida os campos obrigatórios e a unicidade do título.
    - Se as validações passarem, o sistema cria o filme e atribui um ID único.
    - O sistema retorna uma resposta de sucesso com o status 201 Created, incluindo o ID do filme.
2. Obtendo a Lista de Filmes:
    - O usuário envia uma solicitação GET para o endpoint /movies.
    - O sistema retorna uma lista de todos os filmes cadastrados com detalhes.
3. Obtendo Detalhes de um Filme por ID:
    - O usuário envia uma solicitação GET para o endpoint /movies/{id}, onde {id} é o ID do filme desejado.
    - O sistema verifica a existência do filme e retorna seus detalhes.
    - Se o filme não existir, o sistema retorna uma resposta de erro com o status 404 Not Found.
4. Atualizando os Detalhes de um Filme por ID:
    - O usuário administrador da API envia uma solicitação PUT para o endpoint /movies/{id}, onde {id} é o ID do filme a ser atualizado.
    - O sistema verifica a existência do filme, permite a atualização de campos específicos e valida os dados.
    - Se todas as validações passarem, o sistema atualiza os detalhes do filme.
    - O sistema retorna uma resposta de sucesso com o status 200 OK e os detalhes atualizados do filme.
5. Excluindo um Filme por ID:
    - O usuário administrador da API envia uma solicitação DELETE para o endpoint /movies/{id}, onde {id} é o ID do filme a ser excluído.
    - O sistema verifica a existência do filme e o remove permanentemente do banco de dados.
    - O sistema retorna uma resposta de sucesso com o status 204 No Content.

**Requisitos Não Funcionais de Performance:**

- A API deve processar pelo menos 100 solicitações de criação de filmes por segundo e tempo médio de resposta não deve exceder 200 milissegundos.
- A API deve responder a solicitações GET de listagem de filmes em menos de 100 milissegundos e deve ser paginada, com no máximo 20 filmes por página.
- A API deve responder a solicitações GET de detalhes de um filme em menos de 50 milissegundos.
- A API deve processar pelo menos 50 solicitações de atualização de filmes por segundo e o tempo médio de resposta não deve exceder 300 milissegundos.
- A API deve processar pelo menos 30 solicitações de exclusão de filmes por segundo e o tempo médio de resposta não deve exceder 400 milissegundos.

## Tickets:
Qualquer usuário da API de Ingressos pode reservar ingressos para assistir a um filme em um cinema.

**Requisitos Funcionais:**

- O usuário envia uma solicitação POST para o endpoint /tickets com os seguintes detalhes do ingresso:
    - ID do Filme (movieId) - Identifica o filme para o qual o ingresso está sendo reservado.
    - ID do Usuário (userId) - Identifica o usuário que está fazendo a reserva.
    - Número do Assento (seatNumber) - O número do assento que o usuário deseja reservar.
    - Preço do Ingresso (price) - O preço do ingresso para o filme.
    - Data de Apresentação (showtime) - A data e hora da apresentação do filme.
- O sistema valida se todos os campos obrigatórios estão preenchidos corretamente.
- O sistema verifica se o número do assento está dentro do intervalo de 0 a 99.
- O sistema verifica se o preço do ingresso está dentro do intervalo de 0 a 60.
- Se todas as validações passarem, o sistema cria uma reserva de ingresso com os detalhes fornecidos.
- O sistema atribui um ID único à reserva de ingresso.
- O sistema retorna uma resposta de sucesso com o status 201 Created, incluindo o ID da reserva de ingresso.

**Requisitos Não Funcionais de Performance:**

- A API deve ser capaz de processar pelo menos 50 solicitações de reserva de ingressos por segundo e o tempo médio de resposta não deve exceder 300 milissegundos.

## Mapa Mental e [Jira](https://victoriavalicelle.atlassian.net/jira/software/projects/AC/boards/3)
![alt text](./plano_de_teste/mapaMental.png)


### Matriz de Rastreabilidade:
| **ID do Requisito** | **Descrição do Requisito** | **Casos de Teste** |
| --- | --- | --- |
| **REQ01** | Cadastro de filmes (CRUD) | CT01, CT02, CT03, CT04, CT05, CT06, CT07, **PT01 (Smoke Test), PT02 (Load Test), PT03 (Soak Test), PT04 (Spike Test), PT05 (Stress Test)** |
| **REQ02** | Listagem de filmes | CT08, CT09, CT10, **PT06 (Smoke Test), PT07 (Load Test), PT08 (Soak Test), PT09 (Spike Test), PT10 (Stress Test)** |
| **REQ03** | Atualização de filmes (CRUD) | CT11, CT12, CT13, CT14, CT15, CT16, CT17, CT18, **PT11 (Smoke Test), PT12 (Load Test), PT13 (Soak Test), PT14 (Spike Test), PT15 (Stress Test)** |
| **REQ04** | Exclusão de filmes (CRUD) | CT19, CT20, CT21, **PT16 (Smoke Test), PT17 (Load Test), PT18 (Soak Test), PT19 (Spike Test), PT20 (Stress Test)** |
| **REQ05** | Cadastro de tickets | CT01, CT02, CT03, CT04, CT05, CT06, CT07, CT08, CT09, **PT21 (Smoke Test), PT22 (Load Test), PT23 (Soak Test), PT24 (Spike Test), PT25 (Stress Test)** |
| **REQ06** | Listagem de tickets | CT10, CT11, CT12, **PT26 (Smoke Test), PT27 (Load Test), PT28 (Soak Test), PT29 (Spike Test), PT30 (Stress Test)** |
| **REQ07** | Atualização de tickets | CT13, CT14, CT15, CT16, CT17, CT18, CT19, CT20, CT21, CT22, CT23, CT24, **PT31 (Smoke Test), PT32 (Load Test), PT33 (Soak Test), PT34 (Spike Test), PT35 (Stress Test)** |
| **REQ08** | Exclusão de tickets | CT25, CT26, **PT36 (Smoke Test), PT37 (Load Test), PT38 (Soak Test), PT39 (Spike Test), PT40 (Stress Test)** |
| **REQ09** | Acesso restrito para funções administrativas | CT07, CT17, CT21 |
| **REQ10** | Validação de dados de entrada (Verificação de alguns campos obrigatórios e alguns valores válidos em todas as operações) | CT02, CT03, CT04, CT05, CT06, CT12, CT13, CT14, CT15, CT16, CT17, CT18, CT19, CT20, CT21, CT22, CT23, CT24, CT25, CT26 |


## Configuração de Ambiente para Testes da API 🔧

## Pré-requisitos ⚠️

Certifique-se de que você tenha instalado:

1. **Git** - Para clonar o repositório.
2. **Node.js e npm** - Para gerenciar pacotes e rodar a aplicação.
3. **K6** - Para executar os testes.

### Instalação do Git

**Windows:**

1. Baixe o instalador do [Git](https://git-scm.com/downloads).
2. Execute o instalador e siga as instruções.
3. Verifique a instalação abrindo o terminal (cmd ou PowerShell) e executando o comando:

   ```bash
   git --version
   ```

**macOS:**

1. Instale via Homebrew:

   ```bash
   brew install git
   ```

2. Verifique a instalação:

   ```bash
   git --version
   ```

**Linux:**

1. Instale via apt:

   ```bash
   sudo apt install git
   ```

2. Verifique a instalação:

   ```bash
   git --version
   ```

### Instalação do Node.js e npm

**Windows:**

1. Baixe o instalador do [Node.js](https://nodejs.org/).
2. Execute o instalador e siga as instruções, certificando-se de que a opção para instalar o npm está marcada.
3. Verifique a instalação abrindo o terminal e executando:

   ```bash
   node --version
   npm --version
   ```

**macOS:**

1. Instale via Homebrew:

   ```bash
   brew install node
   ```

2. Verifique a instalação:

   ```bash
   node --version
   npm --version
   ```

**Linux:**

1. Instale via apt:

   ```bash
   sudo apt install nodejs npm
   ```

2. Verifique a instalação:

   ```bash
   node --version
   npm --version
   ```

## Mão na Massa 👷‍♀️

### 1. Clonar o Repositório da API

Primeiro, você precisa clonar o repositório da API de cinema do GitHub. No terminal, execute o seguinte comando:

```bash
git clone https://github.com/juniorschmitz/nestjs-cinema.git
```

### 2. Navegar até o Diretório do Projeto

Após clonar o repositório, navegue até o diretório do projeto:

```bash
cd nestjs-cinema
```

### 3. Instalar Dependências

A API de cinema provavelmente possui dependências que precisam ser instaladas. Para isso, execute:

```bash
npm install
```

### 4. Executar a API Localmente

Para iniciar a API de cinema localmente, use o comando:

```bash
npm run start
```

Certifique-se de que a API está rodando corretamente acessando `http://localhost:3000` no seu navegador.

### 5. Instalar o K6

Para realizar testes de performance, você precisará do K6. Siga as instruções abaixo para instalá-lo:

- **Windows:**

  Baixe o instalador do K6 [aqui](https://k6.io/docs/getting-started/installation/).

    **Instalação usando o Chocolatey**:
- Primeiro, instale o [Chocolatey](https://chocolatey.org/install);
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

- **macOS:**

  Instale via Homebrew:

  ```bash
  brew install k6
  ```

- **Linux:**

  Instale via apt:

  ```bash
  sudo apt install k6
  ```

### 8. Execute o teste com K6

Agora, abra o seu terminal e navegue até a pasta onde você salvou os scripts de teste. Em seguida, execute:
```
k6 run script.js
```
**OBS: Importante lembrar que durante os testes, é necesário criar massas dinâmicas com a quantidade necessária para o teste que deseja realizar. Para isso, navegue ate a pasta data no terminal e digite `node generateMovies 20`, mudando de arquivo se necessário (rota movies ou tickets) e o número para a quantidade desejada.**

## Responsável:
* Victoria Valicelle -  [LinkedIn](www.linkedin.com/in/victoria-valicelle-104496296)