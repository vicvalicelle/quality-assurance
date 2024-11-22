# Sprint 4
- Testes Exploratórios
- Linguagem de programação Javascript.
- Test Driven Development.
- Bibliotecas Mocha e Chai.

## Dia 1 e 2: MasterClass
- Planning Sprint 4
- Curso de Testes Exploratórios da Udemy

## Dia 3: MasterClass
- Linguagem de programação Javascript
- Exercícios

## Dia 4 e 5: MasterClass
- TDD com Mocha e Chai

## Dia 6 e 7: Exercícios e Challenge
- Exercícios e Challenge
- Planejamento de Teste, User Story e Execução

## Dia 8 e 9: MasterClass
- AWS Partner Acceditation (Business)

# Instalações
Guia para auxiliar na configuração do ambiente para realizar o TDD (Test Driven Development), utilizando Node.js, Mocha (https://mochajs.org/) e Chai (https://www.chaijs.com/).

**Pré-requisitos**

- **VS Code:** https://code.visualstudio.com/download (Editor de código)
- **Node.js:** https://nodejs.org/en/download/ (Última versão LTS de preferência ou a partir da 14)

### **Passos para instalação e configuração:**

1. **Criar um projeto Node.js:**
    - Crie uma pasta
    - Abra o terminal na pasta onde deseja criar seu projeto.
    - Execute o comando `npm init -y` para criar um arquivo `package.json` com as configurações básicas do projeto

2. **Ativar o Modules:**
    - No arquivo `package.json`, adicione a linha `"type": "module"`:
    ``` JSON
    {
      "type": "module",
    }
3. **Instalar as dependências:**
    - Instale o Mocha e o Chai como dependências de desenvolvimento:
        
        `npm i -D mocha chai`
        
4. **Configurar o script de teste no package.json:**
    - No arquivo `package.json`, adicione:
    
    ``` JSON
    "scripts": {
        "test": "mocha"
    }
5. **Criar um arquivo de teste:**
    - Crie uma pasta chamada `test` no seu projeto.
    - Dentro da pasta, crie um arquivo com a extensão `.spec.js`
6. **Executar os testes:**
    - No terminal, execute o comando `npm test` onde os arquivos de teste na pasta `test` seram executados.