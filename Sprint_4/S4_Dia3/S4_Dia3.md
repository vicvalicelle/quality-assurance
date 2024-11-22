 # Dia 3: MasterClass

- Linguagem de programação Javascript
- Exercícios

## Javascript

- **Variáveis:**
    - Armazenam dados que podem ser modificados durante o programa.
    - Exemplo:
        
        ```jsx
        let nome = 'victoria';
        let sobrenome = 'valicelle';
        let idade = 20;
        
        console.log(nome);
        console.log(sobrenome);
        console.log(idade);
        ```
        
- **Constantes:**
    - Armazenam dados que não podem ser alterados após a atribuição.
    - Exemplo: `const x = 5.79;`
- **Tipos Primitivos:**
    - **Number:** Números (inteiros ou decimais).
    - **String:** Sequências de caracteres.
    - **Boolean:** Valores lógicos (true ou false).
    - **Null:** Ausência de valor.
    - **Undefined:** Variável sem valor atribuído.
- **Tipagem Dinâmica:** Essa linguagem permite que uma variável armazene diferentes tipos de dados ao longo do tempo.
- **Encontrando Tipos:** O operador `typeof`  é usado para verificar o tipo de uma variável.
- **Objetos:**
    - Coleções de pares com chave-valor.
    - Clonando Objetos: `Object.assing({},)`
    - Exemplo:
        
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
        
- **Arrays:** Listas ordenadas de valores.
    - Exemplo:
        
        ```jsx
        let nomeDoColega = ['Raphael', 20, 'Rio das Ostras'];
        console.log(nomeDoColega[0]);
        ```
        
- **Manipulando Arrays:**
    - `unshift()`: Adiciona um elemento no início dele.
    - `push()`: Adiciona um elemento ao final dele.
    - `splice()`: Adiciona/remove elementos em qualquer posição.
    - `pop()`: Remove o último elemento.
    - `shift()`: Remove o primeiro elemento.
    - `concat()`: Combina arrays.
    - `slice()`: Cria um novo array com uma parte do array original.
    - Iterando: `for`, `forEach`, `for...of`.
    - Outros métodos: `reverse()`, `sort()`, `includes()`, `indexOf()`, `reduce()`.
- **Funções:** Blocos de código que executam tarefas específicas.
    - Exemplo:
        
        ```jsx
        let horasDeViagem = 3;
        
        function resetaHora(hora){
        	horasDeViagem = 0;
        }
        
        console.log(horasDeViagem);
        resetaHora(horasDeViagem);
        console.log(horasDeViagem);
        ```
        
- **Tipos de Funções:**
    - **Funções que retornam ou não algo.**
    - **Arrow Functions:** ( `(parametros) => { ... }`).
- **Operadores:**
    - **Aritméticos: +, - , * , /, %**
    - **Atribuição:**  =, +=, - =, /=, %=
    - **Igualdade:** == (igualdade), === (igualdade estrita), ! = (diferente)
    - **Ternário:** condicao ? valorCasoVerdadeiro : valorCasoFalso.
    - **Lógicos:** && (E),  || (OU), ! (NÃO).
        
        ```jsx
        let ceuAzul = true;
        let charlieBrown = true;
        let ehMusica = ceuAzul && charlieBrown;
        
        console.log('é uma música do charlie brown?', ehMusica);
        
        let naoEhMusica = !ehMusica;
        
        console.log('não é uma música do charlie brown', naoEhMusica);
        ```
        
    - **Spread:** … (usado para expandir elementos de arrays e objetos).
- **Condicionais:**
    - `if...else`: Executa um bloco de código se uma condição for verdadeira, caso contrário, executa outro.
    - `switch...case`: Bloco de código para executar com base em diferentes valores de uma expressão.
- **Laços de Repetição:**
    - `for`: Repete por um número definido de vezes.
    - `while`: Repete enquanto uma condição for verdadeira.
    - `do...while`: Garante que o bloco seja executado pelo menos uma vez.
    - `for...in`: Itera sobre propriedades enumeráveis de um objeto.
    - `for...of`: Itera sobre os valores de um objeto iterável.
        
        ```jsx
        const coresPrimarias = ['Vermelho', 'Azul', 'Amarelo'];
        
        for(let cor of coresPrimarias){
        	console.log(cor);
        }
        ```
        
- **Factory Functions:** Funções que criam e retornam objetos.
    
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
    
- **Constructor Functions:** Funções usadas com o operador `new` para criar objetos.
    
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
    
- **Natureza Dinâmica de Objetos:** Propriedades podem ser adicionadas ou removidas de objetos durante a execução.
- **Biblioteca Math:** Funções matemáticas (ex: `Math.random()`).
    
    ```jsx
    function gerarNumAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const numero = gerarNumAleatorio(1, 10);
    console.log(numero);
    ```
    
- **String:** Métodos para manipular strings (ex: `toUpperCase()`, `toLowerCase()`, `split()`).
- **Template Literal:** Permite criar strings com ` `` `.
    
    ```jsx
    const musica = `
    Brilha, brilha estrelinha
    Lá no céu, pequenininha
    Solitária, se conduz
    Pelo céu com tua luz
    `;
    
    console.log(musica);
    ```
    
- **Date:** Classe embutida que trabalha com datas e horas.
    
    ```jsx
    const hoje1 = new Date();
    const hoje2 = new Date('June 25 2024 10:30');
    const hoje3 = new Date(2024, 06, 25);
    ```