14/05/2024

# Dia 7: MasterClass
- SQL
- Exercício prático de SQL

# SQL

SQL (Structured Query Language) é uma linguagem de programção utilizada para gerenciar e manipular bancos de dados relacionais, mantendo a estrutura e também podendo incluir, excluir, modificar e pesquisar informações das tabelas desses bancos de dados.

Subconjuntos da Linguagem SQL:

<figure>
  <img src="https://lh6.googleusercontent.com/N3nCjYeLaw030Jy9key4fOaAu_LKnzp8RCOmLlumwp0tc-hymIycnbzuhQXlisl-uo0hbTCzo7_QU3gTxBpqbaU5op08D_7ib4MHQJPhqbHAyjFsE8tVZLoZrYZ69P2Ick_LU6Mc" width="50%">
</figure>

## Principais Comandos SQL:

1. **CREATE DATABASE**: Cria um novo banco de dados.

    ```sql
    CREATE DATABASE nome_do_banco_de_dados;
    ```

2. **CREATE TABLE**: Cria uma nova tabela dentro do banco de dados.

    ```sql
    CREATE TABLE nome_da_tabela (
        coluna1 tipo_de_dado,
        coluna2 tipo_de_dado,
        ...
    );
    ```

3. **INSERT INTO**: Insere novos registros em uma tabela existente.

    ```sql
    INSERT INTO nome_da_tabela (coluna1, coluna2, ...) VALUES (valor1, valor2, ...);
    ```

4. **SELECT**: Recupera dados de uma ou mais tabelas.

    ```sql
    SELECT coluna1, coluna2 FROM nome_da_tabela WHERE condição;
    ```

5. **UPDATE**: Atualiza dados existentes em uma tabela.

    ```sql
    UPDATE nome_da_tabela SET coluna1 = novo_valor WHERE condição;
    ```

6. **DELETE**: Exclui registros de uma tabela.

    ```sql
    DELETE FROM nome_da_tabela WHERE condição;
    ```

7. **ALTER TABLE**: Altera a estrutura de uma tabela existente.

    ```sql
    ALTER TABLE nome_da_tabela ADD coluna tipo_de_dado;
    ```

8. **DROP TABLE**: Exclui uma tabela existente.

    ```sql
    DROP TABLE nome_da_tabela;
    ```

9. **CREATE INDEX**: Cria um índice em uma coluna de uma tabela para otimizar a pesquisa.

    ```sql
    CREATE INDEX index_nome ON nome_da_tabela (coluna);
    ```

10. **JOIN**: Combina dados de duas ou mais tabelas com base em uma condição relacionada.

    ```sql
    SELECT * FROM tabela1 INNER JOIN tabela2 ON tabela1.coluna = tabela2.coluna;
    ```

# Exercícios: ✏️

**Exercitando SQL**

Utilizando o site https://sqliteonline.com/ como "compilador" das queries SQL do arquivo **database_challenge.sql** .

Com base na tabela de **Usuários**, você deve:

1) Realizar uma consulta que conte o número de registros na tabela.
    ```sql
    SELECT COUNT(*) FROM usuarios;
    ```
    - Resposta: 

        ![alt text](Imagens/image-22.png)

2) Realizar uma consulta para encontrar o usuário com o id 10.
    ```sql
    SELECT * FROM usuarios WHERE id = 10;
    ```
    - Resposta: 

        ![alt text](Imagens/image-23.png)

3) Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".
    ```sql
    SELECT * FROM usuarios WHERE nome = 'Bruce Wayne';
    ```
    - Resposta: 

        ![alt text](Imagens/image-24.png)

4) Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com".
    ```sql
    SELECT * FROM usuarios WHERE email = 'ghost_silva@fantasma.com';
    ```
    - Resposta: 

        ![alt text](Imagens/image-25.png)

5) Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com".
    ```sql
    DELETE FROM usuarios WHERE email = 'peterparker@marvel.com';
    ```

Com base na tabela de **Produtos**, você deve:

1) Realizar uma consulta que apresente produtos com descrição vazia;
    ```sql
    SELECT * FROM produtos WHERE descricao = '';
    ```
    - Resposta: 

        ![alt text](Imagens/image-26.png)

2) Realizar uma consulta que apresente produtos com a categoria "games";
    ```sql
    SELECT * FROM produtos WHERE categoria = 'games';
    ```
    - Resposta: 

        ![alt text](Imagens/image-27.png)

3) Realizar uma consulta que apresente produtos com preço "0";
    ```sql
    SELECT * FROM produtos WHERE preco = 0;
    ```
    - Resposta: 

        ![alt text](Imagens/image-28.png)

4) Realizar uma consulta que apresente produtos com o preço maior que "100.00";
    ```sql
    SELECT * FROM produtos WHERE preco > 100.00;
    ```
    - Resposta: 

        ![alt text](Imagens/image-29.png)

5) Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00";
    ```sql
    SELECT * FROM produtos WHERE preco BETWEEN 1000.00 AND 2000.00;
    ```
    - Resposta: 

        ![alt text](Imagens/image-30.png)

6) Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo";
    ```sql
    SELECT * FROM produtos WHERE nome LIKE '%jogo%';
    ```
    - Resposta: 
    
        ![alt text](Imagens/image-31.png)