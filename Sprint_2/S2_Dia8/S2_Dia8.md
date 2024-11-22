# Dia 8: MasterClass

- Ferramentas para teste API
- Curso Udemy: Introdução ao Postman
- Atividade

## Ferramentas para teste manual

- **Postman:** Uma plataforma para desenvolvimento e teste de APIs. Permite criar requisições, organizar coleções, automatizar testes, gerar documentação, entre outras funções.
- **Insomnia:** Também focada em testes de APIs REST. Oferece recursos como criação de ambientes, testes automatizados e geração de código para diferentes linguagens.

## Ferramentas para teste automatizado

- **Rest-Assured:** Uma biblioteca Java poderosa e flexível para testes. Facilita a criação de testes legíveis e concisos, com suporte a diferentes formatos de dados e validações.
- **HTTParty:** Uma biblioteca Ruby útil para testes de APIs REST. Oferece uma sintaxe amigável e integração com outras ferramentas de teste Ruby.

## Ferramenta para teste de carga

- **JMeter:** Uma ferramenta open-source que permite simular um grande número de usuários acessando uma aplicação, medir tempos de resposta, identificar gargalos e analisar resultados detalhados.
- **K6:** Uma ferramenta com foco em scripts em JavaScript e execução em nuvem. É fácil de usar, escalável e oferece relatórios em tempo real.

## Introdução ao Postman

Oferece um ambiente completo para criar, enviar, testar e documentar requisições HTTP para suas APIs.

**Vantagens do Postman:**

- Interface Intuitiva
- Testes Simplificados
- Coleções e Ambientes
- Automação de Teste
- Documentação Automática
- Integração com Ferramentas Externas

**Request e Query Parameters:**

- Request Parameters: Informações enviadas no corpo da requisição para APIs que utilizam métodos POST, PUT ou PATCH.
- Query Parameters: Informações adicionadas ao final da URL da requisição para APIs que utilizam o método GET. São utilizados para filtrar, ordenar ou paginar resultados.

**Variáveis:**

O Postman permite criar e utilizar variáveis para armazenar valores que podem ser reutilizados em diferentes partes das suas requisições.

**Testes Automatizados:**

O Postman permite escrever scripts de teste para automatizar a verificação das respostas das suas APIs. Você pode validar códigos de status, verificar o conteúdo da resposta, medir tempos de resposta e mais.

## Atividade

Deve realizar suas primeiras requisições utilizando a API https://serverest.dev/ como base de estudos.

Para esta atividade é desejado que você:

1) Crie uma requisição Get para validar o retorno de usuários através da API;

        Método: GET
        URL: http://localhost:3000/usuarios
        Resultado Esperado: Status HTTP 200
        Corpo da resposta: Lista de usuários

- Resultado Obtido:
![alt text](Imagens/image.png)

2) Crie uma requisição Post para cadastrar um novo usuário através da API;

        Método: POST
        URL: http://localhost:3000/usuarios
        Body:
            Nome: monica
            Email: monica@email.com
            Senha: 123456
            Administrador: true
        Resultado Esperado: Status HTTP 201
        Corpo da resposta: Cadastro com sucesso

- Resultado Obtido:
![alt text](Imagens/image-1.png)

3) Crie uma requisição Get para validar o retorno de um usuário apenas através da API (pode utilizar os IDs dos usuários que vocês irão criar);

        Método: GET
        URL: http://localhost:3000/usuarios/{_id}
        Dados de Entrada:
            ID do usuário: MEeOhgLGIoUeLkqo
        Resultado Esperado: Status HTTP 200 (OK)
        Corpo da resposta: Dados do usuário

- Resultado Obtido:
![alt text](Imagens/image-3.png)

4) Crie cenários alternativos no cadastro de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman;

        Método: POST
        URL: http://localhost:3000/usuarios
        Body:
            Nome: magali
            Email: magali@email.com
            Senha: 1234
            Administrador: true
        Resultado Esperado: Status HTTP 400
        Corpo da resposta: Senha fora dos padrões

- Resultado Obtido:
![alt text](Imagens/image-4.png)

        Método: POST
        URL: http://localhost:3000/usuarios
        Body:
            Nome: 
            Email: cebolinha@email.com
            Senha: 123456
            Administrador: true
        Resultado Esperado: Status HTTP 400
        Corpo da resposta: Nome precisa estar preenchido

- Resultado Obtido:
![alt text](Imagens/image-5.png)

5) Crie cenários alternativos na atualização de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman;

        Método: PUT
        URL: http://localhost:3000/usuarios/:_id
        ID: 0uxuPY0cbmQhpEz1
        Body:
            Nome: 
            Email: 
            Senha: 
            Administrador: 
        Resultado Esperado: Status HTTP 400
        Corpo da resposta: Campos precisam estar preenchidos.

- Resultado Obtido:
![alt text](Imagens/image-6.png)

        Método: PUT
        URL: http://localhost:3000/usuarios/:_id
        ID: 0uxuPY0cbmQhpEz1
        Body:
            Nome: "Fulano da Silva"
            Email: "abacate@gmail.com"
            Senha: "teste"
            Administrador: "true"
        Resultado Esperado: Status HTTP 400
        Corpo da resposta: Email deve ser valido.

- Resultado Obtido:
![alt text](Imagens/image-7.png)

6) Crie cenários alternativos na exclusão de usuários, explore possíveis erros que podem ocorrer e mapeie as requisições através do Postman.

        Método: DELETE
        URL: http://localhost:3000/usuarios:_id
        ID: 0uxuPY0cbmQhpEz
        Resultado Esperado: Status HTTP 200
        Corpo da resposta: Id inválido

- Resultado Obtido:
![alt text](Imagens/image-8.png)

        Método: DELETE
        URL: http://localhost:3000/:_id
        ID: 0uxuPY0cbmQhpEz1
        Resultado Esperado: Status HTTP 400
        Corpo da resposta: Usuário com carrinho cadastrado

Resultado Obtido:
![alt text](Imagens/image-9.png)
