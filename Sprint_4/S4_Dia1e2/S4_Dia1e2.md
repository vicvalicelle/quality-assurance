# Dia 1 e 2: MasterClass

- Planning Sprint 4
- Curso de Testes Exploratórios da Udemy

# Testes Exploratórios

## Introdução:

Testes exploratórios se concentram na capacidade de liberdade e criatividade do testador para descobrir problemas que podem acabar passando em testes mais estruturados.

**Automatizado vs. Manual:**

- Testes Automatizados: Tarefas repetitivas, verificação de funcionalidades e testes de regressão. Economizam tempo e recursos, mas podem apresentar problemas inesperados.
- Testes Manuais: Essenciais para testes exploratórios, simulando o que poderia dar errado e descobrindo problemas complexos.

**Exploratórios vs. Roteiros:**

- Testes Exploratórios: Permitem que o testador investigue áreas do software que podem não estar cobertas por roteiros predefinidos. Eles são importantes para corrigir erros.
- Testes Baseados em Roteiros: Seguem um plano predefinido. Eles são importantes para prevenir determinados erros.

**Quando Parar de Testar?**

- Pouco tempo ou pouco orçamento
- Cobertura de testes mais importantes
- Nível de confiança na qualidade

**Planejamento de Testes Exploratórios**

1. Defina Objetivos dos testes.
2. Identifique Áreas de Foco com maior risco ou complexidade.
3. Defina um ponto de partida e o que quer explorar.
4. Documente os problemas encontrados

## Estratégias:

1. **Freestyle:** O testador explora o software sem um plano predefinido. Permite descobertas inesperadas e pode perder áreas importantes.
2. **Baseado em Cenários:** Cenários simulando o comportamento do usuário e descobrir problemas em fluxos de trabalho comuns. Pode não cobrir todos os casos de uso.
3. **Baseado em Feedback:** O testador usa o feedback para investigar problemas relatados ou para validar correções. Foco em problemas reais com alta relevância.
4. **Baseado em Técnicas:** O testador aplica técnicas específicas de teste para testar funcionalidades específicas de forma sistemática com cobertura de teste mais completa, foco em áreas de risco.
    - **Classe de Equivalência:** Divide os dados de entrada em grupos e testa um valor de cada grupo.
    - **Valor Limite:** Testa os valores nos limites das classes de equivalência, pois é onde os erros são mais prováveis de ocorrer.
    - **Transição de Estados:** Testa as diferentes transições entre os estados de um sistema, verificando se as ações e condições.
    - **Tabela de Decisão:** Testa as diferentes combinações de condições e ações em um sistema..
    - **Array Ortogonal:** Cria um conjunto de testes que cobre todas as combinações possíveis de valores de entrada de forma eficiente.

**Personas:** 

São personagens fictícios que representam diferentes tipos de usuários do software. Elas ajudam testadores a entender as necessidades, objetivos, comportamentos e frustrações dos usuários, permitindo que os testes sejam mais realistas, identifique problemas específicos e melhore a experiência do usuário.

- Crie Personas: Desenvolva personas detalhadas, incluindo informações como:
        - Nome, idade, ocupação, nível de experiência com tecnologia.
        - Objetivos ao usar o software.
        - Tarefas que precisam realizar.
        - Hábitos de uso.
        - Frustrações e dificuldades.

- Use as Personas para Guiar os Testes: Ao realizar testes exploratórios, coloque-se no lugar de cada persona e tente usar o software da forma como ela usaria.
        - Quais recursos essa persona usaria mais?
        - Quais problemas ela poderia encontrar?
        - Quais funcionalidades ela acharia mais úteis?

- Adapte os Testes às Personas.

**Soap Opera Testing**

O Soap Opera Testing é uma abordagem que utiliza cenários exagerados para descobrir falhas e vulnerabilidades no sistema. Permite testar o software em situações extremas e incomuns, aumentando a probabilidade de encontrar falhas ocultas.

**Como Funciona:**

1. Criação de Cenários: Imagine um enredo dramático envolvendo situações extremas, conflitos, reviravoltas e eventos inesperados que podem acontecer durante o uso do sistema.
2. Definição de Personagens: Crie personagens com personalidades distintas, motivações e objetivos diferentes que levaram a cenários de teste únicos.
3. Execução dos Testes: Simule as interações dos personagens com o software, explorando diferentes funcionalidades e forçando o sistema.
4. Observação e Análise: Observe atentamente o comportamento do software durante os testes.

