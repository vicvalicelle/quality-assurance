# Dia 5 e 6: MasterClass
- Risco e Impacto
- Ciclo de Teste
- Atividade: Uso/Migração do Jira + Test Cycles

## Risco e Impacto

A análise de risco e impacto permite otimizar recursos e garantir a qualidade do produto final. A aplicação de testes baseados em riscos direciona os esforços para áreas críticas, maximizando a eficiência do processo.

**Identificação de Riscos**

- Reuniões com stakeholders: Coletar informações para identificar preocupações e áreas de risco.
- Histórico de falhas: Analisar defeitos em versões anteriores ou projetos similares para identificar padrões e potenciais problemas.
- Estratégia inside-out: Começar pelos componentes internos do software e identificar os riscos associados a cada um.
- Estratégia outside-in: Analisar o software da perspectiva do usuário, identificando riscos relacionados às funcionalidades e à experiência do usuário.
- Avaliação da complexidade da aplicação: Áreas mais complexas tendem a ter maior risco.

**Matriz de Risco**

Após identificar os riscos, é fundamental priorizá-los para determinar quais exigem atenção imediata. A matriz de risco cruza a probabilidade de ocorrência de um risco com o impacto que ele teria caso ocorresse, facilitando a tomada de decisões e a alocação de recursos.

<figure>
  <img src="https://blog.aevo.com.br/wp-content/uploads/2021/07/Matriz-de-risco-e-impacto.jpg" width="60%">
</figure>

Os riscos que se posicionam nos quadrantes superiores direitos da matriz (alta probabilidade e alto impacto) são os mais críticos e devem ser priorizados.

**Definição de Estratégias de Mitigação**

- Testes específicos: Desenvolver casos de teste que foquem nos riscos priorizados.
- Revisão de código: Realizar revisões para identificar e corrigir problemas que possam levar aos riscos.
- Redesign: Em casos extremos, pode ser necessário redesenhar partes do software para eliminar ou reduzir riscos.

**Prós e Contras da Aplicação de Testes Baseados em Riscos**

Prós:
- Foco nos testes mais importantes.
- Evita testes desnecessários.
- Aumenta a probabilidade de encontrar e corrigir defeitos críticos.

Contras:
- Risco de negligenciar áreas de baixo risco
- Os valores atribuídos aos riscos podem ser subjetivos, por isso é necessário discutir com o time os valores propostos

**Riscos x Incertezas**

- Riscos: Eventos indesejáveis com probabilidade e impacto conhecidos.
- Incertezas: Eventos que podem afetar o projeto, mas cuja probabilidade e impacto são desconhecidos.

Enquanto os riscos podem ser gerenciados com estratégias de mitigação, as incertezas exigem monitoramento constante e adaptação do plano.

## **Ciclo de Teste**

O ciclo de teste de software garante a qualidade e confiabilidade do software, desde a análise inicial até a entrega final.

**Fases do Ciclo de Teste**

1. **Análise e Validação:** Garantir que os requisitos do software sejam claros, testáveis e que uma estratégia de teste adequada seja definida.
2. **Planejamento:** Determinar a ordem de execução dos testes, alinhar as entregas do desenvolvimento com os testes e identificar dependências entre os testes.
3. **Detalhamento:** Especificar os passos de execução de cada teste, decidir quais testes serão automatizados e garantir que a ordem de execução seja lógica e eficiente.
4. **Ambiente:** Configurar o ambiente de teste para replicar o ambiente de produção o mais fielmente possível.
5. **Execução:** Executar os testes de acordo com o plano de teste, documentar os resultados e identificar defeitos.
6. **Reporte:** Resultados dos testes, incluindo os defeitos encontrados e os testes que não foram executados.

**Importância da Gestão do Ciclo de Vida dos Testes**

- Identificação e correção de defeitos antes da entrega ao usuário final.
- Prevenção de retrabalho e correções tardias.
- Aumento da eficiência.
- Maior confiança no software.

**Modelos de Ciclo de Vida**

- Modelo cascata: Abordagem linear e sequencial, em que cada fase é concluída antes de iniciar a próxima.
- Modelo em V: Enfatiza a relação entre desenvolvimento e teste, com testes planejados em paralelo ao desenvolvimento.
- Modelo scrum: O software é desenvolvido e testado em ciclos repetitivos, com feedback e melhorias a cada iteração.

**Níveis de Teste**

- **Teste de componente:** Testa unidades individuais de código (funções, módulos) isoladamente.
- **Teste de integração:** Testa a interação entre componentes integrados.
- **Teste de sistema:** Testa o sistema completo, incluindo todas as funcionalidades e componentes integrados.
- **Teste de aceite:** Testa se o sistema atende aos requisitos do usuário e está pronto para ser usado em produção.

**Tipos de Teste**

- **Teste funcional:** Verifica se o software funciona conforme o esperado, atendendo aos requisitos funcionais.
- **Teste não funcional:** Avalia aspectos não funcionais do software, como desempenho, usabilidade, etc.
- **Teste de caixa preta:** Testa o software sem conhecimento do código interno, focando nas entradas e saídas.
- **Teste de caixa branca:** Testa o software com conhecimento do código interno, focando na lógica e estrutura do código.
- **Reteste:** Repete um teste que falhou após a correção de um defeito.
- **Teste de regressão:** Testa se as alterações no software não introduziram novos defeitos em funcionalidades já testadas.