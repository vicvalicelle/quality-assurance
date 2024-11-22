# User Story
## US 001: [API] Usuários

Sendo um vendedor de uma loja

Gostaria de poder me cadastrar no Marketplace do ServeRest

Para poder realizar as vendas dos meus produtos

**DoR**

- Banco de dados e infraestrutura para desenvolvimento disponibilizados;
- Ambiente de testes disponibilizado.

**DoD**

- CRUD de cadastro de vendedores (usuários) implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
- Análise de testes cobrindo todos verbos;
- Matriz de rastreabilidade atualizada;
- Automação de testes baseado na análise realizada;

**Acceptance Criteria**

- Os vendedores (usuários) deverão possuir os campos NOME, E-MAIL, PASSWORD e ADMINISTRADOR;
- Não deverá ser possível fazer ações e chamadas para usuários inexistentes;
- Não deve ser possível criar um usuário com e-mail já utilizado;
- Caso não seja encontrado usuário com o ID informado no PUT, um novo usuário deverá ser criado;
- Não deve ser possível cadastrar usuário com e-mail já utilizado utilizando PUT;
- Os testes executados deverão conter evidências;
- Não deverá ser possível cadastrar usuários com e-mails de provedor gmail e hotmail;
- Os e-mails devem seguir um padrão válido de e-mail para o cadastro;
- As senhas devem possuír no mínimo 5 caracteres e no máximo 10 caracteres;
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

## US 002: [API] Login

Sendo um vendedor de uma loja com cadastro já realizado

Gostaria de poder me autenticar no Marketplace da ServeRest

Para poder cadastrar, editar, atualizar e excluir meus produtos

**DoR**

- Banco de dados e infraestrutura para desenvolvimento disponibilizados;
- API de cadastro de usuários implementada;
- Ambiente de testes disponibilizado.

**DoD**

- Autenticação com geração de token Bearer implementada;
- Análise de testes cobrindo a rota de login;
- Matriz de rastreabilidade atualizada;
- Automação de testes baseado na análise realizada;

**Acceptance Criteria**

- Usuários não cadastrados não deverão conseguir autenticar;
- Usuários com senha inválida não deverão conseguir autenticar;
- No caso de não autenticação, deverá ser retornado um status code 401 (Unauthorized);
- Usuários existentes e com a senha correta deverão ser autenticados;
- A autenticação deverá gerar um token Bearer;
- A duração da validade do token deverá ser de 10 minutos;
- Os testes executados deverão conter evidências;
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

## US 003: [API] Produtos

Sendo um vendedor de uma loja com cadastro já realizado

Gostaria de poder me autenticar e cadastrar produtos no Marketplace do ServeRest

Para poder cadastrar, editar, atualizar e excluir meus produtos

**DoR**

- Banco de dados e infraestrutura para desenvolvimento disponibilizados;
- API de cadastro de usuários implementada;
- API de autenticação implementada;
- Ambiente de testes disponibilizado.

**DoD**

- CRUD de cadastro de Produtos implementado (CRIAR, ATUALIZAR, LISTAR E DELETAR);
- Análise de testes cobrindo a rota de produtos;
- Matriz de rastreabilidade atualizada;
- Automação de testes baseado na análise realizada;

**Acceptance Criteria**

- Usuários não autenticados não devem conseguir realizar ações na rota de Produtos;
- Não deve ser possível realizar o cadastro de produtos com nomes já utilizados;
- Não deve ser possível excluir produtos que estão dentro de carrinhos (dependência API Carrinhos);
- Caso não exista produto com o o ID informado na hora do UPDATE, um novo produto deverá ser criado;
- Produtos criados através do PUT não poderão ter nomes previamente cadastrados;
- Os testes executados deverão conter evidências;
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.

## US 004: [API] Carrinho

Sendo um vendedor da ServeRest com cadastro já realizado

Gostaria de poder me autenticar e cadastrar um carrinho de compras

Para poder adicionar, remover e listar produtos no carrinho de compras

**DoR (Definition of Ready):**

- Banco de dados e infraestrutura para desenvolvimento disponibilizados.
- API de autenticação, cadastro de usuários e produtos implementada.
- Ambiente de testes disponibilizado.

**DoD (Definition of Done):**

- Ser possível criar, listar e deletar carrinho de compras.
- Análise de testes cobrindo a rota carrinhos.
- Matriz de rastreabilidade atualizada.
- Automação de testes baseada na análise realizada.

**Acceptance Criteria:**

- Usuários não autenticados não devem conseguir realizar ações na rota de carrinho.
- Usuários autenticados devem conseguir adicionar, remover e listar produtos ao carrinho.
- Carrinhos retornados são únicos por usuário.
- Redução da quantidade de produtos ao cadastro de cada produto inserido no carrinho e estoque dos produtos reabastecido quando carrinho for cancelado.
- Não deve ser possível adicionar um produto duplicado.
- Não deve ser possível adicionar um produto inexistente ao carrinho.
- Não deve ser possível ter mais de um carrinho.
- Não deve ser possível adicionar um produto ao carrinho se a quantidade for insuficiente.
- Os testes executados deverão conter evidências.
- A cobertura de testes deve se basear no Swagger e ir além, cobrindo cenários alternativos.