**Tours**

Utilizar  "tours" é uma estratégia interessante para organizar e executar testes exploratórios, cada distrito representa uma área específica do software com suas próprias características e funcionalidades a serem exploradas.

1. Business District: Garantir a estabilidade, confiabilidade e eficiência do software em cenários de uso crítico para o negócio, fluxos de trabalho principais, integrações com sistemas externos, desempenho em situações de alta demanda.

- **Testes:** Testes de carga e estresse, testes de segurança, testes de usabilidade para usuários avançados, testes de compatibilidade com diferentes navegadores e dispositivos.

2. Historic District: Garantir que o software continue funcionando corretamente após atualizações e mudanças, preservando a compatibilidade com sistemas e dados antigos

- **Testes:** Testes de regressão, testes de compatibilidade com versões anteriores, testes de migração de dados, testes de impacto de mudanças.

3. Entertainment District: Garantir que o software seja agradável, intuitivo e acessível para todos os usuários.

- **Testes:** Testes de usabilidade, testes de interface do usuário, testes de acessibilidade, testes de compatibilidade com diferentes resoluções de tela e dispositivos.

4. Tourism District: Garantir que novos usuários consigam entender e utilizar o software facilmente, sem dificuldades ou frustrações.

- **Testes:** Testes de usabilidade para novos usuários, testes de onboarding, testes de tutoriais e guias, testes de funcionalidades básicas.

5. Hotel District: Garantir que o software se adapte às necessidades e preferências individuais de cada usuário, configurações do usuário, perfis, preferências, histórico de uso, recomendações.

- **Testes:** Testes de personalização, testes de configurações do usuário, testes de perfis, testes de histórico de uso, testes de recomendações.

## Outras Estratégias:

**Shoe Test:** Simula o comportamento de um usuário tentando quebrá-lo de forma inesperada. Isso envolve inserir dados inválidos, clicar em botões múltiplas vezes, tentar acessar áreas restritas, realizar ações em ordem incomum, estresse do sistema, etc.

**Null, Zero, Vazio:** Situações de dados ausentes ou inválidos:

- Null: Testar como o software lida com campos nulos, variáveis nulas e referências nulas.
- Zero: Testar como o software lida com cálculos envolvendo zero, divisões por zero e valores zerados.
- Vazio: Testar como o software lida com campos vazios, listas vazias e outras estruturas de dados vazias.

**Get One, Take One:** Testar o comportamento do software quando um usuário tenta obter ou usar um recurso que já está sendo usado por outro usuário. 

**Bookmark:** Prática de salvar o estado atual do sistema durante a execução dos testes. Isso permite que você retorne a um estado anterior, compare diferentes estados e testar diferentes caminhos a partir de um estado salvo.

**Sabotage**
- Alterar dados diretamente no banco de dados
- Testar o comportamento do software com configurações inválidas ou incompatíveis.
- Interromper processos do sistema

**Ferramentas de Desenvolvedor**

As ferramentas de desenvolvedor do navegador são essenciais para testes exploratórios. Elas permitem inspecionar elementos da página, monitorar requisições e respostas, depurar o código JavaScript e simular diferentes dispositivos e tamanhos de tela

**Requisições:** Testar as requisições HTTP enviadas pelo software ao servidor é fundamental para verificar se os dados estão sendo enviados e recebidos corretamente, se a autenticação e autorização estão funcionando.

**Responsividade:** Testar o software em diferentes dispositivos e tamanhos de tela para garantir que o layout se adapte corretamente e que a experiência do usuário seja consistente em todos os dispositivos.

**Acessibilidade:** Testar o software com leitores de tela, teclados e outras tecnologias assistivas para garantir que ele seja acessível a pessoas com deficiência.

**Segurança:** Testar a segurança do software envolve tentar explorar vulnerabilidades que possam permitir acesso não autorizado a dados, execução de código malicioso, roubo de informações, como testes de injeção de SQL, etc.

**Banco de Dados:** Testar o banco de dados envolve verificar se os dados estão sendo armazenados e recuperados corretamente, se as consultas SQL estão sendo executadas de forma eficiente, etc.