# Day 1: MasterClass

- User Stories &amp; Issues: Definition of Ready (DoR)
- HTTP, REST API, JSON concepts
- Course Summary: Software Requirements Analysis with User Stories

## Definition of Ready (DoR)

**What is the Definition of Ready (DoR)?**

The DoR is a set of criteria that a user story must meet before it is considered ready to be started in a sprint or iteration. It ensures that the item is sufficiently clear, understood, and ready to be worked on by the team. The Product Owner usually sets the initial criteria, but the team also contributes their experience and technical knowledge.

**Importance of DoR:**

- **Improves communication and collaboration:** DoR ensures that everyone involved in the project has a common understanding, avoiding misunderstandings and rework.
- **Increases predictability:** Being able to estimate effort more accurately and plan the sprint more realistically.
- **Reduces risk:** Helps identify and mitigate risks early.
- **Improves quality:** The team can focus on delivering a high-quality product instead of wasting time on clarifications and adjustments.

**Example:**

"Create a login page". The DoR should include:

- Detailed description of the page (layout, design, etc.).
- Password validation, user validation, etc.).
- Technical requirements (technologies, integrations, etc.).
- Size estimate.

With the DoR defined, the team can start development knowing exactly what needs to be done and how success will be measured.

## HTTP Concepts and REST APIs

**Microservices vs. Monolith**

- **Monolith:** All functionality is grouped into a single code base and deployed together.
- **Microservices:** Divides an application into small, independent services, each with its own responsibility and code base. These services communicate through APIs.

<figure>   <img src="https://supero.com.br/wp-content/uploads/2020/06/monolito-versus-microsservi%C3%A7os-1-1024x469.png" width="70%"> </figure>

**API**

- **API (Application Programming Interface):** An API is a set of rules and specifications that allows different software to communicate and exchange information.
- **Advantages:**
    - **Modularity:** divide functionality into reusable modules.
    - **Flexibility:** allows different systems and platforms to integrate.
    - **Innovation:** Allow developers to create new applications and services based on existing functionality.
    - **Efficiency:** automate processes and reduce the need for manual intervention.

**HTTP**

- **HTTP (Hypertext Transfer Protocol):** Communication protocol used to transfer information on the web.
- **Request:** A message sent by the client to request a resource from the server.
- **Response:** A message sent by the server in response to a request, containing the requested resource or an error message.

**HTTP vs. HTTPS:**

- **HTTPS:** Uses encryption to protect communication between client and server, ensuring data confidentiality and integrity.

**REST**

- **REST (Representational State Transfer):** An architectural style for designing distributed systems, such as web APIs.
- **RESTful:** An API that follows the principles of REST:
    - **Stateless:** Each client request contains all the information necessary for the server to process it.
    - **Client-Server:** Clear separation between client and server.
    - **Cacheable:** Server responses can be cached for better performance.
    - **Layered System:** The client does not need to know whether it is communicating directly with the server or with an intermediary.
    - **Uniform Interface:** A standardized set of operations (HTTP verbs) for interacting with resources.
    - **Code on Demand (optional):** The server can extend the client's functionality by sending executable code.

## **Software Requirements Analysis with User Stories**

**User Story: INVEST**

A user story is a description of a software functionality from the user's point of view. They should be:

- **Independent:** Each story should be independent of the others, allowing them to be developed and delivered in any order.
- **Negotiable:** Stories should be flexible and open to negotiation between the team and the PO.
- **Valuable:** Every story must deliver value in the end.
- **Estimable:** The team must be able to estimate the effort required to develop it.
- **Small:** Stories should be small enough to be developed in a single sprint.
- **Testable:** The story must have clear acceptance criteria that allow verification that the functionality was implemented correctly.

**Example Mapping**

Example Mapping is a technique used to detail user stories and ensure a shared understanding between the team and the PO. The process involves:

