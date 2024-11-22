# Suite de Casos de Teste

## Cenário 1: Cadastro de Usuário

* **CT01**: Cadastro de usuário com sucesso
    - Critério de Aceitação: Cadastro com e-mail de provedor permitido e senha dentro dos limites (de 5 a 10 caracteres).
    - Resultado Esperado: Status HTTP 201 (Created) e usuário cadastrado com sucesso.

    - Resultado Obtido:
    
        * Método: POST
        * URL: http://localhost:3000/usuarios
        * Body:

                Nome: cebolinha
                Email: cebolinha@email.com
                Senha: 123456
                Administrador: true
    ![alt text](<Captura de tela 2024-06-01 165307.png>)

* **CT02**: Cadastro de usuário com falha
    
    * CT02.1:
        - Critério de Aceitação: Verificar se os campos são obrigatórios no formulário de cadastro.
        - Resultado Esperado: Status HTTP 400 se algum campo obrigatório estiver ausente.
        
        - Resultado Obtido: 
            * Método: POST
            * URL: http://localhost:3000/usuarios
            * Body:

                    Nome: “”
                    Email: “”
                    Senha: “”
                    Administrador: “”
            ![alt text](<Captura de tela 2024-06-01 171017.png>)

    * CT02.2:
        - Critério de Aceitação: Tentar cadastrar um usuário com um e-mail já utilizado.
        - Pré-requisito: E-mail já cadastrado.
        - Resultado Esperado: Status HTTP 400 indicando que o e-mail já está em uso.
        
        - Resultado Obtido: 
            * Método: POST
            * URL: http://localhost:3000/usuarios
            * Body:

                    Nome: monica
                    Email: cebolinha@email.com
                    Senha: 123456
                    Administrador: true
            ![alt text](<Captura de tela 2024-06-01 171222.png>)

    * CT02.3:
        - Critério de Aceitação: Tentar cadastrar um usuário com um e-mail de provedor gmail ou hotmail.
        - Resultado Esperado: Status HTTP 400 indicando que o provedor de e-mail não é permitido.
        
        - Resultado Obtido: 
            * Método: POST
            * URL: http://localhost:3000/usuarios
            * Body:

                    Nome: monica
                    Email: monica@gmail.com
                    Senha: 123456
                    Administrador: true
            ![alt text](<Captura de tela 2024-06-01 171359.png>)

    * CT02.4:
        - Critério de Aceitação: Tentar cadastrar um usuário com um e-mail inválido (sem @, com caracteres especiais inválidos, etc.).
        - Resultado Esperado: Status HTTP 400 indicando que o e-mail é inválido.
        
        - Resultado Obtido: 
            * Método: POST
            * URL: http://localhost:3000/usuarios
            * Body:

                    Nome: monica
                    Email: monicagmail.com
                    Senha: 123456
                    Administrador: true
            ![alt text](<Captura de tela 2024-06-01 171531.png>)

    * CT02.5:
        - Critério de Aceitação: Tentar cadastrar um usuário com uma senha fora dos limites (menor que 5 ou maior que 10).
        - Resultado Esperado: Status HTTP 400 indicando que a senha não atende aos requisitos de tamanho.
        
        - Resultado Obtido: 
            * Método: POST
            * URL: http://localhost:3000/usuarios
            * Body:

                    Nome: monica
                    Email: turmadamonica@email.com
                    Senha: 012345678910
                    Administrador: true
            ![alt text](<Captura de tela 2024-06-01 171646.png>)
    
    * CT02.6:
        - Critério de Aceitação: Tentar cadastrar um usuário sem nome valido.
        - Resultado Esperado: Status HTTP 400 indicando que precisa de um nome.
        
        - Resultado Obtido: 
            * Método: POST
            * URL: http://localhost:3000/usuarios
            * Body:

                    Nome: “ “
                    Email: turmadocascao@email.com
                    Senha: 0123456
                    Administrador: true
            ![alt text](<Captura de tela 2024-06-01 171955.png>)

## Cenário 2: Atualização de Usuário

* **CT03**: Atualização de usuário existente com sucesso
    - Critério de Aceitação: Testar a edição de um usuário existente e campos com dados válidos.
    - Pré-requisito: Usuário existente.
    - Resultado Esperado: Status HTTP 200 (OK), usuário atualizado com sucesso.
    
    - Resultado Obtido: 
        * Método: PUT
        * URL: http://localhost:3000/usuarios/:_id
        * ID: 0uxuPY0cbmQhpEz1
        * Body:

                Nome: Turma da Mônica
                Email: turminhadamonica@email.com
                Senha: teste
                Administrador: true
        ![alt text](<Captura de tela 2024-06-02 202112.png>)

