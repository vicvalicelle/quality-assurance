# Plano de Teste 
## Cadastro de Vendedores no Marketplace ServeRest
1. **Resumo do Plano de Teste**:

    O plano de teste será sobre o cadastro de vendedores para a realização de vendas no Marketplace do ServeRest. Onde deve ser possível cadastrar, atualizar, listar e deletar os vendedores, analisar testes, automação e a matriz de rastreabilidade.

2. **Estratégia do Plano de Teste**:

    - Análise dos Critérios e Criação de Casos de Teste: Uma lista de casos de teste que abrangem todos os critérios de aceitação, incluindo campos obrigatórios, validação de e-mail e senha, tratamento de usuários inexistentes e cenários além do Swagger.

    - Preparação do Ambiente de Testes: Configurar o Postman, o banco de dados de testes e usar o Swagger.
    - Execução dos Testes: Executar cada caso de teste no Postman, verificar as respostas da API e documentar resultados.
    - Análise dos Resultados e Relatório: Analisar os resultados dos testes e sugerir melhorias.

3. **Cenários Macro**:

    * Cenário 1: Cadastro de Usuário (Vendedor)
        - CT01: Cadastro de usuário com sucesso
        - CT02: Cadastro de usuário com falha 
        
    * Cenário 2: Atualização de Usuário
        - CT03: Atualização de usuário existente com sucesso
        - CT04: Atualização de usuário inexistente (criação de novo usuário)
        - CT05: Atualização de usuário com falha
    * Cenário 3: Busca de Usuários
        - CT06: Listagem dos usuários
        - CT07: Busca de usuário por ID
    * Cenário 4: Exclusão de Usuário
        - CT08: Exclusão de usuário existente com sucesso
        - CT09: Exclusão de usuário inexistente
        - CT010: Exclusão de usuário existente com carrinho

4. **Testes Candidatos para Automação**:
    Considerando custo-benefício, eficiência e cobertura de testes, a automação desses testes trará vantagens significativas em relação aos testes manuais:
    - Testes repetitivos: Casos como o CT02 e CT05  que envolvem testar diversas combinações de dados inválidos. A automação permite executar esses testes de forma rápida e precisa, garantindo que todas as validações sejam testadas.
    - Testes com grande volume de dados: O CT06 pode envolver um grande volume de dados, tornando a verificação manual trabalhosa e demorada.

5. **Ferramentas**:
    - Postman: Para enviar as requisições à API, de acordo com os casos de teste definidos.
    - Swagger: Documentação do Swagger como base para os testes.

6. **Cenários Importantes e Valor Gerado**:
    * CT01: Cadastro de usuário com sucesso:
        - Importância: É o fluxo principal responsável por permitir que novos vendedores se cadastrem, se falhar não cumprirá o propósito básico.
        - Valor: Essencial para o crescimento da plataforma e para o sucesso do negócio.
    * CT02: Cadastro de usuário com falha:
        - Importância: Evita dados inconsistentes no banco de dados, problemas de segurança e falhas na aplicação.
        - Valor: Qualidade dos dados cadastrados e a segurança da API.
    * CT03: Atualização de usuário existente com sucesso:
        - Importância: Fundamental para manter as informações corretas e relevantes.
        - Valor: Melhora a experiência do usuário e a confiabilidade da plataforma.
    * CT04: Atualização de usuário inexistente:
        - Importância: Este cenário verifica se a mesma chamada com os mesmos dados produz o mesmo resultado.
        - Valor: Garantir a consistência e evitar a criação de usuários duplicados.
    * CT07: Busca de usuário por ID:
        - Importância: Este cenário é essencial para acessar informações específicas de um usuário.
        - Valor: Fundamental para o funcionamento de outras funcionalidades.
    * CT08: Exclusão de usuário existente com sucesso:
        - Importância: A exclusão de usuários é importante para remover dados desatualizados ou irrelevantes.
        - Valor: Garantir a proteção dos dados dos usuários e a integridade da plataforma.
