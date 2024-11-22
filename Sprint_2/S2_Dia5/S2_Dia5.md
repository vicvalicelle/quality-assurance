# Dia 5: MasterClass

- Cobertura de testes de APIs
- Testes candidatos à automação

## Cobertura de testes de APIs

Os critérios de cobertura ajudam a avaliar a abrangência e eficácia dos testes de API.

- Cobertura de Entrada (Input Coverage):

    - **Path Coverage:** Certifica se todos os endpoints da API foram testados pelo menos uma vez.
    - **Operator Coverage:** Avalia se todos os métodos HTTP da API foram testados e se responde corretamente a diferentes tipos de requisições.
    - **Parameter Coverage:** Verifica se todos os parâmetros de entrada (query parameters, path parameters, headers) de cada endpoint foram testados e se o comportamento está correto.
    - **Parameter Value Coverage:** Testa diferentes valores válidos e inválidos para cada parâmetro de entrada, identificando como a API lida com entradas esperadas e inesperadas.
    - **Content-Type Coverage:** Testa diferentes formatos de conteúdo (JSON, XML, etc.) enviados e recebidos pela API. Assegurando que a API consiga processar e gerar diferentes tipos de dados.
    - **Operation Flow:** Testa diferentes sequências de chamadas à API e se funciona corretamente em fluxos de trabalho complexos e interdependentes.

- Cobertura de Saída (Output Coverage):

    - **Response Properties Body Coverage:** Verifica se todas as propriedades e campos no corpo de resposta da API foram testados e se estão retornando os dados corretos e no formato esperado.
    - **Status Code Coverage:** Testa se todos os códigos de status HTTP da API foram cobertos pelos testes.

## Testes Candidatos à Automação

A automação de testes pode trazer aumento da eficiência, redução de erros humanos e maior cobertura de testes. Porém, nem todos os testes são adequados para automação.

- **Fluxos Críticos:** Testes que cobrem os fluxos de usuário mais importantes e frequentes são ótimos candidatos à automação, já que a automação destes garante que as funcionalidades essenciais estejam sempre funcionando corretamente.
- **Testes de Regressão:** A automação de testes de regressão, que verificam se novas alterações no código não alteraram funcionalidades existentes, é fundamental para garantir a estabilidade.
- **Testes de Smoke:** Testes rápidos que verificam a saúde geral do sistema já que podem ser executados para garantir que o sistema esteja funcionando em um nível básico antes de realizar testes mais detalhados quando o sistema é atualizado.
- **Alto Risco:** Testes que cobrem áreas do sistema com alto risco de falha ou que, se falharem, podem ter um impacto significativo nos negócios, são prioritários para automação.
- **Tarefas Repetitivas:** Testes que são repetitivos e demorados para serem executados manualmente, propensos a erros humanos ou até para garantir a consistência da experiência do usuário. A automação desses testes permite executar os testes com mais frequência e obter resultados mais consistentes, eficientes e confiáveis.

<figure>
  <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/regisleandro/images/501756/Picture3.png" width="70%">
</figure>

**Outros Fatores a Considerar**

- Estabilidade do sistema
- Custo-benefício
- Disponibilidade de ferramentas
- Se são demandas novas