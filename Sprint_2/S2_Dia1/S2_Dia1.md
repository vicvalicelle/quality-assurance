# Dia 1: MasterClass
- User Stories & Issues: Definition of Ready (DoR)
- Conceitos HTTP, API REST, JSON
- Resumo do curso: Análise de Requisitos de Software com Histórias de Usuários

## Definition of Ready (DoR)

**O que é a Definition of Ready (DoR)?**

A DoR é um conjunto de critérios que uma história de usuário deve atender antes de ser considerado pronto para ser iniciado em um sprint ou iteração. Garantindo que o item esteja suficientemente claro, compreendido e preparado para ser trabalhado pela equipe. O Product Owner geralmente define os critérios iniciais, mas a equipe também contribui com sua experiência e conhecimento técnico.

**Importância da DoR:**

- **Melhora a comunicação e colaboração:** A DoR garante que todos os envolvidos no projeto tenham um entendimento comum sobre, evitando mal-entendidos e retrabalho.
- **Aumenta a previsibilidade:** Podendo estimar o esforço com mais precisão e planejar o sprint de forma mais realista.
- **Reduz o risco:** Ajuda a identificar e mitigar riscos antecipadamente.
- **Melhora a qualidade:** A equipe pode se concentrar em entregar um produto de alta qualidade, em vez de perder tempo com esclarecimentos e ajustes.

**Exemplo:**

"Criar uma página de login". A DoR deveria incluir:

- Descrição detalhada da página (layout, design etc.).
- Validação de senha, validação de usuário, etc.).
- Requisitos técnicos (tecnologias, integrações, etc.).
- Estimativa de tamanho.

Com a DoR definida, a equipe pode iniciar o desenvolvimento sabendo exatamente o que precisa ser feito e como o sucesso será medido.

## Conceitos HTTP e APIs REST

**Microsserviços vs. Monolito**

- **Monolito:** Todas as funcionalidades estão agrupadas em um único código base e implantadas juntas.
- **Microsserviços:** Divide uma aplicação em pequenos serviços independentes, cada um com sua responsabilidade e código base. Esses serviços se comunicam por meio de APIs.

<figure>
  <img src="https://supero.com.br/wp-content/uploads/2020/06/monolito-versus-microsservi%C3%A7os-1-1024x469.png" width="70%">
</figure>

**API**

- **API (Application Programming Interface):** Uma API é um conjunto de regras e especificações que permite que diferentes softwares se comuniquem e troquem informações.
- **Vantagens:**
    - **Modularidade:** dividem a funcionalidade em módulos reutilizáveis.
    - **Flexibilidade:** permitem que diferentes sistemas e plataformas se integrem.
    - **Inovação:** permitem que desenvolvedores criem novas aplicações e serviços com base em funcionalidades existentes.
    - **Eficiência:** automatizam processos e reduzem a necessidade de intervenção manual.

**HTTP**

- **HTTP (Hypertext Transfer Protocol):** Protocolo de comunicação usado para transferir informações na web.
- **Request:** Uma mensagem enviada pelo cliente para solicitar um recurso do servidor.
- **Response:** Uma mensagem enviada pelo servidor em resposta a uma solicitação, contendo o recurso solicitado ou uma mensagem de erro.

**HTTP vs. HTTPS:**

- **HTTPS:** Usa criptografia para proteger a comunicação entre cliente e servidor, garantindo a confidencialidade e integridade dos dados.

**REST**

- **REST (Representational State Transfer):** Um estilo de arquitetura para projetar sistemas distribuídos, como APIs web.
- **RESTful:** Uma API que segue os princípios do REST:
    - **Stateless:** Cada solicitação do cliente contém todas as informações necessárias para o servidor processá-la.
    - **Client-Server:** Separação clara entre cliente e servidor.
    - **Cacheable:** Respostas do servidor podem ser armazenadas em cache para melhor desempenho.
    - **Layered System:** O cliente não precisa saber se está se comunicando diretamente com o servidor ou com um intermediário.
    - **Uniform Interface:** Um conjunto padronizado de operações (verbos HTTP) para interagir com os recursos.
    - **Code on Demand (opcional):** O servidor pode estender a funcionalidade do cliente enviando código executável.

## **Análise de Requisitos de Software com Histórias de Usuários**

**História de Usuário: INVEST**

Uma história de usuário é uma descrição de uma funcionalidade do software do ponto de vista do usuário. Elas devem ser:

- **Independente (Independent):** Cada história deve ser independente das outras, permitindo que sejam desenvolvidas e entregues em qualquer ordem.
- **Negociável (Negotiable):** As histórias devem ser flexíveis e abertas a negociação entre a equipe e o PO.
- **Valiosa (Valuable):** Cada história deve entregar valor ao final.
- **Estimável (Estimable):** A equipe deve ser capaz de estimar o esforço necessário para desenvolve-la.
- **Pequena (Small):** As histórias devem ser pequenas o suficiente para serem desenvolvidas em uma única sprint.
- **Testável (Testable):** A história deve ter critérios de aceitação claros que permitam verificar se a funcionalidade foi implementada corretamente.

**Example Mapping**

Example Mapping é uma técnica utilizada para detalhar histórias de usuário e garantir um entendimento compartilhado entre a equipe e o PO. O processo envolve:

1. **Escrever a história de usuário em um cartão.**
2. **Identificar regras de negócio e escrever em cartões separados.**
3. **Criar exemplos para ilustrar as regras.**
4. **Discutir os exemplos e regras para garantir que todos tenham claro entendimento da história.**
5. Garantindo melhora na comunicação, redução de ambiguidades, facilitando a estimativa e melhorando a qualidade.

