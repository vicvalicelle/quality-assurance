// Divisível por 3, retorna Fizz
// Divisível por 5, retorna Buzz
// Divisível por 3 e 5, retorna FizzBuzz
// Não é divisível por 3 ou 5, retorna a entrada
// Não é um número, retorna 'Não é um número'

let numero = fizzBuzz(5);

function fizzBuzz(numero){
    if(typeof numero != 'number') // Caso não seja um número
        return 'Não é um número';
    if(numero % 3 == 0 || numero % 5 == 0){ // Checa se é divisível por pelo menos um dos dois
        if(numero % 3 == 0){  // Checa se é divisível por 3
            if(numero % 5 == 0) // Checa se é divisível por 5 também
                return 'FizzBuzz';
            else
                return 'Fizz'; // Divisível somente por 3
        }
        else
            return 'Buzz'; // Divisível somente por 5
    }
    return numero; // Retorna a entrada já que não é divisível por 3 e nem por 5
}

console.log(numero);