1. **Write the user story on a card.**
2. **Identify business rules and write them on separate cards.**
3. **Create examples to illustrate the rules.**
4. **Discuss the examples and rules to ensure everyone has a clear understanding of the story.**
5. Ensuring improved communication, reducing ambiguities, facilitating estimation and improving quality.

## Complementary Activity 1:

Imagine what would be important to have in a bug report for you?

The activity consists of creating a template for reporting bugs that should be used when a problem is found in the application being tested during this Sprint to perform reports in Gitlab.

A tip: a good report usually includes a summary, expected results, results obtained, and steps for reproducing the results, as well as some other additional information. Discuss the templates you have created with your colleagues.

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

## Complementary Activity 2:

Research the meaning of the different REST API status codes. Understand the families and main codes for each one. We don't need to memorize them all, but it's important to know the groups and the most frequent ones. The more eloquent the API communication is, the better!

HTTP status codes provide information about the outcome of a request, indicating whether the operation was successful, whether there was an error, or whether further action is required.

**Status Code Families**

HTTP status codes are divided into five classes, each representing a type of response:

1. **Informational (1xx):** The request has been received and is being processed.
2. **Success (2xx):** The request was received, understood and processed successfully.
3. **Redirection (3xx):** Additional action is required to complete the request.
4. **Client Error (4xx):** The request contains invalid syntax or cannot be fulfilled.
5. **Server Error (5xx):** The server failed to process an apparently valid request.

**Main Codes of Each Family**

**1xx Information:**

`[100 Continue]` **:** Indicates that the client should continue the request or ignore the response if the request is already complete.

`[01 Switching Protocols]` : Sent in response to an `[Upgrade]` request header from the client and indicates the protocol the server is switching to.

`[102 Processing]` : The server has received and is processing the request, but no response is available yet.

**2xx Success:**

`[200 OK]` : Request was successful. The meaning of the "success" result depends on the HTTP method:

- `GET` : The resource was obtained and transmitted in the message body.
- `HEAD` : Representation headers are included in the response without any message body.
- `PUT` or `POST` : The resource describing the result of the action is transmitted in the message body.
- `TRACE` : The message body contains the request message received by the server.

`[204 No Content]` : There is no content to send for this request, but the headers may be useful.

**3xx Redirection**

`[300 Multiple Choices]` : The request has more than one possible answer. The user agent or user must choose one of them.

`[301 Moved Permanently]` : The URL of the requested resource has changed permanently. The new URL is provided in the response.

`[302 Found]` : This response code means that the URI of the requested resource has temporarily changed. Further changes to the URI may be made in the future.

`[304 Not Modified]` : Informs the client that the response has not been modified, so the client can continue to use the same cached version of the response.

**4xx Client Error:**

`[400 Bad Request]` : The server cannot or will not process the request due to something that is perceived as a client error.

`[401 Unauthorized]` : The client must authenticate to get the requested response.

`[403 Forbidden]` : The client does not have access rights to the content; that is, it is not authorized, so the server is refusing to provide the requested resource.

`[404 Not Found]` : The server cannot find the requested resource. In the browser, this means that the URL is not recognized. In an API, this can also mean that the endpoint is valid, but the resource itself does not exist.

`[405 Method Not Allowed]` : The request method is known to the server, but is not supported by the target resource.

`[409 Conflict]` : A request conflicts with the current server state.

`[422 Unprocessable Content]` : The request was well-formed, but could not be fulfilled due to semantic errors.

`[429 Too Many Requests]` : The user sent too many requests in a given time ("rate limiting").

**5xx Server Error:**

`[500 Internal Server Error]` : The server has encountered a situation it cannot handle.

`[503 Service Unavailable]` : The server is not ready to handle the request Common causes are a server undergoing maintenance or being overloaded.

`[504 Gateway Timeout]` : This error response is given when the server is acting as a gateway and is unable to get a response in time.

`[505 HTTP Version Not Supported]` : The HTTP version used in the request is not supported by the server.