## Atividade Complementar 1:

Imagine o que seria importante possuir em um relato de bug para você?

A atividade consiste em criar um template para reportar bugs que deverá ser utilizado quando for encontrado algum problema na aplicação em testes estudada durante esta Sprint para realizar os reports no Gitlab.

Uma dica: um bom report normalmente indica um resumo, resultado esperado, resultado obtido e passos para reprodução, além de algumas outras informações complementares. Discuta com seus colegas sobre os templates imaginados.

```
Template GitLab

[Indicador de gravidade/prioridade do problema] e [Indicador da parte afetada da aplicação]

Título (Foco principal do bug em questão) :

[Resumo breve e descritivo do problema]

- Resultado Esperado: O comportamento esperado da aplicação.
- Resultado Obtido: O comportamento real (de preferência com evidências e o passo a passo do que foi realizado para chegar nesse resultado).
- Efeitos: Impacto no usuário.
- Observações: Informações adicionais relevantes para a solução do problema.
```

## Atividade Complementar 2:

Pesquise sobre o significado dos diferentes status code de API REST. Entenda quais são as famílias e os códigos principais de cada uma. Não precisamos decorar todos, mas é importante conhecer os grupos e os mais frequentes. Quanto mais eloquente for a comunicação da API melhor!

Os códigos de status HTTP (Status Codes) fornecem informações sobre o resultado de uma requisição, indicando se a operação foi bem-sucedida, se houve algum erro ou se alguma outra ação é necessária.

**Famílias de Status Code**

Os códigos de status HTTP são divididos em cinco classes, cada uma representando um tipo de resposta:

1. **Informativos (1xx):** A requisição foi recebida e está sendo processada.
2. **Sucesso (2xx):** A requisição foi recebida, entendida e processada com sucesso.
3. **Redirecionamento (3xx):** Ação adicional é necessária para completar a requisição.
4. **Erro do Cliente (4xx):** A requisição contém sintaxe inválida ou não pode ser atendida.
5. **Erro do Servidor (5xx):** O servidor falhou ao processar uma requisição aparentemente válida.

**Códigos Principais de Cada Família**

**1xx Informativos:**

`[100 Continue]` **:** Indica que o cliente deve continuar a solicitação ou ignorar a resposta se a solicitação já estiver concluída.

`[01 Switching Protocols]`: Enviado em resposta a um cabeçalho de solicitação `[Upgrade]` do cliente e indica o protocolo para o qual o servidor está mudando.

`[102 Processing]` : O servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda.

**2xx Sucesso:**

`[200 OK]`: Solicitação foi bem-sucedida. O significado do resultado de "sucesso" depende do método HTTP:

* `GET`: O recurso foi obtido e transmitido no corpo da mensagem.
* `HEAD`: Os cabeçalhos de representação são incluídos na resposta sem nenhum corpo de mensagem.
* `PUT` ou `POST`: O recurso que descreve o resultado da ação é transmitido no corpo da mensagem.
* `TRACE`: O corpo da mensagem contém a mensagem de requisição recebida pelo servidor.

`[204 No Content]`: Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis. 

**3xx Redirecionamento**

`[300 Multiple Choices]`: A solicitação tem mais de uma resposta possível. O agente do usuário ou usuário deve escolher um deles.

`[301 Moved Permanently]`: A URL do recurso solicitado foi alterada permanentemente. A nova URL é fornecida na resposta.

`[302 Found]`: Este código de resposta significa que o URI do recurso solicitado foi alterado temporariamente. Outras alterações no URI podem ser feitas no futuro. 

`[304 Not Modified]`: Informa ao cliente que a resposta não foi modificada, portanto, o cliente pode continuar a usar a mesma versão em cache da resposta.

**4xx Erro do Cliente:**

`[400 Bad Request]`: O servidor não pode ou não irá processar a solicitação devido a algo que é percebido como um erro do cliente.

`[401 Unauthorized]`: O cliente deve se autenticar para obter a resposta solicitada.

`[403 Forbidden]`: O cliente não tem direitos de acesso ao conteúdo; ou seja, não é autorizado, portanto o servidor está se recusando a fornecer o recurso solicitado.

`[404 Not Found]`: O servidor não pode encontrar o recurso solicitado. No navegador, isso significa que o URL não é reconhecido. Em uma API, isso também pode significar que o endpoint é válido, mas o próprio recurso não existe. 

`[405 Method Not Allowed]`: O método de solicitação é conhecido pelo servidor, mas não é suportado pelo recurso de destino. 

`[409 Conflict]`: Uma requisição conflita com o estado atual do servidor.

`[422 Unprocessable Content]`: A solicitação foi bem formada, mas não pôde ser atendida devido a erros semânticos.

`[429 Too Many Requests]`: O usuário enviou muitas requisições num dado tempo ("limitação de frequência").

**5xx Erro do Servidor:**

`[500 Internal Server Error]`: O servidor encontrou uma situação com a qual não sabe lidar.

`[503 Service Unavailable]`: O servidor não está pronto para manipular a requisição Causas comuns são um servidor em manutenção ou sobrecarregado. 

`[504 Gateway Timeout]`: Essa resposta de erro é fornecida quando o servidor está atuando como um gateway e não consegue obter uma resposta a tempo.

`[505 HTTP Version Not Supported]`: A versão HTTP usada na requisição não é suportada pelo servidor.