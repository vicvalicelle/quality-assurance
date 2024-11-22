## Dia 6: MasterClass

- Introdução às atividades de análise de teste
- Priorização em diferentes aplicações
- Atividade

## Introdução às atividades de análise de teste

O analista de teste contribui significativamente para a qualidade e o sucesso do projeto de software e suas principais atividades envolvem:

- **Dominar a Arquitetura do Projeto:** Compreender a estrutura do software para identificar áreas críticas e planejar testes eficazes.
- **Planejar a Estratégia de Testes:** Definir os tipos de testes necessários e os critérios de sucesso.
- **Executar Testes:** Aplicar os testes planejados.
- **Analisar Prós e Contras dos Planos de Teste:** Avaliar a eficácia dos testes e identificar pontos de melhoria para o futuro.
- **Analisar e Revisar Códigos:** Examinar o código para encontrar erros e vulnerabilidades.
- **Catalogar, Periciar e Documentar Evidências:** Registrar os resultados dos testes, os defeitos encontrados e as ações corretivas tomadas.
- **Configurar e Criar Processos:** Estabelecer procedimentos padronizados para execução e análise de testes.
- **Conhecimentos Técnicos da Infraestrutura:** Dominar as ferramentas e tecnologias utilizadas no desenvolvimento e teste do software.
- **Analisar e Documentar Questões de Feedback:** Coletar e analisar o feedback dos usuários para identificar problemas e aprimorar o software.

## Priorização em diferentes aplicações

Para cada fluxo de teste, você deve se perguntar:

- **Qual é o principal objetivo da minha aplicação?**
- **O fluxo que eu estou abordando bloqueia ou dificulta a realização do objetivo principal daquela aplicação?**
    - Se a resposta for sim, esse fluxo deve ter alta prioridade nos testes. Se não, o fluxo tem uma prioridade menor.
- **Considerações importantes:** Frequência de uso, impacto financeiro, complexidade.

**E-commerce de Varejo:**

- Objetivo principal: Venda de produtos, experiência de compra fluida.
- Priorização: Fluxos críticos como finalização de compra, pagamento, cadastro, login, busca de produtos, carrinho de compras.

**Programa de Pontos:**

- Objetivo principal: Compra, transferência, resgate e uso dos pontos.
- Priorização: Fluxos de acúmulo e resgate de pontos, visualização do extrato, comunicação de promoções exclusivas, integração com o e-commerce.

**Portal de Telefonia:**

- Objetivo principal: Venda de planos, gerenciamento de serviços, suporte ao cliente.
- Priorização: Fluxos de contratação e cancelamento de planos, recarga de créditos, consulta de saldo e consumo, emissão de segunda via de fatura, atendimento via chat ou telefone.

**Demandas:**

- Priorização: Analisar o impacto da demanda no objetivo principal de cada aplicação.

## Atividade

Escolher segmento e aplicação na internet, e criar lista de fluxos prioritários para validação.

### Passo 1 - Apresentar a aplicação, o segmento e o objetivo principal do sistema;

**Aplicação:** Uber

**Segmento:** Mobilidade urbana, transporte individual como passageiro.

**Objetivo Principal:** Conectar passageiros a motoristas parceiros para viagens rápidas e seguras.

<figure>
  <img src="https://th.bing.com/th/id/OIP.JdpTc06Cds9-I6JjbuwbpAHaEK?rs=1&pid=ImgDetMain" width="60%">
</figure>

### Passo 2 - Elaborar lista de fluxos de validação prioritários no sistema escopo;

- **Cadastro do Usuário:** Para identificação e cobrança.
- **Solicitação de Viagem:** Solicitação do meio de transporte e endereço.
- **Acompanhamento da Viagem:** Status da viagem e garantindo a segurança.
- **Finalização da Viagem:** Conclui a transação e realiza o feedback.
- **Recursos Adicionais:** Testa funcionalidades extras como agendamento de viagens, recursos de segurança e suporte ao cliente.

### Passo 3 - Ordenar a lista de forma lógica, para a realização de fluxos completos na aplicação.

- **Cadastro do Usuário:**
    - Criação de conta (nome, e-mail, telefone).
    - Validação de e-mail e telefone.
    - Login com credenciais válidas e recuperação de senha.
    - Adição de forma de pagamento.
- **Solicitação de Viagem:**
    - Inserção de endereço de origem e destino.
    - Seleção da categoria do veículo.
    - Tempo e preço estimados da viagem.
    - Confirmação da solicitação.
- **Acompanhamento da Viagem:**
    - Motorista designado e informações do veículo.
    - Acompanhamento do motorista em tempo real no mapa.
    - Comunicação com o motorista.
    - Possibilidade de compartilhamento da viagem com contatos.
- **Finalização da Viagem:**
    - Confirmação da chegada ao destino.
    - Avaliação do motorista.
    - Pagamento da viagem.
    - Emissão de recibo.