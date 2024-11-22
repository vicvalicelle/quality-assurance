# Dia 3: MasterClass

- Validações e boas práticas em testes de API
- Tipos de erros

## Validações para realizar APIs

São cruciais para garantir a segurança, confiabilidade e o bom funcionamento da aplicação.

**Validações Essenciais:**

1. **Validação do Status Code:**
    - Verifica se a API retorna o status code correto para cada requisição.
2. **Validação do Response Body:**
    - Valida os tipos de dados de cada campo.
    - Verifica se os campos obrigatórios estão presentes e se os valores estão dentro dos limites esperados.
3. **Validação dos Headers:**
    - Verifica os cabeçalhos de resposta.
    - Valida os cabeçalhos de autenticação.
4. **Validação de Regras de Negócio:**
    - Implemente validações específicas das regras de negócio da aplicação.

## Boas práticas para testar APIs

**1. Entender o Projeto:**

- Objetivo da API.
- Público-Alvo.
- Fluxos de Trabalho e cenários possíveis.
- Dependências com outras aplicações.

**2. Documentação:**

- Clara e Atualizada.
- Ferramentas de Documentação.

**3. Validação.**

**4. Segurança:**

- Autenticação e Autorização.
- Validação de Entrada.
- Proteção contra Ataques.
- Testes de Segurança.

## Como fazer testes funcionais em APIs Rest

Testes funcionais focam em verificar se a API atende aos requisitos funcionais e se os endpoints retornam as respostas corretas para as requisições.

1. **Identificar os Cenários de Teste:**
    - Mapear os principais fluxos de trabalho da API.
    - Definir os diferentes casos de uso, como um usuário não autenticado tentando acessar um recurso restrito, etc.
    - Considerar os limites e valores extremos dos parâmetros de entrada.
2. **Criar os Casos de Teste:**
    - Para cada cenário de teste, crie um caso de teste que descreva:
        - A requisição a ser enviada.
        - A resposta esperada.
        - As respostas a serem verificadas.
3. **Escolher a Ferramenta de Teste.**
<figure>
  <img src="https://www.business2community.com/wp-content/uploads/2020/10/eb3e27e7-api-testing-2.png" width="50%">
</figure>

4. **Implementar os Testes.**
5. **Executar os Testes:**
    - Execute os testes regularmente.
    - Analise os resultados dos testes e corrija os erros encontrados.

## Tipos de erros (Back-End)

A classificação dos erros de back-end é crucial para direcionar os esforços de correção e priorizar os testes. 

**1. Gravidade: Crítica, Prioridade: Urgente, Risco: Alto:** Impedem completamente o funcionamento da aplicação, tornando-a inutilizável. Requer correção imediata antes de qualquer outra atividade.

**2. Gravidade: Alta, Prioridade: Alta, Risco: Alto:**

Afetam funcionalidades importantes, geram resultados incorretos ou comprometem a usabilidade. Deve ser corrigido com alta prioridade, antes do lançamento ou em uma atualização urgente.

**3. Gravidade: Média, Prioridade: Alta, Risco: Médio:**

Geram resultados inesperados em funcionalidades específicas ou afetam a performance. Devem ser corrigidos, mas podem ser adiados em casos excepcionais.

**4. Gravidade: Baixa, Prioridade: Média, Risco: Baixo:**

Problemas que afetam apenas uma pequena parte. Podem ser corrigidos em versões futuras ou em conjunto com outros.

**5. Gravidade: Baixa, Prioridade: Baixa, Risco: Baixo:**

Geralmente estéticos ou pequenas inconsistências que não afetam a funcionalidade ou a usabilidade. Podem ser corrigidos em versões futuras, se houver tempo e recursos disponíveis.

**Erros Causados por Documentação:**

A documentação é fundamental para o processo de desenvolvimento e teste de software, e erros nessa área podem gerar problemas significativos. Ex.: Documentação incompleta, desatualizada, ambígua, incorreta e até mal organizada.

**Impacto:**
- Aumento do Tempo de Teste.
- Atraso na Entrega.
- Aumento do Custo.
- Diminuição da Qualidade.

**Erros de Massa de Dados em QA:**

**Impacto:**
- Problemas de Desempenho.
- Falhas na Aplicação.
- Vulnerabilidades de Segurança.
- Dificuldade em Reproduzir Erros.

### ARTICULANDO SABERES:

A partir dos tipos apresentados na lição (e indo além), como você e sua equipe poderiam atuar preventivamente sobre cada um deles?

Através de uma documentação detalhada e atualizada, ambientes de teste realistas, automatizando teste para garantir que sejam executados de forma consistente em diferentes ambientes e com um monitoramento contínuo do ambiente de teste e de produção para identificar e corrigir rapidamente quaisquer problemas. Assim garantindo a eficácia dos testes e a qualidade do software final.