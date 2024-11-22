# Dia 2: Ágil
- Vídeo: Por que eu deveria testar a performance da minha API?
- Vídeo: Lições Aprendidas e Processo de Teste de Performance
- Seção 10 do curso da udemy: JMeter - Testes de performance

### **Por que Testar a Performance da API?**

Testar a performance da API é necessária para garantir que funcione de forma eficiente e confiável sob diferentes condições de carga.

**O que são Requisitos Não Funcionais e Teste de Performance?**

- Requisitos Não Funcionais (RNF): Características de um sistema que não estão diretamente relacionadas à sua funcionalidade principal.
- Teste de Performance: Identifica gargalos de performance, problemas de escalabilidade e garante que a API atenda aos RNFs definidos.

**Quando Testar a Performance?**

Devem ser realizados em todas as fases do desenvolvimento de software, permitindo que os problemas de performance sejam identificados e corrigidos o mais rapidamente possível, evitando retrabalho e custos adicionais.

Negligenciar os requisitos de performance pode levar a vários problemas, incluindo:

- Experiência do usuário ruim.
- Danos à reputação da empresa.
- Custos de correção elevados.

Enquanto ao testar a performance você:

- Previne problemas.
- Direciona uma melhor arquitetura para atender as necessidades de negócio.
- Evita retrabalhos.
- Zela pala reputação da aplicação.
- Não causa danos aos clientes/usuários
- Garante responsabilidade legal.

### **Lições Aprendidas e Processo de Teste de Performance:**

1. Planejamento:
    - Defina metas e objetivos claros para o teste de performance.
    - Crie um plano de teste detalhado que inclua os cenários de teste, a carga esperada e os recursos necessários.
    - Garanta que todos estejam alinhados com os objetivos e expectativas do teste.
2. Antecipe:
    - Identifique os gargalos de performance em potencial antes de iniciar os testes.
    - Analise a arquitetura do sistema.
3. Backup:
    - Faça backups regulares. Isso permitirá que você restaure o sistema para um estado anterior caso algo dê errado durante os testes.
4. Ambiente Similar ao de Produção:
    - Crie um ambiente de teste que seja o mais próximo possível do ambiente de produçã.
5. Cenários de Teste Específicos:
    - Defina cenários de teste com diferentes tipos de usuários, diferentes horários de pico e diferentes volumes de dados.
6. Critérios de Aceitação:
    - Critérios de aceitação claros e mensuráveis antes de iniciar os testes ajudam a determinar se o sistema atende aos requisitos de performance.
7. Massa de Teste:
    - Prepare a massa de dados para o teste.
8. Resultados:
    - Relatórios de teste claros e concisos que apresentem os resultados de forma objetiva e compreensível para visualizar os dados de performance.
    - Discuta as ações necessárias para melhorar a performance do sistema.

### Conceitos de teste de performance

**Requisições HTTP**

HTTP é um protocolo que define como as informações são trocadas entre um cliente e um servidor. As requisições HTTP são a base da comunicação entre clientes e servidores na web. Após receber um request, o servidor envia uma response. Essa resposta inclui um código de status que indica o resultado da requisição divididos em cinco classes:

- 1xx: Informativo (a requisição foi recebida e está sendo processada).
- 2xx: Sucesso (a requisição foi recebida, compreendida e aceita).
- 3xx: Redirecionamento (é necessário realizar ações adicionais para completar a requisição).
- 4xx: Erro do cliente (a requisição contém erros de sintaxe ou não pode ser atendida).
- 5xx: Erro do servidor (o servidor falhou ao processar uma requisição aparentemente válida).

**Modelos de Testes:**

- Teste de carga: Simula o uso normal do sistema para verificar se ele atende aos requisitos de performance.
- Teste de estresse: Aumenta a carga além do normal para identificar o ponto de ruptura do sistema sob condições hostis.
- Teste de pico: Simula picos para verificar se o sistema consegue lidar com aumentos repentinos de demanda.
- Teste de continuidade: Simula uma carga próxima à esperada em produção, mantendo por um longo período de tempo.

**Ambiente, Volume e Cenários**

- Cenários: Os cenários de teste devem ser pensados em situações similares às reais, representar as principais funcionalidades do sistema e os fluxos de trabalho mais comuns dos usuários.
- Volumetria: A carga de teste deve simular o volume de tráfego esperado e pensado em produção em relação ao tempo.
- Ambiente: O ambiente de teste deve ser o mais próximo possível do ambiente de produção. Se não for possível, pode aplicar o cálculo em escala: horizontalmente (adicionando novas máquinas) ou verticalmente (adicionando recursos como memória e CPU).

**Indicadores orientados a serviço:**

- Tempo de Resposta: O tempo que o sistema leva para responder a uma requisição.
- Disponibilidade: A capacidade do sistema de lidar com a carga de trabalho durante um período de tempo.

**Indicadores orientados a eficiência:**

- Throughput (Vazão): O número de requisições que o sistema pode processar por unidade de tempo.
- Utilização de Recursos: Otimização de infraestrutura e custos de escalabilidade horizontal e vertical.

**Terminologias Adicionais:**

- Baseline: Uma referência de desempenho que serve como base para comparação.
- Benchmarking: Comparação do desempenho de um sistema com um padrão de referência.
- Métricas: Valores mensuráveis que indicam o desempenho do sistema.
- Saturação: Estado em que um sistema está operando em sua capacidade máxima e não consegue lidar com mais carga.
- Workload: A quantidade de trabalho que um sistema precisa realizar.
- Think Time: Tempo que um usuário real leva para pensar e interagir com o sistema entre ações.
- Ramp Up: O processo de aumentar gradualmente a carga de trabalho em um teste de desempenho para simular o aumento do tráfego ao longo do tempo.
- Steady State: O estado em que um sistema está operando sob uma carga constante por um período prolongado de tempo.

**Defeitos de Performance:**

- Timeouts: O sistema não responde a uma requisição dentro do tempo limite.
- Tempo de resposta: O sistema leva muito tempo para responder a uma requisição.

**Defeitos Funcionais:**

- Falha de caching: O sistema não armazena em cache os dados corretamente.

**Defeitos Estruturais:**

- Memory leak: O sistema não libera memória corretamente.
- Corrupção de dados: O sistema armazena ou processa dados incorretamente.
- Load balancer: Distribui o tráfego entre vários servidores para melhorar o desempenho e a escalabilidade.

**Defeitos de Segurança:**

- Exposição de dados: O sistema expõe dados confidenciais sem autorização.

**Defeitos de Infraestrutura de Rede:**

- Latência: O tempo que um pacote de dados leva para viajar de um ponto a outro na rede.
- Largura de banda: A quantidade de dados que pode ser transmitida por um canal de comunicação por unidade de tempo.