* **CT04**: Atualização de usuário inexistente (criação de novo usuário)
    * CT04.1:
        - Critério de Aceitação: Verificar se um novo usuário é criado ao usar o método com um ID inexistente.
        - Pré-requisito: ID de usuário inexistente.
        - Resultado Esperado: Status HTTP 201 (Created), novo usuário criado com sucesso.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID: 
            * Body:

                    nome: Magali,
                    email: magali123@email.com,
                    senha: 7654321,
                    administrador: false
            ![alt text](<Captura de tela 2024-06-02 202744.png>)

    * CT04.2:
        - Critério de Aceitação: Tentar cadastrar um usuário com um e-mail já utilizado.
        - Pré-requisito: E-mail já cadastrado e ID de usuário inexistente.
        - Resultado Esperado: Status HTTP 400 indicando que o e-mail já está em uso.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID: 
            * Body:

                    Nome: cebolinha
                    Email: cebolinha@email.com
                    Senha: 123456
                    Administrador: true
            ![alt text](image.png)
            
    * CT04.3:
        - Critério de Aceitação: Tentar cadastrar um usuário com um e-mail de provedor gmail ou hotmail.
        - Pré-requisito: ID de usuário inexistente.
        - Resultado Esperado: Status HTTP 400 indicando que o provedor de e-mail não é permitido.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID: 
            * Body:

                    Nome: cebolinha
                    Email: cebolinha@gmail.com
                    Senha: 123456
                    Administrador: true
            ![alt text](image-1.png)

    * CT04.4:
        - Critério de Aceitação: Tentar cadastrar um usuário com um e-mail inválido (sem @, com caracteres especiais inválidos, etc.).
        - Pré-requisito: ID de usuário inexistente.
        - Resultado Esperado: Status HTTP 400 indicando que o e-mail é inválido.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID:
            * Body:

                    Nome: cebolinha
                    Email: cebolinhaemail.com
                    Senha: 123456
                    Administrador: true
            ![alt text](image-2.png)

    * CT04.5:
        - Critério de Aceitação: Tentar cadastrar um usuário com uma senha fora dos limites (menor que 5 ou maior que 10).
        - Pré-requisito: ID de usuário inexistente.
        - Resultado Esperado: Status HTTP 400 indicando que a senha não atende aos requisitos de tamanho.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID:
            * Body:

                    Nome: cebolinha
                    Email: cebolinha123@email.com
                    Senha: 12345678910
                    Administrador: true
            ![alt text](image-3.png)
    
    * CT04.6:
        - Critério de Aceitação: Tentar cadastrar um usuário sem nome valido.
        - Pré-requisito: ID de usuário inexistente.
        - Resultado Esperado: Status HTTP 400 indicando que precisa de um nome.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID:
            * Body:

                    Nome: " "
                    Email: cebolinha123@email.com
                    Senha: 12345678910
                    Administrador: true
            ![alt text](image-4.png)

    * CT04.7:
        - Critério de Aceitação: Tentar cadastrar um usuário sem campos validos.
        - Pré-requisito: ID de usuário inexistente.
        - Resultado Esperado: Status HTTP 400 indicando que precisa de campos validos.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID:
            * Body:

                    Nome: ""
                    Email: ""
                    Senha: ""
                    Administrador: ""
            ![alt text](image-5.png)

