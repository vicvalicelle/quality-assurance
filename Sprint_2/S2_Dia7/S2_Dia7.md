# Dia 7: MasterClass

- Análise HTTP e API REST
- Mapa Mental
- Atividade Complementar

## Análise HTTP e API REST

* **Análise Crítica da Documentação**

    1. **Estrutura e Organização**
    2. **Clareza e Objetividade**
    3. **Completude:** Todos os endpoints, métodos (GET, POST, PUT, DELETE, etc.), parâmetros, tipos de dados e códigos de resposta estão documentados? Há exemplos de requisições e respostas?
    4. **Consistência**
    5. **Acurácia:** As informações na documentação estão corretas e atualizadas?

* **Verificação de Pendências e Erros**

    1. **Endpoints não Documentados:** Compare a documentação com a implementação real da API. Há endpoints que não estão na documentação?
    2. **Parâmetros Faltantes:** Verificar se todos os parâmetros necessários para cada endpoint estão documentados, incluindo seus tipos, se são obrigatórios ou opcionais e seus valores padrão.
    3. **Erros de Tipagem:** Verificar se os tipos de dados dos parâmetros e das respostas estão corretos e correspondem à implementação.
    4. **Exemplos Incorretos:** Teste os exemplos fornecidos na documentação para garantir que funcionam como esperado.
    5. **Códigos de Resposta Incompletos:** Verificar se todos os códigos de resposta possíveis para cada endpoint estão documentados, incluindo os códigos de erro e suas descrições.

* A partir da análise da documentação, você pode criar uma **lista priorizada de validações de backend**:

    1. **Validação de Parâmetros:**
        - Verificar se os parâmetros obrigatórios estão presentes.
        - Validar os tipos de dados dos parâmetros.
        - Verificar se os valores dos parâmetros estão dentro das faixas aceitáveis.
    2. **Validação de Regras de Negócio:**
        - Implementar as regras de negócio específicas da aplicação, como verificação de permissões, consistência de dados, etc.
    3. **Tratamento de Erros e Testes de Segurança:**
        - Garantir que todos os erros possíveis sejam tratados e que mensagens de erro claras e informativas sejam retornadas e identificar vulnerabilidades.

## Mapa Mental (API)

Criar um mapa mental da API pode te ajudar a visualizar a estrutura, funcionalidades e cenários de uso da API. Use cores para facilitar a visualização, mantenha o mapa mental atualizado e o utilize como guia para a criação dos scripts de teste.

*  Análise de Funcionalidades e Mapeamento de Cenários:
    1. Identifique todos os endpoints da API.
    2. Liste os métodos HTTP de cada endpoint.
    3. Detalhe os parâmetros de entrada para cada endpoint, incluindo seus tipos e se são obrigatórios ou opcionais.
    4. Enumere os códigos de resposta esperados para cada tipo de requisição.
    5. Mapeie os principais fluxos de usuário que envolvem a API.

* Mapeamento para Automação Web:

    1. Identifique elementos que interagem com a API.
    2. Descreva as interações do usuário com esses elementos.
    3. Defina as validações a serem utilizadas na interface após as chamadas à API.

* Mapeamento para Automação de APIs:

    1. Escolha uma ferramenta de automação de testes.
    2. Crie scripts de teste que cubram os fluxos de usuário mapeados.
    3. Inclua asserções nos scripts para verificar os códigos de resposta.

## Atividade Complementar:

Monte o mapa mental da API Serverest (foco nas User Stories selecionadas para a Sprint atual). Procure mantê-lo organizado e rico em informações. Você pode indicar a necessidade de dados para a requisição, a resposta esperada em cada operação, as toras e verbos que exigem autenticação caso aplicável, etc.