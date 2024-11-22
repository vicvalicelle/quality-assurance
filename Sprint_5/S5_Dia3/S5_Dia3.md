# Dia 3: MasterClass
- Princípios, tipos de testes, geração de carga e falhas comuns dos testes de performance
- Curso da udemy: JMeter - Testes de performance

### Teste de performance
<details>
<summary> Syllabyus CT-PT </summary>

## **1.1 Princípios do Teste de Performance**

A eficiência de performance é categorizada na ISO-25010 como uma característica de qualidade não funcional, que inclui três subcaracterísticas:

- Comportamento do tempo: Avalia o tempo de resposta de um componente ou sistema às entradas do usuário ou do sistema.
- Utilização de recursos: Investiga a alocação e utilização dos recursos do sistema, como a memória RAM.
- Capacidade: Avalia o comportamento do sistema nos limites de sua capacidade, como número de usuários ou volumes de dados.

Os testes de performance assumem a forma de experimentação, podendo ser conduzidos iterativamente para suportar a análise, design e implementação do sistema.

Os princípios importantes dos testes de performance são:

- Alinhamento com as expectativas dos stakeholders.
- Reprodutibilidade dos testes.
- Produção de resultados compreensíveis e comparáveis.
- Execução em sistemas completos ou parciais ou em ambientes similares ao de produção.
- Praticidade, acessibilidade e execução dentro do prazo do projeto.

## **1.2 Tipos de Teste de Performance**

- **Teste de Performance**: Qualquer tipo de teste focado na performance do sistema ou componente sob variados volumes de carga.
- **Teste de Carga**: Habilidade do sistema de lidar com níveis crescentes de carga.
- **Teste de Estresse**: Capacidade do sistema de lidar com picos de carga que ultrapassam os limites previstos de carga de trabalho. Ele também testa a resistência do sistema a uma diminuição de recursos disponíveis.
- **Teste de Escalabilidade**: Capacidade de um sistema de atender a requisitos futuros de eficiência, incluindo expansão para mais usuários ou grandes quantidades de dados.
- **Teste de Pico**: Avalia a capacidade do sistema de lidar com rajadas súbitas de cargas de pico e retornar a um estado estável.
- **Teste de Resistência**: Estabilidade do sistema ao longo de um período específico, verificando se não há problemas que possam degradar a performance ou causar falhas ao longo do tempo.
- **Teste de Concorrência**: Verifica o impacto de ações específicas que ocorrem simultaneamente, como quando muitos usuários fazem login ao mesmo tempo.
- **Teste de Capacidade**: Determina o número de usuários e/ou transações que um sistema pode suportar, mantendo uma performance aceitável.

## **1.3 Testando os tipos do Teste de Performance**

- **Testes Estáticos**: Envolvem a análise da performance do sistema sem executar o programa. Eles são especialmente úteis para detectar problemas de performance que podem ocorrer durante a modelagem e arquitetura do sistema. Os testes estáticos incluem revisões de requisitos, análise do banco de dados e esquemas de redes, e revisões do código do sistema.
- **Testes Dinâmicos**: Estes são conduzidos enquanto o sistema está em execução. Podem ser realizados em vários estágios do ciclo de vida do desenvolvimento do software, incluindo o teste de unidade, teste de integração de componentes, teste de sistema e teste de integração do sistema. É importante para os testes de performance serem incorporados ao ciclo de vida iterativo do desenvolvimento do software desde o início. O teste de performance dinâmico também pode ser realizado usando simuladores, embora seja ideal testar o hardware real o mais cedo possível.

**Geração de Carga**: Para a realização de vários tipos de testes de performance, é necessário modelar, gerar e submeter cargas representativas ao sistema em teste. As cargas podem ser geradas de várias maneiras:

