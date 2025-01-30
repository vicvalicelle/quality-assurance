# Day 3: MasterClass

- Javascript programming language
- Exercises

## Javascript

- **Variables:**

    - They store data that can be modified during the program.

    - Example:

        ```jsx
        let nome = 'victoria';
        let sobrenome = 'valicelle';
        let idade = 20;

        console.log(nome);
        console.log(sobrenome);
        console.log(idade);
        ```

- **Constants:**

    - Store data that cannot be changed after assignment.
    - Example: `const x = 5.79;`

- **Primitive Types:**

    - **Number:** Numbers (integer or decimal).
    - **String:** Sequences of characters.
    - **Boolean:** Logical values (true or false).
    - **Null:** Absence of value.
    - **Undefined:** Variable with no value assigned.

- **Dynamic Typing:** This language allows a variable to store different types of data over time.

- **Finding Types:** The `typeof` operator is used to check the type of a variable.

- **Objects:**

    - Collections of key-value pairs.

    - Cloning Objects: `Object.assing({},)`

    - Example:

        ```jsx
        let nome = 'victoria';
        let sobrenome = 'valicelle';
        let idade = 20;

        let pessoa = {
        	nome: 'victoria',
        	idade: 20,
        	sobrenome: 'valicelle'
        };

        console.log(pessoa);
        ```

- **Arrays:** Ordered lists of values.

    - Example:

        ```jsx
        let nomeDoColega = ['Raphael', 20, 'Rio das Ostras'];
        console.log(nomeDoColega[0]);
        ```

- **Manipulating Arrays:**

    - `unshift()` : Adds an element at the beginning of it.
    - `push()` : Adds an element to the end of it.
    - `splice()` : Adds/removes elements at any position.
    - `pop()` : Removes the last element.
    - `shift()` : Removes the first element.
    - `concat()` : Combines arrays.
    - `slice()` : Creates a new array with a portion of the original array.
    - Iterating: `for` , `forEach` , `for...of` .
    - Other methods: `reverse()` , `sort()` , `includes()` , `indexOf()` , `reduce()` .

- **Functions:** Blocks of code that perform specific tasks.

    - Example:

        ```jsx
        let horasDeViagem = 3;

        function resetaHora(hora){
        	horasDeViagem = 0;
        }

        console.log(horasDeViagem);
        resetaHora(horasDeViagem);
        console.log(horasDeViagem);
        ```

- **Types of Functions:**

    - **Functions that return something or not.**
    - **Arrow Functions:** ( `(parametros) => { ... }` ).

- **Operators:**

    - **Arithmetic: +, -, *, /, %**

    - **Assignment:** =, +=, - =, /=, %=

    - **Equality:** == (equality), === (strict equality), != (not equal)

    - **Ternary:** condition ? TrueCaseValue : FalseCaseValue.

    - **Logical:** &amp;&amp; (AND), || (OR), ! (NOT).

        ```jsx
        let ceuAzul = true;
        let charlieBrown = true;
        let ehMusica = ceuAzul && charlieBrown;

        console.log('é uma música do charlie brown?', ehMusica);

        let naoEhMusica = !ehMusica;

        console.log('não é uma música do charlie brown', naoEhMusica);
        ```

    - **Spread:** … (used to expand elements of arrays and objects).

- **Conditionals:**

    - `if...else` : Executes a block of code if a condition is true, otherwise executes another.
    - `switch...case` : Block of code to execute based on different values of an expression.

- **Repetition Loops:**

    - `for` : Repeats for a defined number of times.

    - `while` : Repeats while a condition is true.

    - `do...while` : Ensures that the block is executed at least once.

    - `for...in` : Iterates over enumerable properties of an object.

    - `for...of` : Iterates over the values of an iterable object.

        ```jsx
        const coresPrimarias = ['Vermelho', 'Azul', 'Amarelo'];

        for(let cor of coresPrimarias){
        	console.log(cor);
        }
        ```

- **Factory Functions:** Functions that create and return objects.

    ```jsx
    function criarAnimal(nome, especie, som) {
      return {
        nome,
        especie,
        barulho: function() {
          console.log(som);
        }
      };
    }

    const cachorro = criarAnimal("Thor", "Cachorro", "Au Au!");
    const gato = criarAnimal("Marie", "Gato", "Miau!");

    cachorro.emitirSom();
    gato.emitirSom();
    ```

- **Constructor Functions:** Functions used with the `new` operator to create objects.

    ```jsx
    function Carro(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.ligar = function() {
        console.log("bibi!!!");
      };
    }

    const meuCarro = new Carro("Toyota", "Yaris", 2020);

    meuCarro.ligar();
    ```

    ```jsx
    function Postagem(titulo, mensagem, autor) {
    	this. titulo = titulo,
    	this-mensagem = mensagem,
    	this. autor = autor,
    	this.visualizacoes= 0,
    	this. comentarios = [],
    	this.estaAoVivo = false
    }

    let postagem = new Postagem( 'a', 'b','c');
    console. log(postagem);
    ```

- **Dynamic Nature of Objects:** Properties can be added or removed from objects at runtime.

- **Math Library:** Mathematical functions (e.g. `Math.random()` ).

    ```jsx
    function gerarNumAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const numero = gerarNumAleatorio(1, 10);
    console.log(numero);
    ```

- **String:** Methods to manipulate strings (e.g. `toUpperCase()` , `toLowerCase()` , `split()` ).

- **Template Literal:** Allows you to create strings with ```` .

    ```jsx
    const musica = `
    Brilha, brilha estrelinha
    Lá no céu, pequenininha
    Solitária, se conduz
    Pelo céu com tua luz
    `;

    console.log(musica);
    ```

- **Date:** Built-in class that works with dates and times.

    ```jsx
    const hoje1 = new Date();
    const hoje2 = new Date('June 25 2024 10:30');
    const hoje3 = new Date(2024, 06, 25);
    ```