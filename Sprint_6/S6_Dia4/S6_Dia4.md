# Dia 4: MasterClass
- Vídeo: Conhecendo o K6 para os testes de carga
- Vídeo: Como configurar uma rampa de VUs ( usuários simultâneos ) nos seus testes de carga na ferramenta k6?
- Vídeo: Apreendendo a utilizar o K6 HTML Report Exporter em seus testes de carga
- Vídeo: Apreendendo a utilizar os options em seus testes de carga - k6
- Vídeo: Construindo uma pipeline de testes de carga com o k6 na plataforma Azure DevOps
- Vídeo: COMO FAZER TESTES DE CARGA E DESEMPENHO COM K6?

## Conhecendo o K6 para os testes de carga

**O que é Teste de Carga?**

Teste de performance que avalia o comportamento de um sistema sob uma carga de trabalho específica.

**O que é o k6?**

k6 é uma ferramenta de código aberto e linha de comando para testes de carga e performance, conhecido por sua alta performance, baixo consumo de recursos e integração com diversas ferramentas de monitoramento.

**Casos de Uso da Ferramenta k6**

- **Testes de Carga**
- **Testes de Stress**
- **Testes de Spike**
- **Testes de Soak**
- **Testes de Smoke**
- **Testes de Regressão de Performance**
- **Testes de Capacidade**

**Exemplo Prático de Implementação de Teste de Carga no k6**

1. **Importar Módulo:** Importa o módulo `http` do k6 para fazer requisições HTTP.
2. **Definir Opções:**
    - `vus`: Define o número de usuários virtuais simultâneos
    - `duration`: Define a duração do teste
3. **Função Principal:**
    - `http.get()`: Faz uma requisição GET para o site especificado.

**Execução do Teste:**

Salve o código em um arquivo .js e execute o seguinte comando no terminal:

`k6 run teste.js`

O k6 executará o teste e exibirá os resultados no console, incluindo tempo de resposta, taxa de requisições, erros, etc.

## Configurando Rampa de VUs em Testes de Carga com k6

**O que é uma Rampa de VUs?**

Uma rampa de Usuários Virtuais é uma estratégia que permite aumentar ou diminuir gradualmente o número de usuários virtuais que acessam o sistema durante o teste. Em vez de iniciar todos os VUs de uma vez, a rampa simula um aumento gradual de tráfego.

**Criação de um Arquivo de Configuração do Projeto de Testes de Carga**

Embora o k6 permita configurar a rampa de VUs diretamente no script de teste, uma prática recomendada é criar um arquivo de configuração separado. Isso facilita a organização e reutilização das configurações em diferentes testes.

Você pode criar um arquivo de configuração com a extensão `.json` e definir as opções do teste, incluindo a rampa de VUs.

**Configuração de uma Rampa de VUs nos Testes de Carga**

1. **Usando  `stages`:**
    - No arquivo de configuração ou diretamente no script de teste, defina um array de objetos com as etapas da rampa:
        - `duration`: Duração de cada etapa.
        - `target`: Número de VUs desejado ao final de cada etapa.
2. **Usando `ramping-vus`:**
    - Essa opção você pode definir diferentes tipos de rampas e controlar o tempo de espera entre as etapas.

## K6 HTML Report Exporter

É uma extensão que permite gerar relatórios detalhados em formato HTML após a execução dos seus testes de carga. Esses relatórios facilitam a análise dos resultados, apresentando gráficos, tabelas e informações relevantes sobre o desempenho do sistema testado.

**Conteúdo do Relatório:**

O relatório HTML gerado inclui informações como:

- **Resumo Executivo:** Visão geral do teste, incluindo data, duração, número de VUs, etc.
- **Métricas:** Gráficos e tabelas com as principais métricas coletadas durante o teste (tempo de resposta, throughput, taxa de erro, etc.).
- **Checks:** Resultado das verificações personalizadas definidas no script de teste.
- **Thresholds:** Indicação de quais limites foram atingidos ou ultrapassados durante o teste.
- **Logs:** Mensagens de log geradas pelo k6 durante a execução do teste.

## Dominando as Options em Seus Testes de Carga com K6

Permitem personalizar e controlar a execução dos seus testes de carga. Elas definem desde o número de usuários virtuais até a forma como as métricas são coletadas e os thresholds são avaliados.

**Estrutura Básica:**

As opções são definidas em um objeto JavaScript dentro do seu script de teste.

**Principais Opções:**

- **`vus`:** Número de usuários virtuais (VUs) que executarão o teste simultaneamente.
- **`duration`:** Duração total do teste.
- **`iterations`:** Número total de iterações que cada VU deve executar.
- **`stages`:** Define uma rampa de VUs, controlando o aumento e diminuição gradual da carga ao longo do tempo.
- **`thresholds`:** Define limites aceitáveis para as métricas. O teste falha se os limites forem ultrapassados.
- **`ext`:** Permite adicionar extensões ao k6 para funcionalidades extras.
- **`tags`:** Adiciona tags aos resultados do teste para facilitar a organização e análise.

## Construindo uma Pipeline de Testes de Carga com k6 no Azure DevOps

Criar uma pipeline de testes de carga com k6 no Azure DevOps permite automatizar a execução dos seus testes em cada etapa do desenvolvimento, garantindo a qualidade e performance do seu software.

## **Como Fazer Testes de Carga e Desempenho com k6**

**1. Instalação:**

- Baixe e instale o k6 de acordo com seu sistema operacional: https://k6.io/docs/getting-started/installation/

**2. Criação do Script de Teste:**

- Escreva um script em JavaScript usando a API do k6.
- Defina o alvo, o número de usuários virtuais (`vus`), a duração do teste (`duration`) ou o número de iterações (`iterations`).
- Utilize o módulo `http` para fazer requisições HTTP (GET, POST, etc.).
- Utilize `check` para validar as respostas do servidor.
- Utilize `group` para agrupar requisições em transações lógicas.
- Utilize `sleep` para simular o tempo de pensamento do usuário entre as ações.

**3. Execução do Teste:**

- Execute o script usando o comando: `k6 run script.js`
- O k6 exibirá os resultados no console em tempo real.

**4. Análise dos Resultados:**

- O k6 gera métricas como tempo de resposta, throughput (requisições por segundo), taxa de erro, etc.
- Identifique gargalos de desempenho, erros e pontos de melhoria no seu sistema.