- **Geração de Carga através da Interface do Usuário**: Adequada quando apenas um pequeno número de usuários precisa ser representado.
- **Geração de Carga usando Grupos**: Envolve muitos testadores que representam usuários reais. Essa abordagem é útil para testar aplicações acessíveis globalmente, mas a carga gerada pode não ser tão precisa ou reprodutível.
- **Geração de Carga por meio de API (Application Programming Interface)**: Permite simular a interação do usuário com o sistema em teste de uma maneira menos sensível a alterações na interface do usuário. Scripts dedicados podem ser criados para chamar rotinas API específicas.
- **Geração de Carga usando Protocolos de Comunicação Capturados**: Involui a captura da interação do usuário com o sistema em teste no nível do protocolo de comunicação e reprodução desses scripts para simular um grande número de usuários.

Esses testes são fundamentais para garantir que o sistema pode lidar com diferentes cargas e condições enquanto mantém uma performance consistente e estável.

## **1.4 Modos comuns de falha de eficiência de performance e suas causas**

**Resposta lenta em todas as cargas**: Pode ser causado por problemas subjacentes como modelagem inadequada do banco de dados, latência de rede e outras cargas de fundo.

**Resposta lenta sob carga moderada a pesada**: A resposta pode se degradar de forma inaceitável com cargas dentro dos limites permitidos. A causa geralmente é a saturação dos recursos ou variações de cargas pesadas.

**Resposta degradada ao longo do tempo**: Este é um problema em que a resposta se degrada gradualmente com o tempo. Causas típicas incluem vazamentos de memória, fragmentação de disco, aumento da carga de rede, crescimento do repositório de arquivos e crescimento inesperado do banco de dados.

**Tratamento inadequado de erros sob alta carga ou além do limite**: Aqui, o tempo de resposta é aceitável, mas o tratamento de erros é inadequado em altos níveis de carga. Defeitos subjacentes comuns incluem recursos insuficientes, filas e pilhas pequenas e configurações de tempo limite muito rápidas.

Exemplos específicos desses problemas incluem um aplicativo web que não responde dentro de um prazo aceitável, um sistema que falha sob uma grande quantidade súbita de solicitações, sistemas que apresentam resposta lenta quando lidam com grandes volumes de dados, processamento em lote que não pode ser concluído a tempo e sistemas em tempo real que ficam sem memória suficiente ao lidar com grandes demandas de memória dinâmica.

[Syllabyus CT-PT](https://bstqb.online/docs/syllabus_ct-pt_1.0br.pdf)

</details>

## **JMeter**

É uma ferramenta de teste de carga e desempenho de código aberto, permite criar e executar testes de carga complexos para avaliar o desempenho do sistema sob diferentes condições e identificar gargalos.

**Componentes do JMeter:**

- Controladores Lógicos: Controlam a ordem de execução dos samplers, permitindo criar fluxos de trabalho complexos.
- Grupo de Usuários: Representa um grupo de usuários virtuais que executam o mesmo plano de teste.
- Amostradores: Enviam requisições ao sistema que está sendo testado, como requisições HTTP, FTP, JDBC, etc.
- Ouvintes: Capturam e exibem os resultados dos testes, como tempos de resposta, códigos de status e erros.
- Temporizadores: Adicionam pausas entre as requisições para simular o comportamento real do usuário.
- Asserções: Verificam se as respostas do sistema atendem às expectativas, como validar o conteúdo da resposta ou o tempo de resposta.
- Elementos de Configuração: Configurações globais para o plano de teste, como cabeçalhos HTTP, variáveis e parâmetros.
- Elementos Pré-processadores: Executam ações antes da requisição ser enviada, como obter dados de um arquivo CSV ou gerar dados aleatórios.
- Elementos Pós-processadores: Executam ações após a requisição ser enviada, como extrair dados da resposta ou armazenar dados em um arquivo.

**Ordem de Execução dos Componentes**

1. Configuration Elements: Configurações globais são aplicadas a todo o plano de teste.
2. Pre-Processors: Executados antes de cada sampler.
3. Timers: Adicionam pausas antes de cada sampler.
4. Samplers: Enviam a requisição ao sistema.
5. Post-Processors: Executados após cada sampler.
6. Assertions: Verificam as respostas do sistema.
7. Listeners: Capturam e exibem os resultados.