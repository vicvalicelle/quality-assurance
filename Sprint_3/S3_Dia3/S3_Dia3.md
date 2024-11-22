# Dia 3: MasterClass

- DoR
- DoD
- Acceptance Criteria
- Dinâmica

## DoR - Definition of Ready (Definição de Pronto)

A DoR é um conjunto de critérios que uma user story deve atender antes de ser considerado pronto antes do processo de desenvolvimento. Deve possuir descrição clara, estimativa do esforço necessário para completa-lo, critérios de aceite definidos, dependências identificadas e deve ser decidido entre o time e o PO.

## DoD - Definition of Done (Definição de Feito)

A DoD é um conjunto de critérios que uma user story deve atender para ser considerado completo e pronto para ser entregue ao cliente. Ela garante que o item foi desenvolvido, testado e validado de acordo com os padrões de qualidade da equipe.

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:942/1*f2aH3KWGwy1axk7OwSXdKQ.png" width="40%">
</figure>

## Critérios de Aceitação (Acceptance Criteria)

Os critérios de aceitação são condições específicas que a user story deve atender para ser considerada bem-sucedida do ponto de vista do cliente. Os critérios de aceitação contém informações adicionais que não foram inseridas nas users stories e ajudam a garantir que o produto final atenda às necessidades e expectativas dos stakeholders.

## Dinâmica:

Para esta atividade você deverá escolher uma API pública (à sua escolha, alguns exemplos são: Spotify, Github, ServeRest), e com base nesta API, escrever uma User Story levantando DoR, DoD e Acceptance Criteria, podendo a Story ser algo que vocês imaginem como "novo" na API ou algo que já foi desenvolvido.

**User Stories**

1. Quem utilizará a funcionalidade?
2. Qual a ação que o ator executará?
3. Qual o objetivo da ação?

<figure>
  <img src="https://miro.medium.com/v2/resize:fit:1400/1*AKTxXEEeVJXbl734JGsJJQ.png" width="50%">
</figure>

**API escolhida:** Spotify Web API

**User Story:**

Como usuário do Spotify

Quero que o aplicativo me recomende e reproduza automaticamente músicas semelhantes àquela que acabei de ouvir recentemente

Para que eu possa descobrir novas músicas e artistas que combinem com o que eu quero ouvir no momento.

**DoR (Definition of Ready):**

- Um algoritmo de recomendação de músicas com base em gênero, artistas e popularidade.
- Um plano de testes para garantir a qualidade das recomendações e a funcionalidade da reprodução automática desenvolvido.
- Os endpoints da API do Spotify necessários identificados e documentados.

**DoD (Definition of Done):**

- A funcionalidade de recomendação e reprodução automática de músicas semelhantes implementada.
- Após o término de uma música, o aplicativo automaticamente recomenda e inicia a reprodução de uma música semelhante.
- O usuário pode personalizar as configurações de recomendação.
- O usuário pode visualizar a lista de músicas semelhantes recomendadas e escolher qual deseja ouvir.
- A documentação da API  atualizada para incluir os novos endpoints e funcionalidades relacionados à recomendação de músicas.

**Acceptance Criteria:**

- Como usuário, posso habilitar ou desabilitar a funcionalidade de reprodução automática de músicas semelhantes nas configurações do aplicativo.
- Após o término de uma música, o aplicativo automaticamente inicia a reprodução de uma música semelhante se a reprodução automática estiver habilitada.
- É possível fornecer feedback sobre as recomendações para melhorar as recomendações futuras.
- Tenho acesso a lista de músicas semelhantes recomendadas.
- Posso escolher uma música da lista de recomendações para ouvir em vez da música que foi reproduzida automaticamente.
- Ajustar o nível de similaridade das músicas recomendadas nas configurações do aplicativo de acordo com gênero, artista ou popularidade.