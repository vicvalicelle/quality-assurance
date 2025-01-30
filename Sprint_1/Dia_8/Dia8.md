05/15/2024

# Day 8: MasterClass

- NoSQL
- Practical NoSQL exercises

# NoSQL (Not Only SQL):

NoSQL, unlike traditional relational databases, offers more flexible data models, horizontal scalability, and different data models, such as documents, columns, key-value, and graphs.

<figure>   <img src="https://www.scylladb.com/wp-content/uploads/nosql-design-principles-diagram-768x500.png" width="70%"> </figure>

Main commands in MQL (MongoDB Query Language) to interact with a MongoDB database to manipulate data effectively and efficiently:

1. **Insert Document:**

    ```
    db.colecao.insertOne({ campo1: valor1, campo2: valor2 })
    ```

2. **Consult Documents:**

    ```
    db.colecao.find({ campo: valor })
    ```

3. **Update Document:**

    ```
    db.colecao.updateOne(
      { campo: valor },
      { $set: { novoCampo: novoValor } }
    )
    ```

4. **Delete Document:**

    ```
    db.colecao.deleteOne({ campo: valor })
    ```

5. **Count Documents:**

    ```
    db.colecao.countDocuments({ campo: valor })
    ```

6. **Design Results:**

    ```
    db.colecao.find({ campo: valor }, { campo: 1, _id: 0 })
    ```

# Practical Exercise:

The website https://www.humongous.io/app/playground/mongodb/new was used as a "compiler" for the NoSQL queries, using the data collections bson_usuarios.json and bson_produtos.json .

After pasting the users Json, based on the listed users, you should:

1. Perform a query that counts the number of existing records.

    ![alt text](Imagens/image-1.png)

    - Result:

        ![alt text](Imagens/image-2.png)

2. Perform a query to change the user named "Teste Start" to "Teste Finish".

    ![alt text](Imagens/image.png)

    - Result:

        ![alt text](Imagens/image-3.png)

3. Perform a query to find the user named "Bruce Wayne".

    ![alt text](Imagens/image-4.png)

    - Result:

        ![alt text](Imagens/image-5.png)

4. Perform a query to find the user with the email "ghost_silva@fantasma.com".

    ![alt text](Imagens/image-6.png)

    - Result:

        ![alt text](Imagens/image-7.png)

5. Perform a query to delete the user with email "peterparker@marvel.com".

    ![alt text](Imagens/image-8.png)

    - Result:

        ![alt text](Imagens/image-9.png)

After pasting the products Json, based on the listed products, you should:

1. Perform a query that displays products with an empty description;

    ![alt text](Imagens/image-10.png)

    - Result:

        ![alt text](Imagens/image-11.png)

2. Perform a query that presents products with the "games" category;

    ![alt text](Imagens/image-12.png)

    - Result:

        ![alt text](Imagens/image-13.png)

3. Perform a query that displays products with a price of "0";

    ![alt text](Imagens/image-14.png)

    - Result:

        ![alt text](Imagens/image-15.png)

4. Perform a query that displays products with a price greater than "100.00";

    ![alt text](Imagens/image-16.png)

    - Result:

        ![alt text](Imagens/image-17.png)

5. Perform a query that displays products with prices between "1000.00" and "2000.00";

    ![alt text](Imagens/image-18.png)

    - Result:

        ![alt text](Imagens/image-19.png)

6. Perform a query that displays products whose name contains the word "game".

    ![alt text](Imagens/image-20.png)

    - Result:

        ![alt text](Imagens/image-21.png)