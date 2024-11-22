15/05/2024

# Dia 8: MasterClass

- NoSQL
- Exercícios práticos de NoSQL

# NoSQL (Not Only SQL):

NoSQL ao contrário do tradicional banco de dados relacional esse oferece modelos de dados mais flexíveis, escalabilidade horizontal e diferentes modelos de dados, como documentos, colunas, chave-valor e grafos.

<figure>
  <img src="https://www.scylladb.com/wp-content/uploads/nosql-design-principles-diagram-768x500.png" width="70%">
</figure>

Principais comandos em MQL (MongoDB Query Language) para interagir com um banco de dados MongoDB para manipular dados de forma eficaz e eficiente:

1. **Inserir Documento:**
   ```
   db.colecao.insertOne({ campo1: valor1, campo2: valor2 })
   ```

2. **Consultar Documentos:**
   ```
   db.colecao.find({ campo: valor })
   ```

3. **Atualizar Documento:**
   ```
   db.colecao.updateOne(
     { campo: valor },
     { $set: { novoCampo: novoValor } }
   )
   ```

4. **Excluir Documento:**
   ```
   db.colecao.deleteOne({ campo: valor })
   ```

5. **Contar Documentos:**
   ```
   db.colecao.countDocuments({ campo: valor })
   ```

6. **Projetar Resultados:**
   ```
   db.colecao.find({ campo: valor }, { campo: 1, _id: 0 })
   ```

# Exercício Prático:

O site https://www.humongous.io/app/playground/mongodb/new foi utilizado como "compilador" das queries NoSQL, usando as collections de dados bson_usuarios.json e bson_produtos.json .

Após colar o Json de usuários, com base nos usuários listados, você deve:

1) Realizar uma consulta que conte o número de registros existentes.

    ![alt text](Imagens/image-1.png)

    - Resultado:

        ![alt text](Imagens/image-2.png)
        

2) Realizar uma consulta para alterar o usuário com o nome "Teste Start" para "Teste Finish".

    ![alt text](Imagens/image.png)

    - Resultado:

        ![alt text](Imagens/image-3.png)

3) Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".

    ![alt text](Imagens/image-4.png)

    - Resultado:

        ![alt text](Imagens/image-5.png)

4) Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com".

    ![alt text](Imagens/image-6.png)

    - Resultado:

        ![alt text](Imagens/image-7.png)

5) Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com".

    ![alt text](Imagens/image-8.png)

    - Resultado:

        ![alt text](Imagens/image-9.png)


Após colar o Json de produtos, com base nos produtos listados, você deve:

1) Realizar uma consulta que apresente produtos com descrição vazia;

    ![alt text](Imagens/image-10.png)

    - Resultado:

        ![alt text](Imagens/image-11.png)

2) Realizar uma consulta que apresente produtos com a categoria "games";

    ![alt text](Imagens/image-12.png)

    - Resultado:

        ![alt text](Imagens/image-13.png)

3) Realizar uma consulta que apresente produtos com preço "0";

    ![alt text](Imagens/image-14.png)

    - Resultado:

        ![alt text](Imagens/image-15.png)

4) Realizar uma consulta que apresente produtos com o preço maior que "100.00";

    ![alt text](Imagens/image-16.png)

    - Resultado:

        ![alt text](Imagens/image-17.png)

5) Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00";

    ![alt text](Imagens/image-18.png)

    - Resultado:

        ![alt text](Imagens/image-19.png)

6) Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo".

    ![alt text](Imagens/image-20.png)

    - Resultado:
    
        ![alt text](Imagens/image-21.png)