* **CT05**: Atualização de usuário com falha
    * CT05.1:
        - Critério de Aceitação: Tentar atualizar um usuário com campos obrigatórios ausentes.
        - Pré-requisito: Usuário existente.
        - Resultado Esperado: Status HTTP 400 indicando que campos obrigatórios estão ausentes.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID: 2jxUwIiIhFkrdNOe
            * Body:

                    nome: "",
                    email: "",
                    senha: "",
                    administrador: ""
            ![alt text](<Captura de tela 2024-06-02 203548.png>)

    * CT05.2:
        - Critério de Aceitação: Atualizar um usuário com um e-mail já existente (em outro usuário).
        - Pré-requisito: Usuário existente, outro usuário com o e-mail a ser testado.
        - Resultado Esperado: Status HTTP 400 indicando que o e-mail já está em uso.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID: 2jxUwIiIhFkrdNOe
            * Body:

                    nome: "monica",
                    email: "cascao@email.com",
                    senha: "teste",
                    administrador: "true"
            ![alt text](<Captura de tela 2024-06-02 203818.png>)

    * CT05.3:
        - Critério de Aceitação: Tentar atualizar um usuário com um e-mail de provedor inválido.
        - Pré-requisito: Usuário existente.
        - Resultado Esperado: Status HTTP 400 indicando que o e-mail é inválido.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID: 2jxUwIiIhFkrdNOe
            * Body:

                    nome: "monica",
                    email: "cascao@gmail.com",
                    senha: "teste",
                    administrador: "true"
            ![alt text](<Captura de tela 2024-06-02 204301.png>)

    * CT05.4:
        - Critério de Aceitação: Tentar atualizar um usuário com uma senha fora dos limites.
        - Pré-requisito: Usuário existente.
        - Resultado Esperado: Status HTTP 400 indicando que a senha não atende aos requisitos de tamanho.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID: 2jxUwIiIhFkrdNOe
            * Body:

                    nome: "monica",
                    email: "monicaa@email.com",
                    senha: "12345678910",
                    administrador: "true"
            ![alt text](<Captura de tela 2024-06-02 204644.png>)

    * CT05.5:
        - Critério de Aceitação: Tentar atualizar um usuário com o mesmo e-mail que já está cadastrado para outro usuário.
        - Resultado Esperado: Status HTTP 400 indicando que o e-mail já está em uso e a atualização não pode ser realizada.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID: 2jxUwIiIhFkrdNOe
            * Body:

                    nome: "magali",
                    email: "cascao@email.com",
                    senha: "123456",
                    administrador: "true"
            ![alt text](<Captura de tela 2024-06-02 205109.png>)

    * CT05.6:
        - Critério de Aceitação: Atualizar um usuário existente fornecendo email fora dos padrões.
        - Pré-requisito: Usuário existente.
        - Resultado Esperado: Status HTTP 400 indicando email invalido.
        
        - Resultado Obtido: 
            * Método: PUT
            * URL: http://localhost:3000/usuarios/:_id
            * ID: 0uxuPY0cbmQhpEz1
            * Body:

                    Nome: "monicao"
                    Email: “monicaemail.com”
                    Senha: "123456"
                    Administrador: “false”
            ![alt text](image-6.png)

## Cenário 3: Busca de Usuários

* **CT06**: Listagem dos usuários
    - Critério de Aceitação: Testar a listagem de todos os usuários.
    - Pré-requisito: Usuários cadastrados.
    - Resultado Esperado: Status HTTP 200 (OK), lista de usuários retornada com sucesso.
    
    - Resultado Obtido: 
        * Método: GET
        * URL: http://localhost:3000/usuarios
        ![alt text](image-7.png)

* **CT07**: Busca de usuário por ID
    
    * CT07.1:
        - Critério de Aceitação: Testar a busca de um usuário específico por ID válido.
        - Pré-requisito: Usuário existente.
        - Resultado Esperado: Status HTTP 200 (OK), dados do usuário retornados com sucesso.
        
        - Resultado Obtido: 
            * Método: GET
            * URL: http://localhost:3000/usuarios/:_id
            * ID: 2jxUwIiIhFkrdNOe
            ![alt text](image-9.png)

    * CT07.2:
        - Critério de Aceitação: Tentar realizar ações em um usuário com ID inexistente.
        - Pré-requisito: ID de usuário inexistente.
        - Resultado Esperado: Status HTTP 400 indicando que o usuário não foi encontrado.
        
        - Resultado Obtido: 
            * Método: GET
            * URL: http://localhost:3000/usuarios/:_id
            * ID: abobrinha123
            ![alt text](image-8.png)

## Cenário 4: Exclusão de Usuário

* **CT08**: Exclusão de usuário existente com sucesso
    - Critério de Aceitação: Testar a exclusão de um usuário existente.
    - Pré-requisito: Usuário existente.
    - Resultado Esperado: Status HTTP 200 (OK), usuário excluído com sucesso.
    
    - Resultado Obtido: 
        * Método: DELETE
        * URL: http://localhost:3000/usuarios/:_id
        * ID: 4ypdQr2AmmLJEgU0
        ![alt text](<Captura de tela 2024-06-02 205348.png>)

* **CT09**: Exclusão de usuário inexistente
    - Critério de Aceitação: Tentar realizar ações em um usuário com ID inexistente.
    - Pré-requisito: ID de usuário inexistente.
    - Resultado Esperado: Status HTTP 200
    
    - Resultado Obtido: 
        * Método: DELETE
        * URL: http://localhost:3000/usuarios/:_id
        * ID: abobrinha123
        ![alt text](<Captura de tela 2024-06-02 205525.png>)

* **CT010**: Exclusão de usuário com carrinho
    - Critério de Aceitação: Tentar realizar ações em um usuário com ID existente e com carrinho.
    - Pré-requisito: ID de usuário existente e carrinho cadastrado.
    - Resultado Esperado: Status HTTP 400 indicando usuário com carrinho.
    
    - Resultado Obtido: 
        * Método: DELETE
        * URL: http://localhost:3000/usuarios/:_id
        * ID: 0uxuPY0cbmQhpEz1
        ![alt text](image-10.png)